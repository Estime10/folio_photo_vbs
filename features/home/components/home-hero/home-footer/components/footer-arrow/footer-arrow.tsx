'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';

type FooterArrowDirection = 'left' | 'right';

type FooterArrowProps = {
  direction: FooterArrowDirection;
  onClick?: () => void;
};

export function FooterArrow({ direction, onClick }: FooterArrowProps) {
  const Icon = direction === 'left' ? ArrowLeft : ArrowRight;
  return (
    <button
      type="button"
      className="flex h-full w-full cursor-pointer items-center justify-center border-0 bg-transparent p-0"
      onClick={onClick}
      aria-label={direction === 'left' ? 'Previous' : 'Next'}
    >
      <Icon
        className="h-10 w-10 rounded-full border border-white/20 p-1 text-foreground"
        aria-hidden
      />
    </button>
  );
}
