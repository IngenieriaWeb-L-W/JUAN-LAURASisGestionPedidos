import { getServerSession } from "next-auth";
import { options } from "@/pages/api/auth/[...nexauth]";
import { createUserAuth0, getAuth0Token } from "@/utils/api";

const Auth0 = async (req: any, res: any) => {
    if (req.method === 'POST') {
        const session = await getServerSession(req, res, options);
        const {data} =req.body;
        if (session) {
           let userData 
           try{
            const {access_token:accessToken, token_type:tokenType} = await getAuth0Token().then(
                (resToken) => resToken
            );
            data.connection = 'Username-Password-Authenticated';
            userData = await createUserAuth0(data, accessToken, tokenType).then((res) => res);
        } catch (error) {
            req.status(500).json({message: `Error ${error}`}); //res.status
        } 
        if (!Object.keys(userData).includes('statusCode')){
            return res.status(200).json({usuario: userData});
        }
        return res.status(userData.statusCode).json({error: userData.message, data: userData});
        } else {
            res.status(401).json({message: 'you are not authenticated'});
        }
    }else {
        res.status(400).json({message:'Method not allowed'});
    }
};

export default Auth0;