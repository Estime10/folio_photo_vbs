export type ContactContent = {
  title: string;
  /** Courte phrase d’accroche sous le titre (ex. "Pour un projet ou une collaboration"). */
  subtitle: string;
  /** Libellé du canal Email (ex. "Envoyer un email"). */
  emailLabel: string;
  /** Libellé du canal Instagram (ex. "Voir le portfolio"). */
  instagramLabel: string;
  /** Adresse email (mailto). */
  email: string;
  /** URL du profil Instagram (ouverture externe). */
  instagramUrl: string;
};
