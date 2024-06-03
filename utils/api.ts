const makeJSONPost = async (
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
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body,
    });
    return response.json();
  };
  
  export const AddtoCart = (data: any, url: any) => {
    const headers = {};
    const body = { data };
    return makeJSONPost(url, body, { headers });
  };