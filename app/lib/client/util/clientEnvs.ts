import { assertIsDefined } from '@/app/lib/assertions';

const NEXT_PUBLIC_DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;
const NEXT_PUBLIC_ENV = process.env.NEXT_PUBLIC_ENV;
const NEXT_PUBLIC_MONTHLY_PRICE_ID = process.env.NEXT_PUBLIC_MONTHLY_PRICE_ID;
const NEXT_PUBLIC_ANNUAL_PRICE_ID = process.env.NEXT_PUBLIC_ANNUAL_PRICE_ID;
const NEXT_PUBLIC_ANNUAL_DISCOUNT_ID = process.env.NEXT_PUBLIC_ANNUAL_DISCOUNT_ID;

assertIsDefined(NEXT_PUBLIC_DOMAIN, 'NEXT_PUBLIC_DOMAIN');
assertIsDefined(NEXT_PUBLIC_ENV, 'NEXT_PUBLIC_ENV');
assertIsDefined(NEXT_PUBLIC_MONTHLY_PRICE_ID, 'NEXT_PUBLIC_MONTHLY_PRICE_ID');
assertIsDefined(NEXT_PUBLIC_ANNUAL_PRICE_ID, 'NEXT_PUBLIC_ANNUAL_PRICE_ID');
assertIsDefined(NEXT_PUBLIC_ANNUAL_DISCOUNT_ID, 'NEXT_PUBLIC_ANNUAL_DISCOUNT_ID');

export default {
  NEXT_PUBLIC_DOMAIN,
  NEXT_PUBLIC_ENV,
  NEXT_PUBLIC_MONTHLY_PRICE_ID,
  NEXT_PUBLIC_ANNUAL_PRICE_ID,
  NEXT_PUBLIC_ANNUAL_DISCOUNT_ID,
};
