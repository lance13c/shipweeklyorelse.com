import { assertIsDefined } from '@/app/lib/assertions';

const NEXT_PUBLIC_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;

assertIsDefined(NEXT_PUBLIC_DOMAIN, 'NEXT_PUBLIC_DOMAIN');
assertIsDefined(STRIPE_SECRET_KEY, 'STRIPE_SECRET_KEY');

export const serverEnvs = { NEXT_PUBLIC_DOMAIN, STRIPE_SECRET_KEY };
