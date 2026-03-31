import Link from 'next/link';

export const metadata = {
  title: 'Política de privacidad | Bonanit',
  description:
    'Información sobre el tratamiento de datos personales en Bonanit y en sus servicios online.',
};

const summarySections = [
  {
    title: 'Responsable',
    content: [
      'Laura Montoy Blanca',
      'Bonanit',
      'Thorwaldsenstraße 13',
      '12157 Berlín',
      'Correo electrónico: info@bonanitsuenoinfantil.com',
    ],
  },
  {
    title: 'Fecha de vigencia',
    content: ['28 de noviembre de 2025'],
  },
  {
    title: 'Bases legales principales',
    content: [
      'Consentimiento',
      'Cumplimiento de contrato y consultas precontractuales',
      'Obligación legal',
      'Intereses legítimos',
    ],
  },
];

const toc = [
  'Preámbulo',
  'Responsable',
  'Resumen de los tratamientos',
  'Bases legales aplicables',
  'Medidas de seguridad',
  'Información general sobre almacenamiento y eliminación de datos',
  'Derechos de las personas interesadas',
  'Servicios comerciales',
  'Prestación de la oferta online y alojamiento web',
  'Uso de cookies',
  'Gestión de contactos y consultas',
  'Comunicación vía Messenger',
  'Análisis web, monitorización y optimización',
  'Marketing online',
  'Presencia en redes sociales',
  'Plugins y funciones o contenidos integrados',
  'Información de privacidad para denunciantes',
  'Cambios y actualizaciones',
];

const sections = [
  {
    title: 'Preámbulo',
    paragraphs: [
      'Con la siguiente declaración de privacidad queremos informarle sobre qué tipos de sus datos personales procesamos, con qué fines y en qué medida.',
      'La declaración de privacidad se aplica a todos los procesamientos de datos personales que realizamos, tanto en el marco de la prestación de nuestros servicios como, en particular, en nuestras páginas web, aplicaciones móviles y dentro de presencias online externas, como por ejemplo nuestros perfiles en redes sociales.',
      'Los términos utilizados no son específicos de género.',
    ],
  },
  {
    title: 'Responsable',
    paragraphs: [
      'Laura Montoy Blanca, Bonanit, Thorwaldsenstraße 13, 12157 Berlín.',
      'Personas con derecho de representación: Laura Montoy Blanca.',
      'Correo electrónico: info@bonanitsuenoinfantil.com.',
    ],
  },
  {
    title: 'Resumen de los tratamientos',
    bullets: [
      'Tipos de datos procesados: datos de registro, datos de empleados, datos de pago, datos de contacto, datos de contenido, datos contractuales, datos de uso y datos meta, de comunicación y de procedimiento.',
      'Categorías especiales de datos: datos de salud.',
      'Categorías de personas afectadas: beneficiarios de servicios y clientes, empleados, interesados, socios de comunicación, usuarios, socios comerciales y contractuales, terceras personas y denunciantes.',
      'Fines del procesamiento: prestación de servicios contractuales, comunicación, medidas de seguridad, medición de alcance, seguimiento, organización administrativa, marketing, perfiles de usuario, infraestructura tecnológica, protección de denunciantes y relaciones públicas.',
    ],
  },
  {
    title: 'Bases legales aplicables',
    paragraphs: [
      'Procesamos datos personales sobre la base del consentimiento, del cumplimiento de contrato y consultas precontractuales, de obligaciones legales y de intereses legítimos, conforme al art. 6, ap. 1 del RGPD.',
      'Además de las normas del RGPD, en Alemania también se aplican disposiciones nacionales de protección de datos, especialmente la Bundesdatenschutzgesetz (BDSG).',
    ],
  },
  {
    title: 'Medidas de seguridad',
    paragraphs: [
      'Aplicamos medidas técnicas y organizativas adecuadas para garantizar un nivel de protección apropiado al riesgo, teniendo en cuenta el estado de la técnica, los costes de implementación y la naturaleza, el alcance y los fines del tratamiento.',
      'Estas medidas incluyen especialmente la garantía de la confidencialidad, integridad y disponibilidad de los datos, así como procedimientos para el ejercicio de derechos, la supresión de datos y la reacción ante incidentes.',
      'Protegemos las conexiones en línea mediante tecnología de cifrado TLS/SSL (HTTPS) para evitar accesos no autorizados a los datos transmitidos.',
    ],
  },
  {
    title: 'Información general sobre almacenamiento y eliminación de datos',
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
    title: 'Derechos de las personas interesadas',
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
    title: 'Servicios comerciales',
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
    title: 'Prestación de la oferta online y alojamiento web',
    paragraphs: [
      'Procesamos datos de los usuarios para poner a su disposición nuestros servicios en línea. Para ello tratamos, entre otros datos, la dirección IP necesaria para transmitir contenidos y funciones al navegador o dispositivo del usuario.',
      'El acceso a la oferta online puede registrarse mediante archivos de registro del servidor que incluyen información técnica, URL solicitadas, hora de acceso, volumen de datos transmitidos y direcciones IP.',
      'Los datos de log se almacenan por un máximo de 30 días y luego se eliminan o anonimizan, salvo que su conservación sea necesaria con fines de prueba.',
    ],
    bullets: [
      'Proveedor de infraestructura mencionado: 1&1 IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Alemania.',
      'También puede procesarse información relacionada con el envío, recepción y almacenamiento de correos electrónicos.',
      'Base legal principal: intereses legítimos conforme al art. 6, ap. 1, letra f del RGPD.',
    ],
  },
  {
    title: 'Uso de cookies',
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
    title: 'Gestión de contactos y consultas',
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
    title: 'Comunicación vía Messenger',
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
    title: 'Análisis web, monitorización y optimización',
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
    title: 'Marketing online',
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
    title: 'Presencia en redes sociales',
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
    title: 'Plugins y funciones o contenidos integrados',
    paragraphs: [
      'Integramos elementos funcionales y contenidos que se cargan desde servidores de terceros proveedores, como por ejemplo tipografías, gráficos, videos o mapas.',
      'La integración exige el tratamiento de la dirección IP del usuario para poder entregar correctamente esos contenidos al navegador.',
      'Los terceros proveedores pueden utilizar etiquetas de píxel y cookies con fines estadísticos o de marketing.',
    ],
    bullets: [
      'Servicio mencionado: Google Fonts, Google Ireland Limited, Dublin 4, Irlanda.',
      'Google Fonts puede recibir la IP, URL solicitada, cabeceras HTTP, User-Agent y URL de referencia para proporcionar las tipografías.',
      'Base legal: consentimiento o intereses legítimos, según el caso.',
    ],
  },
  {
    title: 'Información de privacidad para denunciantes',
    paragraphs: [
      'En el marco del procedimiento para informantes, tratamos los datos exclusivamente para revisar, gestionar y documentar la información proporcionada sobre posibles conductas indebidas.',
      'Los datos se tratan de forma estrictamente confidencial y solo se comunican a personas autorizadas o a terceros cuando exista una obligación legal o sea estrictamente necesario para la investigación del caso.',
      'La información puede enviarse de forma anónima, aunque, cuando la ley lo permita, se recomienda facilitar nombre y datos de contacto para facilitar la gestión de la comunicación.',
      'Al visitar el sitio en modo normal, el navegador puede transmitir automáticamente cierta información técnica, incluida la dirección IP, que se almacena temporalmente en logs por un máximo de 30 días.',
    ],
    bullets: [
      'Tipos de datos: nombre, datos de contacto, datos sobre testigos, personas afectadas, personas denunciadas, hechos reportados y otra información relevante.',
      'En ciertos casos pueden tratarse categorías especiales de datos personales cuando sea estrictamente necesario y exista base legal suficiente.',
      'Bases legales posibles: consentimiento, obligación legal e intereses legítimos, además de normas específicas como el HinSchG y el BDSG.',
      'La conservación se limita al tiempo necesario para la finalidad del procedimiento y al cumplimiento de obligaciones legales.',
    ],
  },
  {
    title: 'Cambios y actualizaciones',
    paragraphs: [
      'Le pedimos que revise regularmente el contenido de esta política de privacidad. La adaptamos cuando los cambios en nuestros tratamientos de datos lo hacen necesario.',
      'Si un cambio requiere una acción por su parte, como la prestación de consentimiento, o una notificación individual, se lo comunicaremos oportunamente.',
      'Las direcciones y datos de contacto de empresas y organizaciones incluidas en esta política pueden cambiar con el tiempo, por lo que recomendamos verificar la información antes de contactar.',
      'Creado con el generador gratuito Datenschutz-Generator.de de Dr. Thomas Schwenke.',
    ],
  },
];

