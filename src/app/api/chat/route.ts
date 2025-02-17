import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai('gpt-4o'),
    messages: [
      { "role": "system", "content": "Responda formatando o texto em Markdown." },
      { "role": "user", "content": "Liste três ideias de startup." }
    ]
  });

  return result.toDataStreamResponse();
}