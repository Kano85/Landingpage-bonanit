'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PrivacyPageClient() {
  const { t } = useLanguage();

  const summaryDetails = [
    {
      title: t('privacy.responsible'),
      items: [
        'Laura Montoy Blanca',
        'Bonanit',
        'Thorwaldsenstraße 13',
        '12157 Berlín',
        'Correo electrónico: info@bonanitsuenoinfantil.com',
      ],
    },
    {
      title: t('privacy.validity'),
      items: ['28 de noviembre de 2025'],
    },
    {
      title: t('privacy.legal.bases'),
      items: [
        t('privacy.consent'),
        t('privacy.contract'),
        t('privacy.legal.obligation'),
        t('privacy.legitimate.interests'),
      ],
    },
  ];

  const sections = [
    {
      title: t('privacy.preamble'),
      paragraphs: [
        'Con la siguiente declaración de privacidad queremos informarle sobre qué tipos de sus datos personales procesamos, con qué fines y en qué medida.',
        'La declaración de privacidad se aplica a todos los procesamientos de datos personales que realizamos, tanto en el marco de la prestación de nuestros servicios como, en particular, en nuestras páginas web, aplicaciones móviles y dentro de presencias online externas, como por ejemplo nuestros perfiles en redes sociales.',
        'Los términos utilizados no son específicos de género.',
      ],
    },
    {
      title: t('privacy.responsible'),
      paragraphs: [
        'Laura Montoy Blanca, Bonanit, Thorwaldsenstraße 13, 12157 Berlín.',
        'Personas con derecho de representación: Laura Montoy Blanca.',
        'Correo electrónico: info@bonanitsuenoinfantil.com.',
      ],
    },
    {
      title: t('privacy.summary'),
      bullets: [
        'Tipos de datos procesados: datos de registro, datos de empleados, datos de pago, datos de contacto, datos de contenido, datos contractuales, datos de uso y datos meta, de comunicación y de procedimiento.',
        'Categorías especiales de datos: datos de salud.',
        'Categorías de personas afectadas: beneficiarios de servicios y clientes, empleados, interesados, socios de comunicación, usuarios, socios comerciales y contractuales, terceras personas y denunciantes.',
        'Fines del procesamiento: prestación de servicios contractuales, comunicación, medidas de seguridad, medición de alcance, seguimiento, organización administrativa, marketing, perfiles de usuario, infraestructura tecnológica, protección de denunciantes y relaciones públicas.',
      ],
    },
    {
      title: t('privacy.legal.bases.applicable'),
      paragraphs: [
        'Procesamos datos personales sobre la base del consentimiento, del cumplimiento de contrato y consultas precontractuales, de obligaciones legales y de intereses legítimos, conforme al art. 6, ap. 1 del RGPD.',
        'Además de las normas del RGPD, en Alemania también se aplican disposiciones nacionales de protección de datos, especialmente la Bundesdatenschutzgesetz (BDSG).',
      ],
    },
    {
      title: t('privacy.security.measures'),
      paragraphs: [
        'Aplicamos medidas técnicas y organizativas adecuadas para garantizar un nivel de protección apropiado al riesgo, teniendo en cuenta el estado de la técnica, los costes de implementación y la naturaleza, el alcance y los fines del tratamiento.',
        'Estas medidas incluyen especialmente la garantía de la confidencialidad, integridad y disponibilidad de los datos, así como procedimientos para el ejercicio de derechos, la supresión de datos y la reacción ante incidentes.',
        'Protegemos las conexiones en línea mediante tecnología de cifrado TLS/SSL (HTTPS) para evitar accesos no autorizados a los datos transmitidos.',
      ],
    },
    {
      title: t('privacy.storage.general'),
      paragraphs: [
        'Eliminamos los datos personales cuando desaparece la finalidad del tratamiento, se retira el consentimiento o ya no existe una base legal para su conservación, salvo que obligaciones legales o intereses especiales exijan un almacenamiento más prolongado.',
        'Los datos cuya conservación sea necesaria por motivos fiscales, comerciales, probatorios o de protección de derechos se archivan de acuerdo con las obligaciones legales aplicables.',
      ],
      bullets: [
        '10 años: libros, registros, balances, inventarios y documentos organizativos relevantes.',
        '8 años: comprobantes contables, como facturas y recibos de gastos.',
        '6 años: cartas comerciales, copias de comunicaciones mercantiles y otros documentos relevantes para la fiscalidad.',
        '3 años: datos necesarios para posibles reclamaciones por garantía, daños o derechos contractuales similares.',
      ],
    },
    {
      title: t('privacy.rights'),
      bullets: [
        'Derecho de oposición al tratamiento por motivos relacionados con su situación particular, especialmente en tratamientos basados en el art. 6, ap. 1, letras e o f del RGPD.',
        'Derecho de revocación de consentimientos otorgados.',
        'Derecho de acceso a los datos y a recibir información adicional.',
        'Derecho de rectificación de datos inexactos o incompletos.',
        'Derecho de supresión y limitación del tratamiento.',
        'Derecho a la portabilidad de los datos.',
        'Derecho a presentar reclamaciones ante una autoridad de control.',
      ],
    },
    {
      title: t('privacy.commercial.services'),
      paragraphs: [
        'Procesamos datos de socios contractuales y comerciales en el marco de relaciones contractuales, medidas asociadas y comunicaciones precontractuales o contractuales.',
        'Utilizamos estos datos para prestar los servicios acordados, gestionar obligaciones de actualización, corregir fallos, proteger nuestros derechos y organizar la actividad empresarial de forma eficiente y segura.',
        'Los datos se eliminan tras el vencimiento de las obligaciones legales de garantía y conservación, por regla general después de cuatro años, salvo que deban archivarse durante más tiempo por razones legales.',
      ],
      bullets: [
        'Tipos de datos: datos de identificación, datos de pago, datos de contacto y datos contractuales.',
        'Categorías especiales de datos: datos de salud.',
        'Personas afectadas: beneficiarios de servicios, clientes, posibles clientes y socios comerciales.',
        'Bases legales: art. 6, ap. 1, letras b, c y f del RGPD.',
        'Proveedor de pago mencionado: PayPal (Europe) S.à r.l. et Cie, S.C.A., Luxemburgo.',
      ],
    },
    {
      title: t('privacy.online.offer'),
      paragraphs: [
        'Procesamos datos de los usuarios para poner a su disposición nuestros servicios en línea. Para ello tratamos, entre otros datos, la dirección IP necesaria para transmitir contenidos y funciones al navegador o dispositivo del usuario.',
        'El acceso a la oferta online puede registrarse mediante archivos de registro del servidor que incluyen información técnica, URL solicitadas, hora de acceso, volumen de datos transmitidos y direcciones IP.',
        'Los datos de log se almacenan por un máximo de 30 días y luego se eliminan o anonimizan, salvo que su conservación sea necesaria con fines de prueba.',
      ],
      bullets: [
        'Proveedor de infraestructura mencionado: 1&1 IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Alemania.',
        'También puede procesarse información relacionada con el envío, recepción y almacenamiento de correos electrónicos.',
      ],
    },
    {
      title: t('privacy.cookies'),
      paragraphs: [
        'Utilizamos cookies y funciones similares para garantizar la funcionalidad, seguridad y comodidad de los servicios online, así como para realizar análisis del flujo de visitantes.',
        'Cuando es necesario, solicitamos el consentimiento previo del usuario. Cuando no es necesario, nos basamos en nuestros intereses legítimos.',
        'Los usuarios pueden revocar su consentimiento en cualquier momento y oponerse al tratamiento según las disposiciones legales y la configuración de su navegador.',
      ],
      bullets: [
        'Cookies temporales: se eliminan al cerrar el navegador o el dispositivo.',
        'Cookies permanentes: permanecen almacenadas tras cerrar el dispositivo y pueden conservarse hasta dos años si no se indica otra duración.',
        'El consentimiento para cookies puede gestionarse mediante una plataforma de gestión de consentimientos con almacenamiento de la prueba de consentimiento.',
      ],
    },
    {
      title: t('privacy.contact.management'),
      paragraphs: [
        'Cuando una persona se pone en contacto con nosotros por correo, formulario de contacto, email, teléfono o redes sociales, procesamos sus datos en la medida necesaria para responder a la consulta y gestionar posibles medidas solicitadas.',
        'Los datos pueden incluir datos de identificación, contacto, contenido, uso y metadatos de comunicación.',
      ],
      bullets: [
        'Finalidades: comunicación, procedimientos administrativos y organizativos, retroalimentación y provisión de la oferta online.',
        'Bases legales: intereses legítimos y cumplimiento de contrato o medidas precontractuales.',
      ],
    },
    {
      title: t('privacy.messenger.communication'),
      paragraphs: [
        'Utilizamos servicios de mensajería para fines de comunicación y pedimos que se tengan en cuenta las particularidades de su funcionamiento, incluido el tratamiento de metadatos de la comunicación.',
        'Aunque en algunos casos exista cifrado de extremo a extremo, los proveedores de mensajería pueden conocer información como qué personas se comunican y cuándo lo hacen.',
        'El usuario puede optar por utilizar alternativas como el teléfono o el correo electrónico y puede revocar en cualquier momento un consentimiento otorgado.',
      ],
      bullets: [
        'Datos tratados: datos de contacto, datos de contenido y metadatos de comunicación.',
        'Bases legales: consentimiento, cumplimiento del contrato y consultas precontractuales, e intereses legítimos.',
      ],
    },
    {
      title: t('privacy.web.analysis'),
      paragraphs: [
        'El análisis web sirve para evaluar los flujos de visitantes y comprender qué contenidos o funciones se utilizan con mayor frecuencia, así como detectar necesidades de optimización.',
        'Podemos crear perfiles seudónimos de uso y utilizar cookies o mecanismos similares. Las direcciones IP se protegen mediante enmascaramiento de IP.',
        'Si se solicita consentimiento para proveedores externos, la base jurídica es el consentimiento; en caso contrario, el tratamiento se basa en intereses legítimos.',
      ],
      bullets: [
        'Proveedor mencionado: Google Analytics, Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irlanda.',
        'Medida de seguridad: IP-Masking.',
        'Posibilidades de oposición: Google Opt-Out Plugin y ajustes de anuncios de Google.',
      ],
    },
    {
      title: t('privacy.online.marketing'),
      paragraphs: [
        'Procesamos datos personales para fines de marketing online, incluida la comercialización de espacios publicitarios, la presentación de contenidos en función de posibles intereses y la medición de su efectividad.',
        'Para ello pueden crearse perfiles de usuario seudónimos y emplearse cookies u otras técnicas de almacenamiento en dispositivos.',
        'En principio, solo accedemos a información consolidada sobre el rendimiento de nuestras acciones publicitarias, por ejemplo a través de mediciones de conversión.',
      ],
      bullets: [
        'Las cookies de marketing pueden almacenarse hasta dos años, salvo que se indique otra duración.',
        'Existen opciones de opt-out generales para Europa, Canadá, Estados Unidos y a nivel global.',
        'Bases legales: consentimiento o intereses legítimos, según el caso.',
      ],
    },
    {
      title: t('privacy.social.media'),
      paragraphs: [
        'Mantenemos perfiles en redes sociales para comunicarnos con usuarios activos en esas plataformas y para ofrecer información sobre nuestra actividad.',
        'Los datos de los usuarios pueden procesarse fuera de la Unión Europea y utilizarse para investigación de mercado o publicidad mediante perfiles de usuario.',
        'Para solicitudes de acceso o ejercicio de derechos, normalmente resulta más efectivo dirigirse directamente a los proveedores de las plataformas.',
      ],
      bullets: [
        'Servicios mencionados: Instagram y páginas de Facebook.',
        'Proveedor: Meta Platforms Ireland Limited, Merrion Road, Dublin 4, D04 X2K5, Irlanda.',
        'Base legal: intereses legítimos.',
      ],
    },
    {
      title: 'Contacto',
      paragraphs: [
        <>
          Para consultas sobre privacidad puedes escribir a{' '}
          <a
            href="mailto:info@bonanitsuenoinfantil.com"
            className="text-[#4d6b68] underline decoration-[#d4a574] underline-offset-4"
          >
            info@bonanitsuenoinfantil.com
          </a>
          .
        </>,
      ],
      cta: (
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center rounded-full !bg-[#d4a574] px-6 py-3 text-sm font-bold !text-white no-underline shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#c9975e] hover:!text-white hover:no-underline hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)]"
        >
          {t('privacy.back')}
        </Link>
      ),
    },
  ];

  return (
    <main className="min-h-screen bg-[#faf8f5]">
      <section className="bg-linear-to-b from-[#f6f1e8] via-[#f3ede2] to-[#ebe4d8]">
        <div className="mx-auto max-w-5xl px-4 pb-18 pt-36 md:pb-24 md:pt-44">
          <div className="max-w-4xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b9824f]">
              Protección de datos
            </p>
            <h1
              className="mt-5 max-w-4xl text-4xl font-bold leading-[1.05] text-[#425a58] md:text-6xl"
              style={{ fontFamily: 'var(--font-playfair)' }}
            >
              {t('privacy.title')}
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-[#4f6360] md:text-[1.2rem] md:leading-9">
              {t('privacy.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#faf8f5] py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid gap-8 md:grid-cols-3 md:gap-10">
            {summaryDetails.map((detail) => (
              <div key={detail.title}>
                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-[#7c938a]">
                  {detail.title}
                </p>
                <ul className="space-y-2 pl-5 text-[1.02rem] leading-7 text-[#425a58] marker:text-[#b9824f]">
                  {detail.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 border-t border-[#e6dccb] pt-12 md:mt-16 md:pt-16">
            <div className="space-y-12 md:space-y-14">
              {sections.map((section) => (
                <section key={section.title} className="max-w-4xl">
                  <h2
                    className="text-[2rem] font-bold leading-tight text-[#4b6664] md:text-[2.8rem]"
                    style={{ fontFamily: 'var(--font-playfair)' }}
                  >
                    {section.title}
                  </h2>

                  {section.paragraphs ? (
                    <div className="mt-4 space-y-3 text-[1.02rem] leading-8 text-[#4e615f] [&>p]:mb-0">
                      {section.paragraphs.map((paragraph, index) => (
                        <p key={`${section.title}-paragraph-${index}`}>{paragraph}</p>
                      ))}
                    </div>
                  ) : null}

                  {section.bullets ? (
                    <ul className="mt-5 space-y-3 pl-5 text-[1.02rem] leading-8 text-[#4e615f] marker:text-[#b9824f]">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  ) : null}

                  {section.cta}
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
