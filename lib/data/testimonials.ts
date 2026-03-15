import type { Testimonial } from '@/types';
import { shuffleRandom } from '@/lib/utils/seeded-shuffle';

export const testimonialsFakeData: readonly Testimonial[] = [
  {
    id: '1',
    username: 'Marie Dupont',
    job: {
      fr: 'Directrice artistique',
      en: 'Art Director',
      nl: 'Creatief directeur',
    },
    description: {
      fr: "Un vrai professionnel, à l'écoute et créatif. Les photos ont dépassé nos attentes pour la campagne.",
      en: 'A real professional, attentive and creative. The photos exceeded our expectations for the campaign.',
      nl: "Een echte professional, attent en creatief. De foto's overtroffen onze verwachtingen voor de campagne.",
    },
    rating: 5,
  },
  {
    id: '2',
    username: 'Thomas Bernard',
    job: {
      fr: 'Responsable communication',
      en: 'Communication Manager',
      nl: 'Communicatiemanager',
    },
    description: {
      fr: 'Rapidité, qualité et sens du détail. Je recommande les yeux fermés pour tout projet visuel.',
      en: 'Speed, quality and attention to detail. I recommend with my eyes closed for any visual project.',
      nl: 'Snelheid, kwaliteit en oog voor detail. Ik beveel met gesloten ogen aan voor elk visueel project.',
    },
    rating: 5,
  },
  {
    id: '3',
    username: 'Sophie Martin',
    job: {
      fr: 'Fondatrice de marque',
      en: 'Brand Founder',
      nl: 'Merkoprichter',
    },
    description: {
      fr: 'Une collaboration fluide et des rendus qui collent parfaitement à notre identité. Merci !',
      en: 'Smooth collaboration and deliverables that fit our identity perfectly. Thank you!',
      nl: 'Vloeiende samenwerking en resultaten die perfect bij onze identiteit passen. Bedankt!',
    },
    rating: 4,
  },
  {
    id: '4',
    username: 'Lucas Petit',
    job: {
      fr: 'Chef de projet',
      en: 'Project Manager',
      nl: 'Projectleider',
    },
    description: {
      fr: 'Très réactif et pro. Les livrables étaient au rendez-vous, même en délai serré.',
      en: 'Very responsive and professional. Deliverables were on time, even with a tight deadline.',
      nl: 'Zeer reactief en professioneel. De opleveringen waren op tijd, zelfs met een strakke deadline.',
    },
    rating: 5,
  },
  {
    id: '5',
    username: 'Emma Leroy',
    job: {
      fr: 'Content manager',
      en: 'Content Manager',
      nl: 'Contentmanager',
    },
    description: {
      fr: 'Première collaboration et déjà une évidence. On retravaille ensemble très vite.',
      en: 'First collaboration and already a no-brainer. We will work together again very soon.',
      nl: 'Eerste samenwerking en al een no-brainer. We werken zeer binnenkort weer samen.',
    },
    rating: 5,
  },
] as const;

/** Retourne les témoignages dans un ordre aléatoire (stable pour une session). */
export function getShuffledTestimonials(): Testimonial[] {
  return shuffleRandom(testimonialsFakeData);
}
