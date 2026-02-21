'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/** Délai entre deux flashes — rythme posé, premium. */
const DELAY_MIN = 0.6;
const DELAY_MAX = 1.6;

/** Flash : moment cinématique, avec léger hold au pic. */
const FRAME_INTENSITY_MIN = 0.45;
const FRAME_INTENSITY_MAX = 0.72;
const FRAME_RISE = 0.04;
const FRAME_HOLD = 0.05;
const FRAME_FALL_MIN = 0.35;
const FRAME_FALL_MAX = 0.7;

/** Taille du spot (réduite pour un flash localisé). */
const SPOT_SIZE_X = 55;
const SPOT_SIZE_Y = 48;

/** Positions du flash : haut-gauche, bas-droite, haut-droite, bas-gauche, centre. */
const POSITIONS: Array<{ x: number; y: number }> = [
  { x: 15, y: 15 },
  { x: 85, y: 85 },
  { x: 85, y: 15 },
  { x: 15, y: 85 },
  { x: 50, y: 50 },
];

function randomIn(min: number, max: number): number {
  return min + Math.random() * (max - min);
}

function getGradientAt(x: number, y: number): string {
  return `radial-gradient(ellipse ${SPOT_SIZE_X}% ${SPOT_SIZE_Y}% at ${x}% ${y}%, rgba(255,255,255,0.97) 0%, rgba(255,252,248,0.7) 40%, rgba(255,248,242,0.35) 65%, transparent 88%)`;
}

const CENTRE_INDEX = POSITIONS.length - 1;

type SplashFlashesProps = {
  onSequenceComplete?: () => void;
};

export function SplashFlashes({ onSequenceComplete }: SplashFlashesProps) {
  const frameFlashRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const positionIndexRef = useRef(0);

  useEffect(() => {
    const el = frameFlashRef.current;
    if (!el) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    gsap.set(el, { opacity: 0 });

    function runFlash(): void {
      gsap.killTweensOf(el);

      const currentIndex = positionIndexRef.current;
      const pos = POSITIONS[currentIndex];
      positionIndexRef.current = (currentIndex + 1) % POSITIONS.length;
      el.style.background = getGradientAt(pos.x, pos.y);

      const intensity = randomIn(FRAME_INTENSITY_MIN, FRAME_INTENSITY_MAX);
      const fallDuration = randomIn(FRAME_FALL_MIN, FRAME_FALL_MAX);
      const isLastFlash = currentIndex === CENTRE_INDEX;

      gsap
        .timeline({
          onComplete: () => {
            if (isLastFlash && onSequenceComplete) {
              onSequenceComplete();
            } else {
              scheduleNext();
            }
          },
        })
        .to(el, {
          opacity: intensity,
          duration: FRAME_RISE,
          ease: 'sine.out',
        })
        .to(el, { duration: FRAME_HOLD })
        .to(el, {
          opacity: 0,
          duration: fallDuration,
          ease: 'sine.in',
        });
    }

    function scheduleNext(): void {
      const delayMs = randomIn(DELAY_MIN, DELAY_MAX) * 1000;
      timeoutRef.current = setTimeout(runFlash, delayMs);
    }

    timeoutRef.current = setTimeout(runFlash, randomIn(0.5, 1) * 1000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      gsap.killTweensOf(el);
    };
  }, [onSequenceComplete]);

  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden" aria-hidden>
      <div
        ref={frameFlashRef}
        className="absolute inset-0"
        aria-hidden
        style={{
          background: getGradientAt(50, 50),
        }}
      />
    </div>
  );
}
