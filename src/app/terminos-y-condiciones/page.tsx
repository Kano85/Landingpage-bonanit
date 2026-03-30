import Link from 'next/link';

export const metadata = {
  title: 'Términos y condiciones | Bonanit',
  description:
    'Condiciones generales de contratación del servicio de asesoría de sueño infantil de Bonanit.',
};

const sections = [
  {
    title: '1. Ámbito de aplicación',
    paragraphs: [
      'Las presentes Condiciones Generales de Contratación (AGB) se aplican a todos los servicios de asesoría de sueño infantil prestados por Bonanit / Laura Montoy Blanca a clientes particulares conforme al §13 BGB.',
      'Las AGB son parte integral de todos los contratos entre la asesora y el/la cliente.',
    ],
  },
  {
    title: '2. Objeto del servicio',
    paragraphs: [
      'La asesora ofrece acompañamiento personalizado para mejorar el sueño de bebés y niños pequeños. El objetivo es encontrar soluciones adecuadas y realistas, respetando los valores, necesidades y el ritmo de cada familia.',
      'El servicio no sustituye asesoramiento médico ni psicológico.',
    ],
  },
  {
    title: '3. Prestación del servicio',
    items: [
      '3.1. La asesora acompaña a la familia durante 28 días naturales, entre las 9:00 y las 21:00 horas, ofreciendo recomendaciones individualizadas mediante videollamadas, mensajes y revisión de registros de sueño.',
      '3.2. La asesora actuará con profesionalismo, empatía y confidencialidad, adaptando las sugerencias a la evolución del proceso.',
      '3.3. Si no se alcanzan los avances deseados durante el periodo acordado, la asesora podrá ampliar el acompañamiento una única vez y sin coste adicional, durante hasta cinco días naturales, siendo la asesora quien determine la duración exacta dentro de dicho límite.',
      '3.4. Una vez finalizados estos días de ampliación, si alguna de las partes considera que todavía existe margen de mejora, se podrá ofrecer una extensión del plan por un precio módico, que se acordará individualmente.',
      '3.5. La asesora se reserva el derecho de pausar el acompañamiento si se detectan señales de posible problema médico que requiera valoración profesional antes de continuar.',
    ],
  },
  {
    title: '4. Obligaciones del/la cliente',
    items: [
      '4.1. El/la cliente se compromete a mantener una comunicación abierta, honesta y regular, condición necesaria para que las recomendaciones puedan ajustarse correctamente.',
      '4.2. Las sugerencias de la asesora no son obligatorias ni inflexibles. Si algo no se siente bien para la familia, deberá comunicarse para buscar alternativas.',
      '4.3. El/la cliente se compromete a aplicar las recomendaciones acordadas en la medida de sus posibilidades y a informar sobre cualquier cambio relevante en la salud o el comportamiento del bebé.',
      '4.4. El/la cliente confirma que el bebé o niño no presenta síntomas que requieran una valoración médica urgente. En caso de duda sobre la salud del menor, deberá consultar a profesionales sanitarios.',
      '4.5. El/la cliente se compromete a no compartir, reproducir ni difundir ningún documento, plan personalizado, recomendación o material creado por la asesora sin autorización expresa.',
    ],
  },
  {
    title: '5. Sin garantía de resultados',
    paragraphs: [
      'El sueño infantil depende de múltiples factores (salud, temperamento, entorno familiar, constancia de aplicación).',
      'Por ello, la asesora no puede garantizar resultados concretos, aunque sí una mejora razonable cuando existe colaboración activa y continua.',
    ],
  },
  {
    title: '6. Confidencialidad y derechos de autor',
    items: [
      '6.1. Toda la información personal compartida será tratada de forma estrictamente confidencial y no se transmitirá a terceros sin consentimiento.',
      '6.2. Todo el material entregado (documentos, recomendaciones, planes personalizados) es para uso exclusivo de la familia. Se prohíbe su copia, distribución o cesión a terceros. Los contenidos están protegidos por derechos de autor y siguen siendo propiedad de la asesora.',
    ],
  },
  {
    title: '7. Protección de datos (Datenschutz)',
    items: [
      '7.1. La asesora cumple con el Reglamento General de Protección de Datos (DSGVO). Los datos personales se utilizarán exclusivamente para la prestación del servicio contratado.',
      '7.2. El/la cliente tiene derecho de acceso, rectificación, supresión y limitación del tratamiento conforme a los artículos 15–21 DSGVO.',
      '7.3. Los datos se conservarán únicamente durante el tiempo necesario para el acompañamiento y las obligaciones legales de archivo.',
    ],
  },
  {
    title: '8. Responsabilidad',
    items: [
      '8.1. La asesora no se responsabiliza de consecuencias derivadas de la no aplicación, aplicación parcial o modificación unilateral de las recomendaciones.',
      '8.2. La asesoría no es un servicio médico. La asesora no asume responsabilidad por interpretaciones erróneas, decisiones médicas no tomadas o problemas de salud no informados.',
      '8.3. La responsabilidad de la asesora por daños está limitada a casos de dolo y negligencia grave conforme al §276 BGB. No se aceptan reclamaciones por daños indirectos o pérdidas económicas.',
    ],
  },
  {
    title: '9. Precios y pago',
    items: [
      '9.1. El precio del acompañamiento depende del paquete contratado.',
      '9.2. El pago debe realizarse antes del inicio del servicio.',
      '9.3. El pago a plazos es posible solo previo acuerdo expreso con la asesora.',
    ],
  },
  {
    title: '10. Derecho de desistimiento (Widerruf)',
    items: [
      '10.1. Los clientes particulares disponen de un derecho legal de desistimiento de 14 días conforme al §312g BGB.',
      '10.2. Si el cliente solicita que la asesora comience el servicio durante este periodo, reconoce que el derecho de desistimiento se extingue parcialmente en la medida en que el servicio ya ha sido prestado.',
      '10.3. Durante los primeros 14 días, la asesora invierte aproximadamente el 60% del trabajo total del plan (plan personalizado por escrito, videollamadas iniciales y análisis de sueño). En caso de desistimiento, se cobrará esta parte proporcional y solo se devolverá la diferencia correspondiente al resto del paquete aún no prestado.',
    ],
  },
  {
    title: '11. Cancelación y reprogramación',
    items: [
      '11.1. Las videollamadas pueden reprogramarse hasta 24 horas antes.',
      '11.2. Si el/la cliente no se presenta a una cita sin aviso, se considera como realizada.',
      '11.3. No se realizan reembolsos una vez iniciado el acompañamiento.',
    ],
  },
  {
    title: '12. Disposiciones finales',
    items: [
      '12.1. Si alguna cláusula de estas AGB resultara inválida, el resto permanecerá vigente.',
      '12.2. El contrato se rige por la legislación de la República Federal de Alemania.',
      '12.3. El lugar de cumplimiento y jurisdicción es el domicilio de la asesora, salvo disposición legal en contrario.',
    ],
  },
];

