export interface ServiceFeature {
  text: string;
}

export interface Service {
  id: string;
  title: string;
  price: string;
  priceNumber: number;
  duration: string;
  description: string[];
  features: ServiceFeature[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  buttonText: string;
  buttonLink: string;
  isPopular?: boolean;
  discount?: string;
}

export const services: Service[] = [
  {
    id: 'plan-basico',
    title: 'Plan de sueño con seguimiento',
    duration: '4 semanas',
    price: '395 €',
    priceNumber: 395,
    image: '/images/DSC02705-1-scaled.jpg',
    imageWidth: 1920,
    imageHeight: 2560,
    features: [
      { text: 'Análisis de sueño mediante cuestionario inicial y bitácora' },
      { text: 'Creación de un plan de sueño específico para tu bebé' },
      { text: '3 videollamadas de 40 min' },
      { text: 'Seguimiento diario por WhatsApp' },
      { text: 'Recomendaciones finales por escrito' },
    ],
    description: [
      'Este plan es para ti si sientes que necesitas acompañamiento real en el camino del sueño infantil. Durante cuatro semanas estaré a tu lado, resolviendo dudas, calmando inseguridades y ajustando el plan de sueño según lo que vaya necesitando tu bebé… y tú.',
      'Cada día revisaré el registro de sueño y estaré pendiente de cada pequeño avance o dificultad, porque a veces lo que más necesitamos es saber que no estamos solas.',
    ],
    buttonText: 'Solicitar disponibilidad',
    buttonLink: 'https://tidycal.com/bonanit/videollamada-previa-gratuita',
    isPopular: true,
  },
  {
    id: 'plan-extension',
    title: 'Extensión del plan',
    duration: '4 semanas más',
    price: '265 €',
    priceNumber: 265,
    image: '/images/DSC02759-1-scaled.jpg',
    imageWidth: 2048,
    imageHeight: 2560,
    features: [
      { text: 'Ajustes y afinado del plan de sueño' },
      { text: '2 videollamadas de 40 min' },
      { text: 'Seguimiento diario por WhatsApp' },
      { text: 'Recomendaciones finales por escrito' },
    ],
    description: [
      'Si al terminar tu plan de sueño sientes que aún queda camino por recorrer, puedes ampliar el acompañamiento durante cuatro semanas más, con un descuento especial por haber trabajado juntas previamente.',
      'Seguiremos afinando el descanso de tu bebé con seguimiento diario y dos videollamadas adicionales, suficientes para seguir avanzando con seguridad y confianza. Es una opción pensada para quienes quieren seguir contando con apoyo cercano por un tiempo más.',
    ],
    buttonText: 'Solicitar disponibilidad',
    buttonLink: 'https://tidycal.com/bonanit/videollamada-previa-gratuita',
  },
  {
    id: 'sesion-puntual',
    title: 'Sesión puntual',
    duration: '45 minutos',
    price: '89 €',
    priceNumber: 89,
    image: '/images/DSC02831-2-scaled.jpg',
    imageWidth: 2048,
    imageHeight: 2560,
    features: [
      { text: 'Cuestionario previo' },
      { text: 'Videollamada de 45 min' },
      { text: 'Recomendaciones finales por escrito' },
    ],
    description: [
      'Esta sesión está pensada para familias que ya han trabajado el sueño de su bebé —conmigo o por su cuenta— y se encuentran ante una dificultad concreta: una regresión, un cambio de rutinas o una nueva etapa.',
      'Durante la videollamada analizaremos juntas la situación y te daré una guía clara y práctica para recuperar el equilibrio con seguridad.',
    ],
    buttonText: 'Reservar sesión',
    buttonLink: 'https://tidycal.com/bonanit/videollamada-previa-gratuita',
  },
];
