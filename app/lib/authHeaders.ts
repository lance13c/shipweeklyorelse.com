import { IncomingHttpHeaders } from 'http';
export const X_AUTH_TOKEN = 'x-auth-token' as string;
export const X_HASURA_ADMIN_SECRET = 'x-hasura-admin-secret' as string;
export const X_AUTH_USER_ID = 'x-auth-user-id';

export const getAuthToken = (headers: IncomingHttpHeaders): string => {
  // TODO - Explicit cast to string (could cause problems)
  const token = headers[X_AUTH_TOKEN] as string;
  if (!token) {
    throw new Error('Token is not defined');
  }

  return token;
};

export const hasAuthToken = (headers: IncomingHttpHeaders): boolean => {
  const token = headers[X_AUTH_TOKEN];
  if (!token) {
    return false;
  }

  return true;
};

export const getAuthUserId = (headers: IncomingHttpHeaders): string => {
  // TODO - Explicit cast to string (could cause problems)
  const auth_id = headers[X_AUTH_USER_ID] as string;
  if (!auth_id) {
    throw new Error('Auth id is not defined');
  }

  return auth_id;
};

export const hasAuthUserId = (headers: IncomingHttpHeaders): boolean => {
  const auth_id = headers[X_AUTH_USER_ID];
  if (!auth_id) {
    return false;
  }

  return true;
};
