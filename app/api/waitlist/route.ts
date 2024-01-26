import { createStripCheckoutSession } from '@/app/lib/server/payments/createStripeCheckoutSession';
import { z } from 'zod';

const WaitlistSchema = z.object({
  priceId: z.string(),
  discountId: z.string().optional(),
  email: z.string().email(),
});

export async function POST(req: Request) {
  const body = (await req.json()) || {};
  console.log('body', body);

  const { priceId, discountId, email } = WaitlistSchema.parse(body);

  const { redirectUrl } = await createStripCheckoutSession({ priceId, discountId, email });
  if (!redirectUrl) {
    console.error({
      message: 'Failed to create checkout session',
    });
    return Response.error();
  }

  console.info('redirecting to', redirectUrl);

  return Response.json({
    redirectUrl,
  });
}
