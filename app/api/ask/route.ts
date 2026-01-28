import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const { state, aqi, question } = await req.json();

  // Example prompt for AI
  const prompt = `
  You are a smart health and travel assistant.
  The user is in ${state} with AQI ${aqi}.
  Answer this question clearly: ${question}
  Give travel and health advice if needed.
  `;

  // Call OpenAI API
  const response = await fetch('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', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.5,
      max_tokens: 200,
    }),
  });

  const data = await response.json();
  const answer = data.choices?.[0]?.message?.content || '❌ No answer from AI';

  return NextResponse.json({ answer });
}
