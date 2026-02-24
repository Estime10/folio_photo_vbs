import { t } from '@/lib/i18n/i18n';
import { getLocaleFromRequest } from '@/lib/i18n/get-locale-from-request/get-locale-from-request';
import { Story } from '@/features/story/Story';
import type { StoryContent } from '@/types/story';

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
