'use client';

import Image from 'next/image';
import Section from '@/components/Section';
import ServiceCard from '@/components/ServiceCard';
import { services } from '@/data/services';

export default function MisServicios() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1a3a4a] to-[#0f2530]">
        <Image
          src="/images/image.jpg"
          alt="Mis servicios"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Mis servicios
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-gray-100">
            Elige el plan que mejor se adapta a tu situación
          </p>
        </div>
      </section>

      {/* Discount Banner */}
      <Section className="bg-[#e5e2d4] py-12 md:py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#2e4e6d] mb-4">
            10% de descuento
          </h2>
          <p className="text-lg text-[#2e4e6d] mb-4">
            Si ya has trabajado conmigo, ¡tienes 10% de descuento en todos los
            servicios futuros!
          </p>
          <p className="text-base text-[#2e4e6d] leading-relaxed">
            Valoro tu confianza y quiero acompañarte en cada nueva etapa con el
            mismo compromiso y cercanía.
          </p>
        </div>
      </Section>

      {/* Services Section */}
      <Section className="bg-[#f5f3ec] py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              isReverse={index === 1}
            />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="relative min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/DSC_0872-1-1024x683.jpg"
          alt="Cita gratuita"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#7a664d]/80 to-[#7a664d]/60"></div>

        <div className="relative z-10 text-center text-white px-4 max-w-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Reserva tu cita gratuita
          </h2>

          <p className="text-lg md:text-xl mb-8 text-gray-100 leading-relaxed">
            Hablemos sobre tus necesidades y cómo puedo acompañarte en el camino
            del sueño
          </p>

          <a
            href="https://tidycal.com/bonanit/videollamada-previa-gratuita"
            className="inline-block bg-white hover:bg-gray-100 text-[#2e4e6d] px-8 md:px-12 py-4 md:py-5 rounded-full font-bold text-base md:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            ¡Conozcámonos!
          </a>
        </div>
      </section>

      {/* Additional Info Section */}
      <Section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2e4e6d] mb-8 text-center">
            Preguntas frecuentes
          </h2>

          <div className="space-y-6">
            <div className="border-b-2 border-[#e5e2d4] pb-6">
              <h3 className="text-lg font-bold text-[#2e4e6d] mb-3">
                ¿Cuál es el rango de edad de los bebés?
              </h3>
              <p className="text-[#4f5f6f] leading-relaxed">
                Trabajo con familias que tienen bebés desde recién nacidos hasta
                4 años. Cada edad tiene sus particularidades y adapto el plan
                según las necesidades específicas de tu bebé.
              </p>
            </div>

            <div className="border-b-2 border-[#e5e2d4] pb-6">
              <h3 className="text-lg font-bold text-[#2e4e6d] mb-3">
                ¿Qué pasa si no veo resultados?
              </h3>
              <p className="text-[#4f5f6f] leading-relaxed">
                El cambio en el sueño toma tiempo y paciencia. Durante nuestro
                trabajo juntas, iremos haciendo ajustes para asegurar que el
                plan funciona para tu familia. Mi objetivo es que sientas apoyo
                real en el proceso.
              </p>
            </div>

            <div className="border-b-2 border-[#e5e2d4] pb-6">
              <h3 className="text-lg font-bold text-[#2e4e6d] mb-3">
                ¿Puedo cambiar de plan durante el acompañamiento?
              </h3>
              <p className="text-[#4f5f6f] leading-relaxed">
                Claro. Si en algún momento necesitas más o menos acompañamiento,
                podemos ajustar el plan según tus necesidades. Tu comodidad y
                confianza es lo primero.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-bold text-[#2e4e6d] mb-3">
                ¿Qué incluye exactamente el seguimiento por WhatsApp?
              </h3>
              <p className="text-[#4f5f6f] leading-relaxed">
                Revisaré tu bitácora de sueño diaria, responderé tus preguntas,
                te daré orientación sobre cambios en el plan si es necesario, y
                estaré atenta a tus preocupaciones. No es un chat continuo, sino
                un acompañamiento estructurado y a tu ritmo.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
