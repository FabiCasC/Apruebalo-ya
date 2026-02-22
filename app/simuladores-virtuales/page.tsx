import Image from 'next/image';

const simuladores = [
  {
    title: 'Simulador Proyecto Convertir Canarias',
    shortDesc: 'El clima en las islas Canarias: la calima. Recursos educativos digitales.',
    image: '/img/canarias.png',
    link: 'https://www3.gobiernodecanarias.org/medusa/ecoescuela/recursosdigitales/2023/11/06/el-clima-en-las-islas-canarias-la-calima/',
  },
  {
    title: 'Construye tu propia molécula',
    shortDesc: 'Simulador de química para dibujar y visualizar moléculas en 2D y 3D.',
    image: '/img/molecula.png',
    link: 'https://biomodel.uah.es/en/DIY/JSME/draw.es.htm',
  },
  {
    title: 'Simuladores PhET',
    shortDesc: 'Simulaciones interactivas de física, química, matemáticas, biología y más.',
    image: '/img/phte.png',
    link: 'https://phet.colorado.edu/en/simulations/filter?type=html',
  },
  {
    title: 'Simulador Proyecto Descartes',
    shortDesc: 'Libros interactivos y materiales didácticos para la educación digital.',
    image: '/img/descartes.png',
    link: 'https://proyectodescartes.org/iCartesiLibri/index.htm',
  },
];

export default function SimuladoresVirtualesPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="pt-16 sm:pt-20 pb-10 sm:pb-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground uppercase">
              Simuladores virtuales
            </h1>
            <div className="mt-3 w-20 h-1 bg-primary rounded-full mx-auto" />
            <p className="mt-6 text-muted-foreground max-w-2xl mx-auto">
              Explora nuestros simuladores educativos y accede a recursos interactivos para ciencia, tecnología e investigación.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-8">
            {simuladores.map((sim) => (
              <a
                key={sim.title}
                href={sim.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block text-left bg-white rounded-2xl shadow-md border border-border overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all"
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={sim.image}
                    alt={sim.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-6">
                  <h2 className="font-black text-foreground text-base lg:text-lg mb-2 group-hover:text-primary transition-colors leading-tight">
                    {sim.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {sim.shortDesc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
