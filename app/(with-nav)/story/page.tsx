import { createPageMetadata, getLocaleFromRequest } from '@/lib/i18n/server';
import { t } from '@/lib/i18n';
import { Story } from '@/features/story/Story';
import type { StoryContent } from '@/types';

export const generateMetadata = () => createPageMetadata('story');

export default async function StoryPage() {
  const locale = await getLocaleFromRequest();
  const content: StoryContent = {
    surtitle: t('story.surtitle', locale),
    titleWho: t('story.title.who', locale),
    titleVision: t('story.title.vision', locale),
    titlePassion: t('story.title.passion', locale),
    visionBody: t('story.vision.body', locale),
    passionBody: t('story.passion.body', locale),
  };
  return <Story content={content} />;
}