export default function PoliticaDePrivacidad() {
  return (
    <main className="min-h-screen bg-[#f5f3ec]">
      <section className="border-b border-black/5 bg-[#e5e2d4]">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7f968e]">
              Protección de datos
            </p>
            <h1 className="mt-4 text-4xl font-bold text-[#2e4e6d] md:text-5xl">
              Política de privacidad
            </h1>
            <p className="mt-6 text-base leading-relaxed text-[#2e4e6d] md:text-lg">
              Información sobre qué datos personales se procesan en
              Bonanit, con qué fines y cuáles son los derechos de las
              personas afectadas.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <aside className="space-y-8">
            <div className="rounded-3xl bg-[#184554] p-8 text-white shadow-sm">
              <h2 className="text-2xl font-semibold">Resumen</h2>
              <div className="mt-5 space-y-5">
                {summarySections.map((section) => (
                  <div key={section.title}>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/70">
                      {section.title}
                    </h3>
                    <ul className="mt-2 space-y-1 text-white/90">
                      {section.content.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-semibold text-[#2e4e6d]">
                Índice de contenidos
              </h2>
              <ul className="mt-5 space-y-3 text-[#41586a]">
                {toc.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-semibold text-[#2e4e6d]">
                Contacto
              </h2>
              <p className="mt-4 leading-relaxed text-[#41586a]">
                Para consultas sobre privacidad puedes escribir a{' '}
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
                className="mt-6 inline-flex items-center justify-center rounded-full !bg-[#d4a574] px-5 py-3 text-sm font-bold !text-white no-underline shadow-[0_10px_24px_rgba(212,165,116,0.25)] transition-all duration-300 hover:translate-y-[-2px] hover:!bg-[#c9975e] hover:!text-white hover:no-underline hover:shadow-[0_14px_30px_rgba(201,151,94,0.3)]"
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

                {section.bullets ? (
                  <ul className="mt-5 space-y-3 text-[#41586a] leading-relaxed">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
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
