import { createStripCheckoutSession } from '@/app/lib/server/payments/createStripeCheckoutSession';
import { z } from 'zod';

const WaitlistSchema = z.object({
  priceId: z.string(),
  discountId: z.string().optional(),
});

export async function POST(req: Request) {
  const body = (await req.json()) || {};

  const { priceId, discountId } = WaitlistSchema.parse(body);

  const { redirectUrl } = await createStripCheckoutSession({ priceId, discountId });
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
