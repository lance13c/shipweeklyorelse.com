// src/lib/openAI.ts
import { assertIsDefined } from '@/app/lib/assertions';
import { OpenAI } from '@langchain/openai';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_MODEL = process.env.OPENAI_MODEL;
assertIsDefined(OPENAI_API_KEY, 'OPENAI_API_KEY');
assertIsDefined(OPENAI_MODEL, 'OPENAI_MODEL');

export const MODEL = OPENAI_MODEL;
export const openAI = new OpenAI({
  openAIApiKey: OPENAI_API_KEY,
  modelName: MODEL,
});
