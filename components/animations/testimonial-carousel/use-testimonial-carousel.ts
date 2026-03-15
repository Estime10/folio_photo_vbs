'use client';

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { getShuffledTestimonials, testimonialsFakeData } from '@/lib/data/testimonials';
import type { Testimonial } from '@/types';
import { TESTIMONIAL_CAROUSEL } from '@/lib/config';

export type UseTestimonialCarouselReturn = {
  shuffled: Testimonial[];
  currentIndex: number;
  currentTestimonial: Testimonial | undefined;
  count: number;
  contentRef: React.RefObject<HTMLDivElement | null>;
  goToPrevious: () => void;
  goToNext: () => void;
  goToIndex: (index: number) => void;
};

export function useTestimonialCarousel(): UseTestimonialCarouselReturn {
  const [shuffled, setShuffled] = useState<Testimonial[]>(() => [...testimonialsFakeData]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const count = shuffled.length;
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const next = getShuffledTestimonials();
    setShuffled(next);
    const currentId = shuffled[currentIndex]?.id;
    if (currentId != null) {
      const idx = next.findIndex((t) => t.id === currentId);
      if (idx >= 0) setCurrentIndex(idx);
    }
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + count) % count);
  }, [count]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % count);
  }, [count]);

  const goToIndex = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (count === 0) return;
    const id = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % count);
    }, TESTIMONIAL_CAROUSEL.autoPlayIntervalMs);
    return () => clearInterval(id);
  }, [count]);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (el == null) return;
    gsap.set(el, { opacity: 0, x: -TESTIMONIAL_CAROUSEL.transitionOffsetX });
  }, [currentIndex]);

  useEffect(() => {
    const el = contentRef.current;
    if (el == null) return;
    gsap.to(el, {
      opacity: 1,
      x: 0,
      duration: TESTIMONIAL_CAROUSEL.transitionDuration,
      ease: TESTIMONIAL_CAROUSEL.ease,
    });
  }, [currentIndex]);

  const currentTestimonial = shuffled[currentIndex];

  return {
    shuffled,
    currentIndex,
    currentTestimonial,
    count,
    contentRef,
    goToPrevious,
    goToNext,
    goToIndex,
  };
}
