export class HttpError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = 'HttpError';
    this.message = message;
    this.status = status;
  }
}

const _getHost = () => {
  return window.location.hostname === 'localhost'
    ? `http://localhost:${process.env.SERVER_PORT ?? '3000'}`
    : `http://${window.location.host}`;
};

const _getHeaders = (inputHeaders?: { [key: string]: string }) => {
  let headers = inputHeaders || {};
  headers['Accept'] = 'application/json';
  const headersWithAuth = _getToken()
    ? {
        ...headers,
        Authorization: `Bearer ${_getToken()}`
      }
    : headers;
  return headersWithAuth;
};

const _getToken = () => {
  const token: string | null = localStorage.getItem('token');
  return token;
};

export const getHttp = async (url_path: string) => {
  const fullUrl = `${_getHost()}${url_path}`;
  const result = await fetch(fullUrl, {
    method: 'GET',
    headers: _getHeaders()
  });
  if (!result.ok) {
    throw new HttpError(result.statusText, result.status);
  }
  return await result.json();
};
