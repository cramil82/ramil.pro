'use client';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div key={i} className={`faq-item${open === i ? ' open' : ''}`}>
          <button className="faq-question" onClick={() => setOpen(open === i ? null : i)}>
            {item.question}
            <span className="faq-icon">{open === i ? <Minus size={18} /> : <Plus size={18} />}</span>
          </button>
          <div className="faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
