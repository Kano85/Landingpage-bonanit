'use client';

import { createContext, useContext, useSyncExternalStore } from 'react';

type Language = 'es' | 'de';
const DEFAULT_LANGUAGE: Language = 'es';
const LANGUAGE_STORAGE_KEY = 'language';
const LANGUAGE_CHANGE_EVENT = 'language-change';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translations = {
  es: {
    // Header
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.services': 'Mis servicios',

    // Hero
    'hero.title': 'Dormir mejor criando con amor',
    'hero.subtitle':
      'Soy Laura Montoy, creadora de Bonanit y te acompaño de manera respetuosa a mejorar el descanso de tu bebé.',
    'hero.cta': 'Conozcámonos',

    // Questions
    'questions.q1': '¿Estás agotada y con la paciencia al límite?',
    'questions.q2':
      '¿No logras descansar por las noches y ya te está pasando factura?',
    'questions.q3': '¿Sientes que la maternidad te desborda?',
    'questions.q4': '¿Te sientes sola, con o sin red de apoyo?',

    // Not Alone
    'alone.title': 'No tienes que vivirlo sola',
    'alone.p1':
      'Te dicen que es solo una fase, que pasará rápido… pero eso no lo hace menos duro. La falta de sueño puede generar frustración y hacer que no disfrutes plenamente esta etapa tan especial. Y si además, crías lejos de tu red de apoyo, todo se vuelve aún más difícil.',
    'alone.p2':
      'Yo también estuve ahí, descubriendo la maternidad en otro país, lejos de mi gente y mi idioma. Por eso hoy acompaño a otras familias, para que no tengan que vivirlo solas.',

    // Pullquote
    quote:
      'Te tomo de la mano para hacer los cambios adecuados y transformar vuestras noches.',

    // Real Support
    'support.title': 'Aquí tienes un apoyo real',
    'support.p1':
      'Si sientes que necesitas acompañamiento real para mejorar el sueño de tu bebé, con mi plan de 4 semanas tendrás a alguien a tu lado.',
    'support.p2':
      'Diseñaré un plan de sueño respetuoso y personalizado, y estaremos en contacto con videollamadas y mensajes.',
    'support.p3':
      'No estás sola: recuperar el descanso es posible, sin esperar a que "pase la fase".',

    // FAQ
    'faq.title': 'Preguntas frecuentes',
    'faq.q1': '¿Mi bebé va a llorar?',
    'faq.a1':
      'Muy probablemente no. Haré todo lo posible para que así sea, incluso si significa ir más despacio. Mi plan de sueño infantil se ajusta siempre que hay llanto y es profundamente respetuoso. Seguimos el ritmo de vuestro bebé en todo momento, priorizando siempre su bienestar.',
    'faq.q2': '¿Es compatible el plan con la lactancia materna y el colecho?',
    'faq.a2':
      'Sí, completamente. El plan de sueño se adapta a vuestros deseos y necesidades. Favorezco una crianza con apego, respetando la lactancia materna y el colecho. Lo esencial es encontrar juntos la mejor manera para que vuestro bebé descanse bien y se sienta seguro.',
    'faq.q3': '¿Hay que quedarse en casa y evitar los viajes?',
    'faq.a3':
      'Durante las cuatro semanas del plan de sueño, recomiendo priorizar la rutina y no cambiar su espacio de sueño. Estaremos introduciendo cambios importantes en cómo tu bebé se duerme, y conviene no sumar otros grandes ajustes al mismo tiempo. La calma y la rutina serán clave en el proceso.',
    'faq.q4': '¿Tendré que seguir horarios estrictos para siempre?',
    'faq.a4':
      'Durante el plan es importante seguir los horarios lo más fielmente posible para evitar el sobrecansancio, que dificulta la adaptación a los nuevos hábitos. Una vez que tu bebé los haya adquirido, podrás ser más flexible y hacer excepciones. De hecho, los niños con buenos hábitos de sueño suelen adaptarse mejor a los cambios de horario.',
    'faq.q5': '¿Cuánto tiempo va a tardar en verse resultados?',
    'faq.a5':
      'Depende de cada bebé, pero en general los primeros resultados suelen notarse hacia las dos semanas y seguirá mejorando durante unas semanas más. Al ser un plan respetuoso seguimos siempre su ritmo, por lo que a veces los avances tardan un poco más. Lo importante es ser constantes y confiar en el proceso para mejorar su descanso.',
    'faq.q6': '¿Qué pasa si algo no funciona o no os sentís cómodos?',
    'faq.a6':
      'Lo más importante en este proceso es la comunicación conmigo. Si algo no se siente bien o no funciona, no es lo correcto. Necesito que seáis transparentes y me contéis cómo os sentís para poder adaptar el plan si es necesario. Juntos encontraremos la forma que mejor se ajuste a vuestra familia y al descanso de vuestro bebé.',

    // Testimonials
    'testimonials.title':
      'Así han vivido algunas familias la experiencia de trabajar conmigo…',

    // CTA Final
    'cta.final': '¿Te parece si agendamos una videollamada gratuita?',

    // Footer
    'footer.tagline':
      'Acompaño a familias a mejorar el descanso de sus bebés con un enfoque respetuoso, cercano y personalizado, para vivir la maternidad con más calma y confianza.',
    'footer.follow': 'Síguenos',
    'footer.info': 'Información',
    'footer.nav': 'Navegación',
    'footer.connect': 'Conecta conmigo',
    'footer.connect_desc':
      'Iniciemos una conversación sobre cómo mejorar el descanso de tu bebé.',
    'footer.schedule': 'Agendar llamada',

    // About Page (Sobre mí)
    'about.hero.title': 'Soy Laura Montoy',
    'about.hero.p1':
      'Hace más de una década que me mudé a Berlín donde nació mi familia y de alguna forma una nueva versión de mí.',
    'about.hero.p2':
      'De formación soy licenciada en biotecnología y profesora de secundaria. He impartido clases de Biología y Español durante los últimos ocho años y mi amor por la ciencia siempre ha estado presente en mi forma de ver y entender el mundo, pero fue la maternidad la que realmente me transformó.',
    'about.how.title': 'Cómo empezó todo',
    'about.how.p1':
      'Cuando nació mi primer hijo descubrí algo inesperado: una fascinación absoluta por el sueño infantil. Leía, investigaba y me formaba para acompañarlo mejor en sus noches y ayudarnos a descansar.',
    'about.how.p2':
      'Con la llegada de mi segunda hija surgieron nuevos desafíos. Decidí certificarme como asesora de sueño infantil a los dos meses. Fue un proceso intenso, de estudio, práctica y compromiso, del que me siento muy orgullosa.',
    'about.how.p3':
      'He vivido muchas experiencias: parto natural y cesárea, lactancia exclusiva y fórmula, un bebé dormilón y otro que no tanto. Todo me enseñó que no hay una única forma de criar ni de descansar.',
    'about.work.title': 'Mi forma de trabajar',
    'about.work.p1':
      'Hoy combino mis dos pasiones: sigo enseñando a tiempo parcial y dedico el resto de mi energía a acompañar a familias como asesora de sueño.',
    'about.work.p2':
      'Trabajo con un enfoque respetuoso, basado en la ciencia y adaptado a cada familia. Con colecho o sin él, lactancia o biberón, en la misma habitación o en camas separadas: todo es válido. Construyo soluciones reales y sostenibles.',
    'about.work.p3':
      'Acompañaros no es solo un trabajo, es mi vocación. Estoy aquí para que el descanso vuelva a formar parte de vuestra vida, porque dormir bien no debería ser un lujo.',
    'about.cta.title': 'Reserva tu cita gratuita',
    'about.cta.p':
      'Hablemos sobre tus necesidades y cómo puedo acompañarte en el camino del sueño',
    'about.cta.button': '¡Conozcámonos!',

    // Services Page (Mis servicios)
    'services.hero.title': 'Mis servicios',
    'services.hero.subtitle':
      'Elige el plan que mejor se adapta a tu situación',
    'services.discount.title': '10% de descuento',
    'services.discount.p1':
      'Si ya has trabajado conmigo, ¡tienes 10% de descuento en todos los servicios futuros!',
    'services.discount.p2':
      'Valoro tu confianza y quiero acompañarte en cada nueva etapa con el mismo compromiso y cercanía.',
    'services.cta.title': 'Reserva tu cita gratuita',
    'services.cta.p':
      'Hablemos sobre tus necesidades y cómo puedo acompañarte en el camino del sueño',
    'services.cta.button': '¡Conozcámonos!',
    'services.faq.title': 'Preguntas frecuentes',
    'services.faq.q1': '¿Cuál es el rango de edad de los bebés?',
    'services.faq.a1':
      'Trabajo con familias que tienen bebés desde recién nacidos hasta 4 años. Cada edad tiene sus particularidades y adapto el plan según las necesidades específicas de tu bebé.',
    'services.faq.q2': '¿Qué pasa si no veo resultados?',
    'services.faq.a2':
      'El cambio en el sueño toma tiempo y paciencia. Durante nuestro trabajo juntas, iremos haciendo ajustes para asegurar que el plan funciona para tu familia. Mi objetivo es que sientas apoyo real en el proceso.',
    'services.faq.q3': '¿Puedo cambiar de plan durante el acompañamiento?',
    'services.faq.a3':
      'Claro. Si en algún momento necesitas más o menos acompañamiento, podemos ajustar el plan según tus necesidades. Tu comodidad y confianza es lo primero.',
    'services.faq.q4': '¿Qué incluye exactamente el seguimiento por WhatsApp?',
    'services.faq.a4':
      'Revisaré tu bitácora de sueño diaria, responderé tus preguntas, te daré orientación sobre cambios en el plan si es necesario, y estaré atenta a tus preocupaciones. No es un chat continuo, sino un acompañamiento estructurado y a tu ritmo.',

    // Service Plans
    'service.plan1.title': 'Plan de sueño con seguimiento',
    'service.plan1.duration': '4 semanas',
    'service.plan1.desc1':
      'Este plan es para ti si sientes que necesitas acompañamiento real en el camino del sueño infantil. Durante cuatro semanas estaré a tu lado, resolviendo dudas, calmando inseguridades y ajustando el plan de sueño según lo que vaya necesitando tu bebé… y tú.',
    'service.plan1.desc2':
      'Cada día revisaré el registro de sueño y estaré pendiente de cada pequeño avance o dificultad, porque a veces lo que más necesitamos es saber que no estamos solas.',
    'service.plan1.f1':
      'Análisis de sueño mediante cuestionario inicial y bitácora',
    'service.plan1.f2': 'Creación de un plan de sueño específico para tu bebé',
    'service.plan1.f3': '3 videollamadas de 40 min',
    'service.plan1.f4': 'Seguimiento diario por WhatsApp',
    'service.plan1.f5': 'Recomendaciones finales por escrito',
    'service.plan1.button': 'Solicitar disponibilidad',

    'service.plan2.title': 'Extensión del plan',
    'service.plan2.duration': '4 semanas más',
    'service.plan2.desc1':
      'Si al terminar tu plan de sueño sientes que aún queda camino por recorrer, puedes ampliar el acompañamiento durante cuatro semanas más, con un descuento especial por haber trabajado juntas previamente.',
    'service.plan2.desc2':
      'Seguiremos afinando el descanso de tu bebé con seguimiento diario y dos videollamadas adicionales, suficientes para seguir avanzando con seguridad y confianza. Es una opción pensada para quienes quieren seguir contando con apoyo cercano por un tiempo más.',
    'service.plan2.f1': 'Ajustes y afinado del plan de sueño',
    'service.plan2.f2': '2 videollamadas de 40 min',
    'service.plan2.f3': 'Seguimiento diario por WhatsApp',
    'service.plan2.f4': 'Recomendaciones finales por escrito',
    'service.plan2.button': 'Solicitar disponibilidad',

    'service.plan3.title': 'Sesión puntual',
    'service.plan3.duration': '45 minutos',
    'service.plan3.desc1':
      'Esta sesión está pensada para familias que ya han trabajado el sueño de su bebé —conmigo o por su cuenta— y se encuentran ante una dificultad concreta: una regresión, un cambio de rutinas o una nueva etapa.',
    'service.plan3.desc2':
      'Durante la videollamada analizaremos juntas la situación y te daré una guía clara y práctica para recuperar el equilibrio con seguridad.',
    'service.plan3.f1': 'Cuestionario previo',
    'service.plan3.f2': 'Videollamada de 45 min',
    'service.plan3.f3': 'Recomendaciones finales por escrito',
    'service.plan3.button': 'Reservar sesión',

    // Footer Links
    'links.legal.legal': 'Aviso legal',
    'links.legal.terms': 'Términos y condiciones',
    'links.legal.privacy': 'Política de privacidad',
    'links.nav.about': 'Sobre mí',
    'links.nav.services': 'Mis servicios',
    'links.nav.contact': 'Contacto',
  },
  de: {
    // Header
    'nav.home': 'Startseite',
    'nav.about': 'Über mich',
    'nav.services': 'Meine Dienstleistungen',

    // Hero
    'hero.title': 'Besser schlafen mit liebevoller Erziehung',
    'hero.subtitle':
      'Ich bin Laura Montoy, die Gründerin von Bonanit, und ich begleite Sie respektvoll dabei, den Schlaf Ihres Babys zu verbessern.',
    'hero.cta': 'Kennenlernen',

    // Questions
    'questions.q1': 'Sind Sie erschöpft und am Ende Ihrer Geduld?',
    'questions.q2':
      'Können Sie nachts nicht ausruhen und es beeinträchtigt bereits Ihre Gesundheit?',
    'questions.q3': 'Fühlen Sie sich von der Elternschaft überfordert?',
    'questions.q4': 'Fühlen Sie sich allein, mit oder ohne Unterstützungsnetz?',

    // Not Alone
    'alone.title': 'Sie müssen das nicht allein durchmachen',
    'alone.p1':
      'Man sagt Ihnen, dass es nur eine Phase ist, die schnell vorübergeht... aber das macht es nicht weniger schwierig. Schlafmangel kann Frustration verursachen und dazu führen, dass Sie diese besondere Phase nicht vollständig genießen. Und wenn Sie Ihre Familie auch noch weit weg von Ihrem Unterstützungsnetz aufziehen, wird alles noch schwieriger.',
    'alone.p2':
      'Mir ging es auch so. Ich habe die Mutterschaft in einem anderen Land entdeckt, weit weg von meiner Familie und meiner Sprache. Deshalb begleite ich heute andere Familien, damit sie das nicht allein durchmachen müssen.',

    // Pullquote
    quote:
      'Ich nehme Sie an die Hand, um die richtigen Veränderungen vorzunehmen und Ihre Nächte zu transformieren.',

    // Real Support
    'support.title': 'Hier haben Sie echte Unterstützung',
    'support.p1':
      'Wenn Sie spüren, dass Sie echte Begleitung brauchen, um den Schlaf Ihres Babys zu verbessern, werden Sie mit meinem 4-Wochen-Plan jemanden an Ihrer Seite haben.',
    'support.p2':
      'Ich werde einen respektvollen und personalisierten Schlafplan erstellen, und wir werden in Kontakt bleiben durch Videoanrufe und Nachrichten.',
    'support.p3':
      'Sie sind nicht allein: Besserer Schlaf ist möglich, ohne auf "diese Phase" zu warten.',

    // FAQ
    'faq.title': 'Häufig gestellte Fragen',
    'faq.q1': 'Wird mein Baby weinen?',
    'faq.a1':
      'Sehr wahrscheinlich nicht. Ich werde alles Mögliche tun, um das zu vermeiden, auch wenn es bedeutet, langsamer vorzugehen. Mein Plan für Kinderschlaf passt sich an, wenn es Tränen gibt, und ist zutiefst respektvoll. Wir folgen immer dem Rhythmus Ihres Babys und priorisieren sein Wohlbefinden.',
    'faq.q2': 'Ist der Plan mit Stillen und Co-Sleeping kompatibel?',
    'faq.a2':
      'Ja, vollständig. Der Schlafplan passt sich Ihren Wünschen und Bedürfnissen an. Ich befürworte bindungsorientierte Erziehung und respektiere das Stillen und Co-Sleeping. Das Wesentliche ist, gemeinsam den besten Weg zu finden, damit Ihr Baby gut schläft und sich sicher fühlt.',
    'faq.q3': 'Muss ich zuhause bleiben und Reisen vermeiden?',
    'faq.a3':
      'Während der vier Wochen des Schlafplans empfehle ich, die Routine vorrangig zu behandeln und den Schlafplatz Ihres Babys nicht zu verändern. Wir führen wichtige Veränderungen in die Schlafenszeit-Gewohnheiten Ihres Babys ein, und es ist nicht ratsam, gleichzeitig andere große Veränderungen hinzuzufügen. Ruhe und Routine werden in diesem Prozess der Schlüssel sein.',
    'faq.q4': 'Muss ich für immer strikte Zeitpläne einhalten?',
    'faq.a4':
      'Während des Plans ist es wichtig, die Zeitpläne so genau wie möglich einzuhalten, um Überermüdung zu vermeiden, die die Anpassung an neue Gewohnheiten erschwert. Sobald Ihr Baby diese erworben hat, können Sie flexibler sein und Ausnahmen machen. Tatsächlich passen sich Kinder mit guten Schlafgewohnheiten besser an Zeitplanänderungen an.',
    'faq.q5': 'Wie lange dauert es, bis Ergebnisse sichtbar sind?',
    'faq.a5':
      'Das hängt von jedem Baby ab, aber im Allgemeinen bemerkt man die ersten Ergebnisse nach etwa zwei Wochen und es wird sich weiterhin während einiger Wochen verbessern. Da der Plan respektvoll ist, folgen wir immer dem Rhythmus Ihres Babys, daher können die Fortschritte manchmal länger dauern. Das Wichtigste ist, konsistent zu sein und dem Prozess zu vertrauen, um seinen Schlaf zu verbessern.',
    'faq.q6':
      'Was passiert, wenn etwas nicht funktioniert oder Sie sich nicht wohlfühlen?',
    'faq.a6':
      'Das Wichtigste in diesem Prozess ist die Kommunikation mit mir. Wenn sich etwas nicht richtig anfühlt oder nicht funktioniert, ist es nicht das Richtige. Ich brauche Ihre Offenheit und möchte wissen, wie Sie sich fühlen, um den Plan bei Bedarf anzupassen. Zusammen finden wir den Weg, der am besten zu Ihrer Familie und zum Schlaf Ihres Babys passt.',

    // Testimonials
    'testimonials.title':
      'So haben einige Familien die Erfahrung mit mir gemacht…',

    // CTA Final
    'cta.final': 'Sollen wir einen kostenlosen Videoanruf vereinbaren?',

    // Footer
    'footer.tagline':
      'Ich begleite Familien dabei, den Schlaf ihrer Babys mit einem respektvollen, persönlichen und personalisierten Ansatz zu verbessern, um die Mutterschaft mit mehr Ruhe und Vertrauen zu leben.',
    'footer.follow': 'Folgen Sie mir',
    'footer.info': 'Information',
    'footer.nav': 'Navigation',
    'footer.connect': 'Verbinden Sie sich mit mir',
    'footer.connect_desc':
      'Lassen Sie uns ein Gespräch über die Verbesserung des Schlafes Ihres Babys führen.',
    'footer.schedule': 'Anruf buchen',

    // About Page (Über mich)
    'about.hero.title': 'Ich bin Laura Montoy',
    'about.hero.p1':
      'Vor mehr als einem Jahrzehnt bin ich nach Berlin gezogen, wo meine Familie geboren wurde und eine neue Version von mir.',
    'about.hero.p2':
      'Von Ausbildung bin ich Biotechnologe und Oberstufenlehrerin. Ich habe die letzten acht Jahre Biologie und Spanisch unterrichtet und meine Liebe zur Wissenschaft war immer in meiner Art, die Welt zu sehen und zu verstehen präsent, aber es war die Mutterschaft, die mich wirklich transformierte.',
    'about.how.title': 'Wie alles begann',
    'about.how.p1':
      'Als mein erstes Kind geboren wurde, entdeckte ich etwas Unerwartetes: eine absolute Faszination für Kinderschlaf. Ich las, forschte und bildete mich weiter, um es nachts besser zu begleiten und uns beiden zu helfen, besser zu schlafen.',
    'about.how.p2':
      'Mit der Ankunft meiner zweiten Tochter ergaben sich neue Herausforderungen. Ich beschloss, mich nach zwei Monaten als Kinderschlafratsgeberin zu zertifizieren. Es war ein intensiver Prozess aus Studium, Praxis und Engagement, auf den ich sehr stolz bin.',
    'about.how.p3':
      'Ich habe viele Erfahrungen gemacht: natürliche Geburt und Kaiserschnitt, ausschließlich Stillen und Formel, ein verschlafenes Baby und eines, das nicht so sehr schläft. All das lehrte mich, dass es nicht nur eine Art zu erziehen oder zu schlafen gibt.',
    'about.work.title': 'Wie ich arbeite',
    'about.work.p1':
      'Heute kombiniere ich meine zwei Leidenschaften: Ich unterrichte weiterhin Teilzeit und widme den Rest meiner Energie der Begleitung von Familien als Schlafberaterin.',
    'about.work.p2':
      'Ich arbeite mit einem respektvollen Ansatz, der auf Wissenschaft basiert und auf jede Familie abgestimmt ist. Mit oder ohne Co-Sleeping, Stillen oder Flasche, im gleichen Zimmer oder in separaten Betten: alles ist gültig. Ich schaffe echte und nachhaltige Lösungen.',
    'about.work.p3':
      'Sie zu begleiten ist nicht nur ein Job, es ist meine Berufung. Ich bin hier, um Ihnen zu helfen, den Schlaf wieder Teil Ihres Lebens zu machen, denn gut schlafen sollte kein Luxus sein.',
    'about.cta.title': 'Buchen Sie Ihre kostenloses Termin',
    'about.cta.p':
      'Lassen Sie uns über Ihre Bedürfnisse sprechen und wie ich Sie auf dem Weg zu besserem Schlaf begleiten kann',
    'about.cta.button': 'Lassen Sie uns kennenlernen!',

    // Services Page (Meine Dienstleistungen)
    'services.hero.title': 'Meine Dienstleistungen',
    'services.hero.subtitle':
      'Wählen Sie den Plan, der am besten zu Ihrer Situation passt',
    'services.discount.title': '10% Rabatt',
    'services.discount.p1':
      'Wenn Sie bereits mit mir gearbeitet haben, erhalten Sie 10% Rabatt auf alle zukünftigen Dienstleistungen!',
    'services.discount.p2':
      'Ich schätze Ihr Vertrauen und möchte Sie in jeder neuen Phase mit dem gleichen Engagement und der gleichen Nähe begleiten.',
    'services.cta.title': 'Buchen Sie Ihren kostenlosen Termin',
    'services.cta.p':
      'Lassen Sie uns über Ihre Bedürfnisse sprechen und wie ich Sie auf dem Weg zu besserem Schlaf begleiten kann',
    'services.cta.button': 'Lassen Sie uns kennenlernen!',
    'services.faq.title': 'Häufig gestellte Fragen',
    'services.faq.q1': 'Wie alt sind die Babys?',
    'services.faq.a1':
      'Ich arbeite mit Familien, die Babys von Neugeborenen bis 4 Jahren haben. Jedes Alter hat seine Besonderheiten und ich passe den Plan an die spezifischen Bedürfnisse Ihres Babys an.',
    'services.faq.q2': 'Was ist, wenn ich keine Ergebnisse sehe?',
    'services.faq.a2':
      'Schlafveränderungen brauchen Zeit und Geduld. Während unserer Zusammenarbeit werden wir Anpassungen vornehmen, um sicherzustellen, dass der Plan für Ihre Familie funktioniert. Mein Ziel ist, dass Sie echte Unterstützung im Prozess spüren.',
    'services.faq.q3': 'Kann ich meinen Plan während der Begleitung ändern?',
    'services.faq.a3':
      'Natürlich. Wenn Sie jederzeit mehr oder weniger Unterstützung brauchen, können wir den Plan nach Ihren Bedürfnissen anpassen. Ihr Komfort und Vertrauen ist das Wichtigste.',
    'services.faq.q4': 'Was genau ist in der WhatsApp-Verfolgung enthalten?',
    'services.faq.a4':
      'Ich überprüfe Ihr tägliches Schlafprotokoll, beantworte Ihre Fragen, gibt Ihnen Orientierung über Änderungen im Plan, wenn nötig, und achte auf Ihre Bedenken. Es ist kein kontinuierlicher Chat, sondern strukturierte Begleitung in Ihrem Tempo.',

    // Service Plans (Dienste)
    'service.plan1.title': 'Schlafplan mit Begleitung',
    'service.plan1.duration': '4 Wochen',
    'service.plan1.desc1':
      'Dieser Plan ist für Sie, wenn Sie spüren, dass Sie echte Unterstützung auf dem Weg zum Kinderschlaf benötigen. Vier Wochen lang werde ich an Ihrer Seite sein, Fragen beantworten, Unsicherheiten beruhigen und den Schlafplan anpassen, je nachdem was Ihr Baby... und Sie brauchen.',
    'service.plan1.desc2':
      'Jeden Tag überprüfe ich die Schlafregister und achte auf jeden kleinen Fortschritt oder jede Schwierigkeit, denn manchmal brauchen wir nur zu wissen, dass wir nicht allein sind.',
    'service.plan1.f1':
      'Schlafanalyse durch Anfangsfragebogen und Schlafprotokoll',
    'service.plan1.f2':
      'Erstellung eines spezifischen Schlafplans für Ihr Baby',
    'service.plan1.f3': '3 Videoanrufe à 40 Min',
    'service.plan1.f4': 'Tägliche Begleitung per WhatsApp',
    'service.plan1.f5': 'Schriftliche Abschlussempfehlungen',
    'service.plan1.button': 'Verfügbarkeit anfordern',

    'service.plan2.title': 'Planverlängerung',
    'service.plan2.duration': '4 weitere Wochen',
    'service.plan2.desc1':
      'Wenn Sie nach Abschluss Ihres Schlafplans spüren, dass noch mehr Arbeit zu tun ist, können Sie die Begleitung um vier weitere Wochen verlängern, mit einem speziellen Rabatt für die vorherige Zusammenarbeit.',
    'service.plan2.desc2':
      'Wir werden den Schlaf Ihres Babys weiter verfeinern mit täglicher Begleitung und zwei zusätzlichen Videoanrufen, ausreichend um sicher und selbstbewusst voranzukommen. Dies ist eine Option für diejenigen, die weitere Zeit lang Unterstützung möchten.',
    'service.plan2.f1': 'Anpassungen und Verfeinerung des Schlafplans',
    'service.plan2.f2': '2 Videoanrufe à 40 Min',
    'service.plan2.f3': 'Tägliche Begleitung per WhatsApp',
    'service.plan2.f4': 'Schriftliche Abschlussempfehlungen',
    'service.plan2.button': 'Verfügbarkeit anfordern',

    'service.plan3.title': 'Einzelsitzung',
    'service.plan3.duration': '45 Minuten',
    'service.plan3.desc1':
      'Diese Sitzung ist für Familien gedacht, die bereits an dem Schlaf ihres Babys gearbeitet haben – mit mir oder auf eigene Faust – und auf eine konkrete Schwierigkeit stoßen: eine Regression, eine Routineänderung oder eine neue Phase.',
    'service.plan3.desc2':
      'Während des Videoanrufs werden wir die Situation gemeinsam analysieren und ich gebe Ihnen einen klaren und praktischen Leitfaden, um das Gleichgewicht sicher wiederzugewinnen.',
    'service.plan3.f1': 'Vorheriger Fragebogen',
    'service.plan3.f2': 'Videoanruf à 45 Min',
    'service.plan3.f3': 'Schriftliche Abschlussempfehlungen',
    'service.plan3.button': 'Sitzung buchen',

    // Footer Links
    'links.legal.legal': 'Impressum',
    'links.legal.terms': 'Allgemeine Geschäftsbedingungen',
    'links.legal.privacy': 'Datenschutzerklärung',
    'links.nav.about': 'Über mich',
    'links.nav.services': 'Meine Dienstleistungen',
    'links.nav.contact': 'Kontakt',
  },
};

const isLanguage = (value: string | null): value is Language =>
  value === 'es' || value === 'de';

const getLanguageSnapshot = (): Language => {
  if (typeof window === 'undefined') {
    return DEFAULT_LANGUAGE;
  }

  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return isLanguage(saved) ? saved : DEFAULT_LANGUAGE;
};

const subscribeToLanguage = (onStoreChange: () => void) => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handleStorageChange = (event: StorageEvent) => {
    if (
      event.storageArea === window.localStorage &&
      event.key === LANGUAGE_STORAGE_KEY
    ) {
      onStoreChange();
    }
  };

  window.addEventListener('storage', handleStorageChange);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener('storage', handleStorageChange);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);
  };
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(
    subscribeToLanguage,
    getLanguageSnapshot,
    () => DEFAULT_LANGUAGE,
  );

  const setLanguage = (lang: Language) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  };

  const t = (key: string): string => {
    return (
      translations[language][key as keyof (typeof translations)['es']] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
