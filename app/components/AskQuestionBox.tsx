'use client';
import { useState } from 'react';

interface AskQuestionBoxProps {
  state: string;
  aqi: number;
}

export default function AskQuestionBox({ state, aqi }: AskQuestionBoxProps) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!question) return;
    setLoading(true);

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ state, aqi, question }),
      });
      const data = await res.json();
      setAnswer(data.answer);
    } catch (err) {
      setAnswer('❌ Something went wrong. Try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask about AQI or travel safety"
        style={{
          padding: '0.5rem',
          borderRadius: '0.375rem',
          border: '1px solid #cbd5e1',
        }}
      />
      <button
        onClick={handleAsk}
        style={{ padding: '0.5rem', backgroundColor: '#0f172a', color: 'white', borderRadius: '0.375rem' }}
      >
        {loading ? 'Loading...' : 'Ask AI'}
      </button>
      {answer && <div style={{ padding: '1rem', border: '1px solid #cbd5e1', borderRadius: '0.375rem' }}>{answer}</div>}
    </div>
  );
}
