import { t } from '@/lib/i18n/i18n';
import { getLocaleFromRequest } from '@/lib/i18n/get-locale-from-request/get-locale-from-request';
import { Story } from '@/features/story/Story';

export default async function StoryPage() {
  const locale = await getLocaleFromRequest();
  return <Story title={t('nav.story', locale)} />;
}
