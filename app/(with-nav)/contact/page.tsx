import { t } from '@/lib/i18n/i18n';
import { getLocaleFromRequest } from '@/lib/i18n/get-locale-from-request/get-locale-from-request';
import { Contact } from '@/features/contact/Contact';
import type { ContactContent } from '@/types/contact';

export default async function ContactPage() {
  const locale = await getLocaleFromRequest();
  const content: ContactContent = { title: t('nav.contact', locale) };
  return <Contact content={content} />;
}
