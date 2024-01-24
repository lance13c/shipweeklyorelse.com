import { isContentMalicious } from '@/app/lib/server/checkMaliciousContent';
import { openAI } from '@/app/lib/server/openAI';

export async function sendPrompt(content: string, instructionPrompt: string): Promise<string> {
  if (await isContentMalicious(content)) {
    throw new Error('Malicious content detected.');
  }

  const prompt = `${instructionPrompt}\n\n${content}`;

  return await openAI.invoke(prompt);
}
