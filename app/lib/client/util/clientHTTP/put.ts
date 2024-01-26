import { X_AUTH_TOKEN } from '@/app/lib/authHeaders';
import handleErrors from './handleErrors';

interface PutProps {
  body?: BodyInit | null | undefined;
  token: string;
}

const put = (url: string, { body, token }: PutProps) =>
  fetch(url, {
    method: 'PUT',
    headers: new Headers({ 'Content-Type': 'application/json', [X_AUTH_TOKEN]: token }),
    credentials: 'same-origin',
    body: body,
  }).then(async (res) => {
    const data = await res.json();
    handleErrors(res.status, data);
    return data;
  });

export default put;
