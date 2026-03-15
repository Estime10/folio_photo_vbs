/**
 * Exports i18n réservés au serveur (getLocaleFromRequest, createPageMetadata).
 * À utiliser uniquement dans Server Components et route handlers.
 */

export { createPageMetadata, type PageWithMetadata } from './create-page-metadata';
export { getLocaleFromRequest } from './get-locale-from-request/get-locale-from-request';
