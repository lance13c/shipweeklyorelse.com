import { serverEnvs } from '@/app/lib/server/serverEnvs';
import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';

const stripe = new Stripe(serverEnvs.STRIPE_SECRET_KEY);

interface CreateStripAccountProps {
  req: NextApiRequest;
  res: NextApiResponse;
}

interface Discount {
  coupon: string;
}

export async function createStripCheckoutSession({ priceId, discountId }: { priceId: string; discountId?: string }) {
  let successUrl = `${serverEnvs.NEXT_PUBLIC_DOMAIN}/app/payment/verify?session_id={CHECKOUT_SESSION_ID}`;

  const discounts: Discount[] = [];

  if (discountId) {
    discounts.push({
      coupon: discountId,
    });
  }

  const sessionOptions: Stripe.Checkout.SessionCreateParams = {
    mode: 'subscription',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    success_url: successUrl,
    cancel_url: `${serverEnvs.NEXT_PUBLIC_DOMAIN}`,
  };

  if (discountId) {
    sessionOptions.discounts = discounts;
  } else {
    sessionOptions.allow_promotion_codes = true;
  }

  const session = await stripe.checkout.sessions.create(sessionOptions);

  return {
    redirectUrl: session.url,
  };
}
