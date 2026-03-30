'use client';

import Image from 'next/image';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import TestimonialCard from '@/components/TestimonialCard';
import Accordion from '@/components/Accordion';

export default function Home() {
  return (
    <>
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#1a3a4a] to-[#0f2530]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="/media/6849031-uhd_3840_2160_24fps-1-1.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Dormir mejor criando con amor
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 leading-relaxed text-gray-100">
            Soy Laura Montoy, creadora de Bonanit y te acompaño de manera
            respetuosa a mejorar el descanso de tu bebé.
          </p>
          <a
            href="https://tidycal.com/bonanit/videollamada-previa-gratuita"
            className="inline-block bg-[#184554] hover:bg-[#0f3142] text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Conozcámonos
          </a>
        </div>
      </section>

      {/* Questions Section */}
      <Section className="bg-[#f5f3ec] py-12 md:py-20">
        <div className="max-w-4xl mx-auto space-y-3 md:space-y-4">
          <div className="text-center">
            <div className="inline-block bg-[#7f968e] text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-medium hover:bg-[#6d8077] transition-colors">
              ¿Estás agotada y con la paciencia al límite?
            </div>
          </div>
          <div className="text-center">
            <div className="inline-block bg-[#7f968e] text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-medium hover:bg-[#6d8077] transition-colors">
              ¿No logras descansar por las noches y ya te está pasando factura?
            </div>
          </div>
          <div className="text-center">
            <div className="inline-block bg-[#7f968e] text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-medium hover:bg-[#6d8077] transition-colors">
              ¿Sientes que la maternidad te desborda?
            </div>
          </div>
          <div className="text-center">
            <div className="inline-block bg-[#7f968e] text-white px-6 md:px-8 py-3 rounded-full text-base md:text-lg font-medium hover:bg-[#6d8077] transition-colors">
              ¿Te sientes sola, con o sin red de apoyo?
            </div>
          </div>
        </div>
      </Section>

      {/* Not Alone Section */}
      <Section className="bg-[#e5e2d4] py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-[#2e4e6d] mb-6">
              No tienes que vivirlo sola
            </h2>
            <div className="space-y-4 text-[#2e4e6d] text-base md:text-lg leading-relaxed">
              <p>
                Te dicen que es solo una fase, que pasará rápido…{' '}
                <strong>pero eso no lo hace menos duro.</strong> La falta de
                sueño puede generar frustración y hacer que no disfrutes
                plenamente esta etapa tan especial. Y si además, crías{' '}
                <strong>lejos de tu red de apoyo</strong>, todo se vuelve aún
                más difícil.
              </p>
              <p>
                Yo también estuve ahí,{' '}
                <strong>descubriendo la maternidad</strong> en otro país, lejos
                de mi gente y mi idioma. Por eso hoy acompaño a otras familias,
                para que <strong>no tengan que vivirlo solas</strong>.
              </p>
            </div>
          </div>
          <div className="relative min-h-[320px] order-1 md:order-2">
            <Image
              src="/images/postnatal-period-with-mother-child-3-2000x1333.jpg"
              alt="Madre con bebé descansando"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        </div>
      </Section>

      {/* Pullquote */}
      <Section className="bg-gradient-to-r from-[#7f968e] to-[#6d8077] py-16 md:py-24">
        <blockquote className="text-center max-w-3xl mx-auto">
          <p className="text-2xl md:text-4xl font-semibold text-white leading-relaxed">
            &ldquo;Te tomo de la mano para hacer los cambios adecuados
            <br />y transformar vuestras noches.&rdquo;
          </p>
        </blockquote>
      </Section>

      {/* Real Support Section */}
      <Section className="bg-[#e5e2d4] py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl mx-auto">
          <div className="relative min-h-[320px]">
            <Image
              src="/images/DSC02792-1-scaled.jpg"
              alt="Laura Montoy, especialista en sueño infantil"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#2e4e6d] mb-6">
              Aquí tienes un apoyo real
            </h2>
            <div className="space-y-4 text-[#2e4e6d] text-base md:text-lg leading-relaxed">
              <p>
                Si sientes que <strong>necesitas acompañamiento real</strong>{' '}
                para mejorar el sueño de tu bebé, con mi plan de 4 semanas
                tendrás a <strong>alguien a tu lado</strong>.
              </p>
              <p>
                Diseñaré un{' '}
                <strong>plan de sueño respetuoso y personalizado</strong>, y
                estaremos en contacto con videollamadas y mensajes.
              </p>
              <p>
                No estás sola: <strong>recuperar el descanso</strong> es
                posible, sin esperar a que &quot;pase la fase&quot;.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-[#e5e2d4] py-12 md:py-20">
        <div className="max-w-4xl mx-auto">
          <SectionTitle title="Preguntas frecuentes" />
          <div className="space-y-3 mt-12">
            <Accordion title="¿Mi bebé va a llorar?">
              <p className="text-[#2e4e6d] leading-relaxed">
                Muy probablemente no. Haré todo lo posible para que así sea,
                incluso si significa ir más despacio. Mi plan de sueño infantil
                se ajusta siempre que hay llanto y es profundamente respetuoso.
                Seguimos el ritmo de vuestro bebé en todo momento, priorizando
                siempre su bienestar.
              </p>
            </Accordion>
            <Accordion title="¿Es compatible el plan con la lactancia materna y el colecho?">
              <p className="text-[#2e4e6d] leading-relaxed">
                Sí, completamente. El plan de sueño se adapta a vuestros deseos
                y necesidades. Favorezco una crianza con apego, respetando la
                lactancia materna y el colecho. Lo esencial es encontrar juntos
                la mejor manera para que vuestro bebé descanse bien y se sienta
                seguro.
              </p>
            </Accordion>
            <Accordion title="¿Hay que quedarse en casa y evitar los viajes?">
              <p className="text-[#2e4e6d] leading-relaxed">
                Durante las cuatro semanas del plan de sueño, recomiendo
                priorizar la rutina y no cambiar su espacio de sueño. Estaremos
                introduciendo cambios importantes en cómo tu bebé se duerme, y
                conviene no sumar otros grandes ajustes al mismo tiempo. La
                calma y la rutina serán clave en el proceso.
              </p>
            </Accordion>
            <Accordion title="¿Tendré que seguir horarios estrictos para siempre?">
              <p className="text-[#2e4e6d] leading-relaxed">
                Durante el plan es importante seguir los horarios lo más
                fielmente posible para evitar el sobrecansancio, que dificulta
                la adaptación a los nuevos hábitos. Una vez que tu bebé los haya
                adquirido, podrás ser más flexible y hacer excepciones. De
                hecho, los niños con buenos hábitos de sueño suelen adaptarse
                mejor a los cambios de horario.
              </p>
            </Accordion>
            <Accordion title="¿Cuánto tiempo va a tardar en verse resultados?">
              <p className="text-[#2e4e6d] leading-relaxed">
                Depende de cada bebé, pero en general los primeros resultados
                suelen notarse hacia las dos semanas y seguirá mejorando durante
                unas semanas más. Al ser un plan respetuoso seguimos siempre su
                ritmo, por lo que a veces los avances tardan un poco más. Lo
                importante es ser constantes y confiar en el proceso para
                mejorar su descanso.
              </p>
            </Accordion>
            <Accordion title="¿Qué pasa si algo no funciona o no os sentís cómodos?">
              <p className="text-[#2e4e6d] leading-relaxed">
                Lo más importante en este proceso es la comunicación conmigo. Si
                algo no se siente bien o no funciona, no es lo correcto.
                Necesito que seáis transparentes y me contéis cómo os sentís
                para poder adaptar el plan si es necesario. Juntos encontraremos
                la forma que mejor se ajuste a vuestra familia y al descanso de
                vuestro bebé.
              </p>
            </Accordion>
          </div>
        </div>
      </Section>

      {/* Testimonials Section */}
      <Section className="bg-[#7f968e] py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Así han vivido algunas familias la experiencia de trabajar
              conmigo…
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <TestimonialCard
              name="Sonia y Bertrán"
              role="mamá y papá de Gema, 12 meses"
              content="«Con Laura encontramos la ayuda que necesitábamos: nuestra bebé pasó de despertarse muchas veces a solo 1 vez por noche, y a veces duerme toda la noche. Nos acompañó en el destete nocturno con apoyo práctico y contención emocional. Su paciencia y profesionalismo marcaron la diferencia.»"
              image="/images/foto-gala.jpg"
            />
            <TestimonialCard
              name="Eugenia"
              role="mamá de Benjamín de 16 meses"
              content="«Realmente hemos logrado cosas que nunca hubiésemos imaginado. Esto fue gracias a la paciencia y compromiso que ha puesto Laura con respecto al sueño y situación de nuestro hijo. Día a día nos iba alentando para que no dejemos de intentar, al principio fue difícil pero nos ha entusiasmado y hemos conseguido cambios reales.»"
              image="/images/IMG-20250219-WA0014-3.jpg"
            />
            <TestimonialCard
              name="Fernanda"
              role="mamá de Teo, 10 meses"
              content="«Desde las primeras conversaciones Laura dio un par de tips a cambiar y ¡funcionaron! Luego el trabajo fue día a día, siempre ella observando y preguntando para adaptarse a la situación. MUY buena, realmente muy buena coach. Hoy termina el plan y me voy con una caja llena de herramientas para seguir mejorando el sueño de mi bebé. ¡Muchas gracias Laura!»"
              image="/images/IMG-20250219-WA0014-3.jpg"
            />
            <TestimonialCard
              name="Patri"
              role="mamá de Théo, 7 meses"
              content="«Al principio tenía dudas porque no quería dejar llorar a mi bebé, pero Laura creó un plan sensible y adaptado a nosotros. El seguimiento diario fue excelente y sus recomendaciones nos ayudaron a saber cómo actuar en cada situación.»"
              image="/images/Ellipse-3.png"
            />
          </div>
        </div>
      </Section>

      {/* CTA Final Section */}
      <Section className="bg-gradient-to-r from-[#7f968e] to-[#6d8077] py-16 md:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <a
            href="https://tidycal.com/bonanit/videollamada-previa-gratuita"
            className="inline-block bg-white hover:bg-gray-100 text-[#7f968e] font-semibold px-8 md:px-12 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            ¿Te parece si agendamos una videollamada gratuita?
          </a>
        </div>
      </Section>
    </>
  );
}
