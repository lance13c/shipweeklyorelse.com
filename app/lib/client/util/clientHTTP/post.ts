import { X_AUTH_TOKEN } from '@/app/lib/authHeaders';
import handleErrors from './handleErrors';

interface PostProps {
  body?: BodyInit | null | undefined;
  token?: string;
}

const post = (url: string, { body, token = '' }: PostProps) =>
  fetch(url, {
    method: 'POST',
    headers: new Headers({ 'Content-Type': 'application/json', [X_AUTH_TOKEN]: token }),
    credentials: 'same-origin',
    body: body,
  }).then(async (res) => {
    const data = await res.json();
    handleErrors(res.status, data);
    return data;
  });

export default post;
