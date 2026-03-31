import Link from 'next/link';

export const metadata = {
  title: 'Aviso legal | Bonanit',
  description: 'Información legal y datos del proveedor de servicios de Bonanit.',
};

const socialProfiles = [
  {
    label: 'Instagram',
    url: 'http://instagram.com/bonanit_suenoinfantil',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/profile.php?id=61571558230641',
  },
];

export default function AvisoLegal() {
  return (
    <main className="bg-[#f5f3ec] min-h-screen">
      <section className="bg-[#e5e2d4] border-b border-black/5">
        <div className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.2em] text-[#7f968e] font-semibold">
              Información legal
            </p>
            <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#2e4e6d]">
              Aviso legal
            </h1>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#2e4e6d]">
              Datos del proveedor, medios de contacto, presencia en redes y
              avisos legales aplicables a Bonanit.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="space-y-8">
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-semibold text-[#2e4e6d]">
                Proveedor de servicios
              </h2>
              <div className="mt-5 space-y-1 text-[#41586a] leading-relaxed">
                <p>Laura Montoy Blanca, Bonanit</p>
                <p>Thorwaldsenstra&szlig;e 13</p>
                <p>12157 Berl&iacute;n</p>
                <p>Alemania</p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-semibold text-[#2e4e6d]">
                Medios de contacto
              </h2>
              <div className="mt-5 space-y-4 text-[#41586a] leading-relaxed">
                <p>
                  Direcci&oacute;n de correo electr&oacute;nico:{' '}
                  <a
                    href="mailto:info@bonanitsuenoinfantil.com"
                    className="text-[#184554] underline decoration-[#7f968e] underline-offset-4"
                  >
                    info@bonanitsuenoinfantil.com
                  </a>
                </p>
                <p>Otros medios de contacto: Instagram</p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-semibold text-[#2e4e6d]">
                Informaci&oacute;n sobre la empresa
              </h2>
              <div className="mt-5 space-y-6 text-[#41586a] leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-[#2e4e6d]">
                    Resoluci&oacute;n de disputas para consumidores
                  </h3>
                  <p className="mt-2">
                    No estamos dispuestos ni obligados a participar en un
                    procedimiento de resoluci&oacute;n de disputas ante una
                    entidad de resoluci&oacute;n de disputas para consumidores.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2e4e6d]">
                    Redes sociales y otras presencias en l&iacute;nea
                  </h3>
                  <p className="mt-2">
                    Este aviso legal tambi&eacute;n se aplica a las siguientes
                    presencias en redes sociales y perfiles en l&iacute;nea:
                  </p>
                  <ul className="mt-4 space-y-3">
                    {socialProfiles.map((profile) => (
                      <li key={profile.url}>
                        <a
                          href={profile.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[#184554] underline decoration-[#7f968e] underline-offset-4 break-all"
                        >
                          {profile.url}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>

          <aside className="space-y-8">
            <div className="rounded-3xl bg-[#7f968e] p-8 text-white shadow-sm">
              <h2 className="text-2xl font-semibold">
                Reserva de uso para texto y miner&iacute;a de datos
              </h2>
              <p className="mt-4 leading-relaxed text-white/90">
                Queda reservada cualquier utilizaci&oacute;n de los contenidos
                de este sitio para procesos automatizados de an&aacute;lisis,
                extracci&oacute;n o miner&iacute;a de datos cuando no exista una
                autorizaci&oacute;n expresa.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-semibold text-[#2e4e6d]">
                Avisos de responsabilidad y de derechos de protecci&oacute;n
              </h2>
              <div className="mt-5 space-y-6 text-[#41586a] leading-relaxed">
                <div>
                  <h3 className="text-lg font-semibold text-[#2e4e6d]">
                    Exenci&oacute;n de responsabilidad
                  </h3>
                  <p className="mt-2">
                    Los contenidos de esta oferta en l&iacute;nea han sido
                    elaborados cuidadosamente y seg&uacute;n nuestro conocimiento
                    actual, pero solo sirven como informaci&oacute;n y no tienen
                    efecto legal vinculante, salvo que se trate de
                    informaci&oacute;n legalmente obligatoria. Nos reservamos el
                    derecho de modificar o eliminar los contenidos total o
                    parcialmente, siempre que las obligaciones contractuales
                    permanezcan intactas. Todas las ofertas son sin compromiso
                    y no vinculantes.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2e4e6d]">
                    Derechos de autor y marcas
                  </h3>
                  <p className="mt-2">
                    Todos los contenidos mostrados en este sitio web, como
                    textos, fotograf&iacute;as, gr&aacute;ficos, marcas y
                    nombres comerciales, est&aacute;n protegidos por los derechos
                    de protecci&oacute;n correspondientes. El uso, reproducci&oacute;n
                    u otras formas de explotaci&oacute;n est&aacute;n sujetas a
                    nuestros derechos o a los derechos de los respectivos
                    autores o titulares.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[#2e4e6d]">
                    Avisos sobre infracciones legales
                  </h3>
                  <p className="mt-2">
                    Si observa infracciones legales dentro de nuestro sitio web,
                    le pedimos que nos lo indique. Eliminaremos los contenidos y
                    enlaces ilegales inmediatamente despu&eacute;s de tomar
                    conocimiento.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-black/5">
              <h2 className="text-2xl font-semibold text-[#2e4e6d]">
                Cr&eacute;ditos de im&aacute;genes
              </h2>
              <div className="mt-5 space-y-4 text-[#41586a] leading-relaxed">
                <p>
                  Fuentes de im&aacute;genes y avisos de derechos de autor:
                </p>
                <p>Freepik (www.freepik.com) o fueron creadas por nosotros mismos.</p>
                <p className="text-sm text-[#5b6f7e]">
                  Creado con el generador gratuito Datenschutz-Generator.de de
                  Dr. Thomas Schwenke
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-[#184554] p-8 text-white shadow-sm">
              <h2 className="text-2xl font-semibold">Contacto</h2>
              <p className="mt-4 leading-relaxed text-white/90">
                Para cualquier consulta relacionada con este aviso legal puedes
                escribir a{' '}
                <a
                  href="mailto:info@bonanitsuenoinfantil.com"
                  className="underline underline-offset-4"
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
        </div>
      </section>
    </main>
  );
}
