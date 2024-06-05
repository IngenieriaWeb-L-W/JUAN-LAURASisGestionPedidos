import { getServerSession } from 'next-auth/next';
import { options } from '@/pages/api/auth/[...nextauth]';
import { createUserAuth0, getAuth0Token } from '@/utils/api';

const Auth0 = async (req: any, res: any) => {
  if (req.method === 'POST') {
    const session = await getServerSession(req, res, options);
    const { data } = req.body;
    if (session) {
      let userData;
      try {
        const { access_token: accessToken, token_type: tokenType } = await getAuth0Token().then(
          (resToken) => resToken
        );
        data.connection = 'Username-Password-Authentication';
        userData = await createUserAuth0(data, accessToken, tokenType).then((resUser) => resUser);
      } catch (error) {
        req.status(409).json({ error: `Error getting token ${error}` });
      }
      if (!Object.keys(userData).includes('statusCode')) {
        // send welcome email
        return res.status(200).json({ usuario: userData });
      }
      return res.status(userData.statusCode).json({ error: userData.message, data: userData });
    } else {
      res.status(401).json({ error: 'Unauthorized' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
};

export default Auth0;
