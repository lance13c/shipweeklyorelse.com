import { z } from 'zod';

// Create zod schema for body
const GeneratePlanBodySchema = z.object({
  prompt: z.string().max(200),
  parentPlanId: z.string().optional(),
});

export async function POST(req: Request) {
  const body = await req.json();

  try {
    const parsedBody = GeneratePlanBodySchema.safeParse(body);
    if (!parsedBody.success) {
      console.error(parsedBody.error.errors);
      throw new Error('Invalid body.');
    }
    const { prompt, parentPlanId } = parsedBody.data;
  } catch (error) {
    return Response.json(
      // @ts-expect-error -- valid
      { message: error.message },
      {
        status: 500,
      },
    );
  }
}
