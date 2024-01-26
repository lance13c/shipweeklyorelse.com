import { assertIsDefined } from '@/app/lib/assertions';

const NEXT_PUBLIC_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
const NEXT_PUBLIC_ENV = process.env.NEXT_PUBLIC_ENV;
const NEXT_PUBLIC_STRIPE_PK = process.env.NEXT_PUBLIC_STRIPE_PK;

assertIsDefined(NEXT_PUBLIC_DOMAIN, 'NEXT_PUBLIC_DOMAIN');
assertIsDefined(NEXT_PUBLIC_ENV, 'NEXT_PUBLIC_ENV');
assertIsDefined(NEXT_PUBLIC_STRIPE_PK, 'NEXT_PUBLIC_STRIPE_PK');

export default {
  NEXT_PUBLIC_DOMAIN,
  NEXT_PUBLIC_ENV,
  NEXT_PUBLIC_STRIPE_PK,
};