export default function TerminosYCondiciones() {
  return (
    <main className="min-h-screen bg-[#f5f3ec]">
      <section className="border-b border-black/5 bg-[#e5e2d4]">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7f968e]">
              Condiciones del servicio
            </p>
            <h1 className="mt-4 text-4xl font-bold text-[#2e4e6d] md:text-5xl">
              Términos y condiciones
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#2e4e6d] md:text-lg">
              Allgemeine Geschäftsbedingungen (AGB) del servicio de asesoría de
              sueño infantil prestado por Bonanit.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <aside className="space-y-8">
            <div className="rounded-3xl bg-[#184554] p-8 text-white shadow-sm">
              <h2 className="text-2xl font-semibold">Resumen del servicio</h2>
              <ul className="mt-5 space-y-3 text-white/90">
                <li>Acompañamiento de 28 días naturales.</li>
                <li>Horario de soporte entre las 9:00 y las 21:00 horas.</li>
                <li>Videollamadas, mensajes y revisión de registros de sueño.</li>
                <li>Enfoque respetuoso, personalizado y no médico.</li>
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-semibold text-[#2e4e6d]">
                Datos clave
              </h2>
              <div className="mt-5 space-y-4 text-[#41586a] leading-relaxed">
                <p>
                  El pago debe realizarse antes del inicio del servicio, salvo
                  acuerdo expreso distinto.
                </p>
                <p>
                  El derecho de desistimiento legal es de 14 días conforme al
                  §312g BGB.
                </p>
                <p>
                  No se realizan reembolsos una vez iniciado el acompañamiento.
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-semibold text-[#2e4e6d]">
                Contacto
              </h2>
              <p className="mt-4 leading-relaxed text-[#41586a]">
                Para cualquier duda relacionada con estas condiciones puedes
                escribir a{' '}
                <a
                  href="mailto:info@bonanitsuenoinfantil.com"
                  className="text-[#184554] underline decoration-[#7f968e] underline-offset-4"
                >
                  info@bonanitsuenoinfantil.com
                </a>
                .
              </p>
              <Link
                href="/"
                className="mt-6 inline-flex rounded-full bg-[#e5e2d4] px-5 py-3 text-sm font-medium text-[#184554] transition hover:bg-[#d8d3c0]"
              >
                Volver al inicio
              </Link>
            </div>
          </aside>

          <article className="space-y-6">
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5"
              >
                <h2 className="text-2xl font-semibold text-[#2e4e6d]">
                  {section.title}
                </h2>

                {section.paragraphs ? (
                  <div className="mt-5 space-y-4 text-[#41586a] leading-relaxed">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ) : null}

                {section.items ? (
                  <ul className="mt-5 space-y-4 text-[#41586a] leading-relaxed">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
