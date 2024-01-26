/* eslint-disable import/no-anonymous-default-export */
import deleteHttp from './delete';
import get from './get';
import post from './post';
import put from './put';

export default {
  get,
  post,
  put,
  delete: deleteHttp,
};
