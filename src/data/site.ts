// src/data/site.ts
import { MenuItem } from '@/types';

// Tipos para datos del sitio
export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
}

export interface CTATexts {
  main: string;
  secondary: string;
  button: string;
}

export interface SiteData {
  name: string;
  tagline: string;
  navigation: MenuItem[];
  footerLinks: MenuItem[];
  contact: ContactInfo;
  ctaTexts: CTATexts;
}

// Datos centralizados del sitio
export const siteData: SiteData = {
  name: 'Bonanit',
  tagline: 'Consultoría en sueño infantil y maternidad',
  navigation: [
    { id: '1', label: 'Inicio', url: '/' },
    { id: '2', label: 'Sobre mí', url: '/sobre-mi' },
    { id: '3', label: 'Mis servicios', url: '/mis-servicios' },
    { id: '4', label: 'Deutsch', url: '/deutsch' },
  ],
  footerLinks: [
    { id: '5', label: 'Aviso legal', url: '/aviso-legal' },
    {
      id: '6',
      label: 'Términos y condiciones',
      url: '/terminos-y-condiciones',
    },
    {
      id: '7',
      label: 'Política de privacidad',
      url: '/politica-de-privacidad',
    },
  ],
  contact: {
    email: 'info@bonanit.com',
    phone: '+34 123 456 789',
  },
  ctaTexts: {
    main: 'Descubre cómo mejorar el sueño de tu familia',
    secondary: 'Consulta gratuita inicial',
    button: 'Contactar ahora',
  },
};
