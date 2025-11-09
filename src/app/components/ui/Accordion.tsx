'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
}

export default function Accordion({
  title,
  children,
  isOpen = false,
}: AccordionProps) {
  const [open, setOpen] = useState(isOpen);

  return (
    <div className="bg-white rounded-2xl border border-[#DBDBDB] mb-3">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 text-left font-bold text-[#9574AE]"
      >
        {title}
        {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </button>
      {open && (
        <div className="pl-4 pr-4 pb-4 text-sm text-gray-700">{children}</div>
      )}
    </div>
  );
}
