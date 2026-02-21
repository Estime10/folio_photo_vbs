'use client';

import { type ReactNode, useRef, useState, useCallback, useEffect } from 'react';

type DropdownProps = {
  trigger: ReactNode;
  children: ReactNode;
  className?: string;
  triggerClassName?: string;
};

export function Dropdown({
  trigger,
  children,
  className = '',
  triggerClassName = '',
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) close();
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [open, close]);

  return (
    <div className={`relative ${className}`.trim()} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className={`flex items-center justify-center outline-none rounded ${triggerClassName || 'ring-foreground/20 focus:ring-2'}`.trim()}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {trigger}
      </button>
      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 min-w-28 rounded border border-foreground/10 bg-background py-1 shadow-lg">
          {children}
        </div>
      )}
    </div>
  );
}
