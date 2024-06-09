const dominioAuth0 = "dev-7g4m0r3xtc86blle.us.auth0.com"

const makePost = (url: string, body: any, options={}as any) => {
  const headers = options.headers || {};
  return fetch(url, {body, method: 'POST', headers}).then((res) => {
    if (res.statusText === 'No Content') {
      return res;
    } else{
      return res.json();
    }
  });
};

export const makeJSONPost = async (
    url: string,
    data: {
      client_id?: string;
      client_secret?: string;
      audience?: string;
      grant_type?: string;
      data?: any;
    },
    options = {} as any
  ) => {
    const body = JSON.stringify(data);
    const headers = options.headers || {};
    headers['Content-Type'] = 'application/json';
return makePost(url, body, {headers});
  };


  
  export const getAuth0Token =() => {
    const url = 'https://${domainAuth0}/oauth/token';
    const headers = {'Content-Type': 'application/json'};
    const body = {
      client_id: process.env.API_AUTH0_CLIENT_ID,
      client_secret: process.env.API_AUTH0_CLIENT_SECRET,
      audience: 'https://${domainAuth0}/api/v2/',
      grant_type: 'client_credentials',
    };
    return makeJSONPost(url, body, {headers});
  }

  export const createUserAuth0 = (data:any, token:any, tokenType:any)=>{
    const url = 'https://${domainAuth0}/api/v2/users';
    const headers = {
       Authorization: `${tokenType} ${token}`
    };
    const body = data;
    return makeJSONPost(url, body, {headers});
  };

  export const createUser = (data:any)=>{
    const url = '/api/auth0';
    const headers = {};
    const body = {
      data,
    };
    return makeJSONPost(url, body, { headers });
    //return makePost(url, body, {headers});
  };
