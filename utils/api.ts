const dominioAuth0 = 'inventariosmj.us.auth0.com';

const makePost = (url: string, body: any, options = {} as any) => {
  const headers = options.headers || {};
  return fetch(url, { body, headers, method: 'POST' }).then((res) => {
    if (res.statusText === 'No Content') {
      return res;
    } else {
      return res.json();
    }
  });
};

const makeJSONPost = (
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
  return makePost(url, body, { headers });
};

export const getAuth0Token = () => {
  const url = `https://${dominioAuth0}/oauth/token`;
  const headers = { 'Content-Type': 'application/json' };
  const body = {
    client_id: process.env.AUTHO_API_CLIENT_ID,
    client_secret: process.env.AUTHO_API_CLIENT_SECRET,
    audience: `https://${dominioAuth0}/api/v2/`,
    grant_type: 'client_credentials',
  };
  return makeJSONPost(url, body, { headers });
};

export const createUserAuth0 = (data: any, token: any, tokenType: any) => {
  const url = `https://${dominioAuth0}/api/v2/users`;
  const headers = {
    Authorization: `${tokenType} ${token}`,
  };
  const body = data;

  return makeJSONPost(url, body, { headers });
};

export const createUser = (data: any) => {
  const url = '/api/auth0';
  const headers = {};
  const body = {
    data,
  };
  return makeJSONPost(url, body, { headers });
};
