/**
 * Générateur pseudo-aléatoire déterministe (Mulberry32).
 * Même seed → même séquence.
 */
export function createSeededRandom(seed: number): () => number {
  let state = seed;
  return function next() {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0; // eslint-disable-line no-bitwise
    let t = Math.imul(state ^ (state >>> 15), state | 1); // eslint-disable-line no-bitwise
    t = (t + (t >>> 31)) | 0; // eslint-disable-line no-bitwise
    return (t >>> 0) / 4294967296;
  };
}

/**
 * Mélange Fisher-Yates déterministe. Même seed → même ordre (SSR et client).
 */
export function shuffleDeterministic<T>(array: readonly T[], seed: number): T[] {
  const random = createSeededRandom(seed);
  const copy: T[] = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    const a = copy[i];
    const b = copy[j];
    if (a != null && b != null) {
      copy[i] = b;
      copy[j] = a;
    }
  }
  return copy;
}

/**
 * Mélange Fisher-Yates avec Math.random (usage client uniquement, ex. carousel après hydration).
 */
export function shuffleRandom<T>(array: readonly T[]): T[] {
  const copy: T[] = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const a = copy[i];
    const b = copy[j];
    if (a != null && b != null) {
      copy[i] = b;
      copy[j] = a;
    }
  }
  return copy;
}
