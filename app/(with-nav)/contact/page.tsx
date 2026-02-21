import { t } from '@/lib/i18n/i18n';
import { getLocaleFromRequest } from '@/lib/i18n/get-locale-from-request/get-locale-from-request';
import { Contact } from '@/features/contact/Contact';

export default async function ContactPage() {
  const locale = await getLocaleFromRequest();
  return <Contact title={t('nav.contact', locale)} />;
}
