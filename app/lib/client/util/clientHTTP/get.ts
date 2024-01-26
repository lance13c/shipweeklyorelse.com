import { X_AUTH_TOKEN } from '@/app/lib/authHeaders';
import clientEnvs from '@/app/lib/client/util/clientEnvs';
import handleErrors from './handleErrors';

interface GetProps {
  adminSecret?: string;
  token?: string;
  params?: Record<string, string>;
}

const get = async (url: string, { token, adminSecret, params }: GetProps): Promise<unknown> => {
  let headers = {};
  if (token) {
    headers = {
      [X_AUTH_TOKEN]: token,
    };
  }

  const urlWithSearchParams = new URL(clientEnvs.NEXT_PUBLIC_DOMAIN + url);

  // Add search params to url
  if (params) {
    for (const [key, value] of Object.entries(params)) {
      urlWithSearchParams.searchParams.set(key, value);
    }
  }

  const response = await fetch(urlWithSearchParams.href, {
    method: 'GET',
    headers: new Headers({ 'Content-Type': 'application/json', ...headers }),
    credentials: 'same-origin',
  });

  const data = await response.json();
  handleErrors(response.status, data);

  return data;
};

export default get;
