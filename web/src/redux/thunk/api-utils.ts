interface RequestOptions {
  mock: boolean;
}

export class HttpError extends Error {
  status: number;
  constructor(message: string, status: number) {
    super(message);
    this.name = 'HttpError';
    this.message = message;
    this.status = status;
  }
}

const mockDebug = false;

const _getHost = (mock?: boolean) => {
  return mock || mockDebug
    ? 'http://localhost:3000'
    : window.location.hostname === 'localhost'
    ? `http://localhost:${process.env.NEXT_PUBLIC_SERVER_PORT ?? '3000'}`
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
  //const token: string | null = localStorage.getItem('token');
  return null;
};

export const getHttp = async (url_path: string, options?: RequestOptions) => {
  const fullUrl = `${_getHost(options?.mock)}${url_path}`;
  const result = await fetch(fullUrl, {
    method: 'GET',
    headers: _getHeaders()
  });
  if (!result.ok) {
    throw new HttpError(result.statusText, result.status);
  }
  return await result.json();
};

export const deleteHttp = async (
  url_path: string,
  options?: RequestOptions
) => {
  const fullUrl = `${_getHost(options?.mock)}${url_path}`;
  const result = await fetch(fullUrl, {
    method: 'DELETE',
    headers: _getHeaders()
  });
  if (!result.ok) {
    throw new HttpError(result.statusText, result.status);
  }
  return await result;
};

export const postHttp = async (
  url_path: string,
  body: object,
  options?: RequestOptions
) => {
  const fullUrl = `${_getHost(options?.mock)}${url_path}`;
  const result = await fetch(fullUrl, {
    method: 'POST',
    headers: _getHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(body)
  });
  if (!result.ok) {
    throw new HttpError(result.statusText, result.status);
  }
  return await result.json();
};

export const putHttp = async (
  url_path: string,
  body: object,
  options?: RequestOptions
) => {
  const fullUrl = `${_getHost(options?.mock)}${url_path}`;
  const result = await fetch(fullUrl, {
    method: 'PUT',
    headers: _getHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(body)
  });
  if (!result.ok) {
    throw new HttpError(result.statusText, result.status);
  }
  return await result.json();
};
