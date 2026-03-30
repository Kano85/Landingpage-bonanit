// src/data/menu.ts
import { MenuItem } from '@/types';

export const mainMenu: MenuItem[] = [
  { id: '1', label: 'Home', url: '/' },
  { id: '2', label: 'Sobre mí', url: '/sobre-mi' },
  { id: '3', label: 'Mis servicios', url: '/mis-servicios' },
  { id: '4', label: 'Deutsch', url: '/deutsch' },
];

export const footerMenu: MenuItem[] = [
  { id: '5', label: 'Aviso legal', url: '/aviso-legal' },
  { id: '6', label: 'Términos y condiciones', url: '/terminos-y-condiciones' },
  { id: '7', label: 'Política de privacidad', url: '/politica-de-privacidad' },
];
