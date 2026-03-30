'use client';

import Image from 'next/image';
import Section from '@/components/Section';

export default function SobreMi() {
  return (
    <>
      {/* Hero Section - Soy Laura Montoy */}
      <Section className="bg-[#f5f3ec] py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Imagen */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/DSC02831-2-scaled.jpg"
                alt="Laura Montoy"
                width={640}
                height={640}
                className="w-full max-w-sm h-auto rounded-full shadow-lg object-cover aspect-square"
                priority
              />
            </div>

            {/* Contenido */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-[#7f968e] mb-6">
                Soy Laura Montoy
              </h1>

              <p className="text-lg text-[#2e4e6d] mb-6 leading-relaxed">
                Hace más de una década que me mudé a Berlín donde{' '}
                <strong>nació mi familia y</strong> de alguna forma{' '}
                <strong>una nueva versión de mí</strong>.
              </p>

              <p className="text-lg text-[#2e4e6d] leading-relaxed">
                De formación soy licenciada en biotecnología y profesora de
                secundaria. He impartido clases de Biología y Español durante
                los últimos ocho años y mi amor por la ciencia siempre ha estado
                presente en mi forma de ver y entender el mundo, pero fue{' '}
                <strong>la maternidad la que realmente me transformó.</strong>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Sección "Cómo empezó todo" */}
      <Section className="bg-[#7f968e] py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Contenido */}
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">
                Cómo empezó todo
              </h2>

              <p className="text-base md:text-lg mb-6 leading-relaxed">
                Cuando nació mi primer hijo descubrí algo inesperado: una{' '}
                <strong>fascinación absoluta por el sueño infantil</strong>.
                Leía, investigaba y me formaba para acompañarlo mejor en sus
                noches y ayudarnos a descansar.
              </p>

              <p className="text-base md:text-lg mb-6 leading-relaxed">
                Con la llegada de mi segunda hija surgieron nuevos desafíos.
                Decidí{' '}
                <strong>certificarme como asesora de sueño infantil</strong> a
                los dos meses. Fue un proceso intenso, de estudio, práctica y
                compromiso, del que me siento muy orgullosa.
              </p>

              <p className="text-base md:text-lg leading-relaxed">
                He vivido <strong>muchas experiencias</strong>: parto natural y
                cesárea, lactancia exclusiva y fórmula, un bebé dormilón y otro
                que no tanto. Todo me enseñó que{' '}
                <strong>
                  no hay una única forma de criar ni de descansar.
                </strong>
              </p>
            </div>

            {/* Imagen */}
            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/DSC02435-2-2-819x1024.jpg"
                alt="Laura con bebé"
                width={640}
                height={640}
                className="w-full max-w-sm h-auto rounded-2xl shadow-lg object-cover aspect-square"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Sección "Mi forma de trabajar" */}
      <Section className="bg-[#f5f3ec] py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            {/* Imagen */}
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/DSC02799-1-819x1024.jpg"
                alt="Laura"
                width={640}
                height={640}
                className="w-full max-w-sm h-auto rounded-2xl shadow-lg object-cover aspect-square"
              />
            </div>

            {/* Contenido */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#2e4e6d] mb-8">
                Mi forma de trabajar
              </h2>

              <p className="text-base md:text-lg text-[#2e4e6d] mb-6 leading-relaxed">
                Hoy combino mis <strong>dos pasiones</strong>: sigo enseñando a
                tiempo parcial y dedico el resto de mi energía a acompañar a
                familias como asesora de sueño.
              </p>

              <p className="text-base md:text-lg text-[#2e4e6d] mb-6 leading-relaxed">
                Trabajo con un <strong>enfoque respetuoso</strong>, basado en la{' '}
                <strong>ciencia</strong> y <strong>adaptado</strong> a cada
                familia. Con colecho o sin él, lactancia o biberón, en la misma
                habitación o en camas separadas: todo es válido. Construyo{' '}
                <strong>soluciones reales y sostenibles</strong>.
              </p>

              <p className="text-base md:text-lg text-[#2e4e6d] leading-relaxed">
                Acompañaros no es solo un trabajo, es mi vocación. Estoy aquí
                para que el descanso vuelva a formar parte de vuestra vida,
                porque <strong>dormir bien no debería ser un lujo.</strong>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Final Section */}
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
    </>
  );
}
