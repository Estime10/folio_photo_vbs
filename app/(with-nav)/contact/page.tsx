import { createPageMetadata, getLocaleFromRequest } from '@/lib/i18n/server';
import { t } from '@/lib/i18n';
import { CONTACT } from '@/lib/config';
import { Contact } from '@/features/contact/Contact';
import type { ContactContent } from '@/types';

export const generateMetadata = () => createPageMetadata('contact');

export default async function ContactPage() {
  const locale = await getLocaleFromRequest();
  const content: ContactContent = {
    title: t('nav.contact', locale),
    subtitle: t('contact.page.subtitle', locale),
    emailLabel: t('contact.channel.email', locale),
    instagramLabel: t('contact.channel.instagram', locale),
    email: CONTACT.email,
    instagramUrl: CONTACT.instagramUrl,
  };
  return <Contact content={content} />;
}
