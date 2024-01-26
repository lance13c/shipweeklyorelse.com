import { X_AUTH_TOKEN } from '@/app/lib/authHeaders';
import handleErrors from './handleErrors';

interface DeleteProps {
  body?: BodyInit | null | undefined;
  token: string;
}

const deleteHttp = (url: string, { body, token }: DeleteProps) =>
  fetch(url, {
    method: 'DELETE',
    headers: new Headers({ 'Content-Type': 'application/json', [X_AUTH_TOKEN]: token }),
    credentials: 'same-origin',
    body: body,
  }).then(async (res) => {
    const data = await res.json();
    handleErrors(res.status, data);
    return data;
  });

export default deleteHttp;
