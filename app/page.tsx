import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, ArrowRight, Lightbulb, Zap, FileText } from 'lucide-react';

const PILARES = [
  {
    icon: BookOpen,
    titulo: 'Recursos Prácticos',
    descripcion: 'Material de estudio, ejercicios resueltos y herramientas para dominar cada asignatura.',
  },
  {
    icon: FileText,
    titulo: 'Guías Paso a Paso',
    descripcion: 'Tutoriales detallados y metodologías claras para lograr tus objetivos académicos.',
  },
  {
    icon: Zap,
    titulo: 'Consejos Rápidos',
    descripcion: 'Tips, resúmenes y estrategias para optimizar tu tiempo de estudio.',
  },
];

const DESTACADOS = [
  { titulo: 'Cursos Universitarios', descripcion: 'Matemáticas, física, química y más.', imagen: '/img/banner.jpg', href: '/cursos', icon: BookOpen },
  { titulo: 'Asesoría de Tesis', descripcion: 'Recursos y guías para tu investigación.', imagen: '/img/asesoria%20de%20%20tesis.jpg', href: '/asesoria-tesis', icon: FileText },
  { titulo: 'Simuladores Virtuales', descripcion: 'Herramientas interactivas de aprendizaje.', imagen: '/img/descartes.png', href: '/simuladores-virtuales', icon: Lightbulb },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. Hero - Imagen sin fondo + diseños alrededor */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-[#E8F5F7] via-background to-[#FFF3E0]">
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Texto */}
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-tight">
                Tu camino al éxito,{' '}
                <span className="text-primary font-script italic">simplificado</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Próximamente: Recursos, guías y todo lo que necesitas en un solo lugar.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/cursos">
                  <Button size="lg" className="px-8 py-6 text-base font-bold rounded-xl bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all">
                    Explorar contenido
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" size="lg" className="px-8 py-6 text-base font-bold rounded-xl">
                    Contáctanos
                  </Button>
                </Link>
              </div>
            </div>

            {/* Imagen + diseños alrededor */}
            <div className="order-1 lg:order-2 relative flex justify-center lg:justify-end min-h-[280px] sm:min-h-[350px] lg:min-h-[400px]">
              {/* Imagen central sin fondo (mix-blend-mode para eliminar blanco) */}
              <div className="relative z-10 w-64 sm:w-72 lg:w-80">
                <Image
                  src="/img/1.png"
                  alt="Recursos académicos"
                  width={320}
                  height={420}
                  className="w-full h-auto object-contain drop-shadow-lg [mix-blend-mode:multiply]"
                  priority
                  style={{ filter: 'contrast(1.05)' }}
                />
              </div>

              {/* Diseños decorativos alrededor */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-2xl bg-primary/20 rotate-12 hidden sm:block" />
              <div className="absolute top-8 -right-2 w-16 h-16 rounded-xl bg-secondary/20 -rotate-6 hidden sm:block" />
              <div className="absolute bottom-20 -left-4 w-14 h-14 rounded-2xl bg-primary/15 rotate-45 hidden sm:block" />
              <div className="absolute bottom-0 left-8 w-24 h-24 rounded-full bg-secondary/15 hidden sm:block" />
              <div className="absolute top-1/3 -left-8 w-12 h-12 rounded-lg bg-primary/25 rotate-12 hidden lg:block" />
              <div className="absolute top-1/4 right-1/4 w-10 h-10 rounded-full bg-secondary/25 hidden lg:block" />

              {/* Tarjetas con iconos de pilares */}
              <div className="absolute -top-2 -right-4 sm:right-8 lg:right-4 w-24 sm:w-28 p-3 rounded-xl bg-white shadow-lg border border-border/60 hidden sm:flex flex-col gap-1">
                <BookOpen className="w-6 h-6 text-primary" />
                <span className="text-xs font-bold text-foreground">Recursos</span>
              </div>
              <div className="absolute bottom-16 -left-2 sm:left-0 lg:-left-4 w-24 sm:w-28 p-3 rounded-xl bg-white shadow-lg border border-border/60 hidden sm:flex flex-col gap-1">
                <FileText className="w-6 h-6 text-secondary" />
                <span className="text-xs font-bold text-foreground">Guías</span>
              </div>
              <div className="absolute bottom-0 right-0 sm:right-8 lg:right-0 w-24 sm:w-28 p-3 rounded-xl bg-white shadow-lg border border-border/60 hidden sm:flex flex-col gap-1">
                <Zap className="w-6 h-6 text-primary" />
                <span className="text-xs font-bold text-foreground">Consejos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Tres Pilares */}
      <section className="py-12 sm:py-16 lg:py-28 bg-gradient-to-br from-[#E8F5F7] to-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-3 sm:mb-4">
              Qué encontrarás aquí
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Estructura visual de lo que vendrá próximamente
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
            {PILARES.map((pilar, idx) => {
              const Icon = pilar.icon;
              return (
                <div
                  key={idx}
                  className="text-center group"
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-white border-2 border-primary/20 flex items-center justify-center shadow-md group-hover:shadow-xl group-hover:border-primary/40 group-hover:scale-105 transition-all duration-300">
                    <Icon className="w-9 h-9 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {pilar.titulo}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                    {pilar.descripcion}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Galería Featured */}
      <section className="py-12 sm:py-16 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground mb-3 sm:mb-4">
              Contenido <span className="text-primary font-script italic">destacado</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Explora nuestras secciones principales
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {DESTACADOS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <Link key={idx} href={item.href} className="group block">
                  <div className="rounded-2xl overflow-hidden border-2 border-border bg-white hover:border-primary/50 hover:shadow-xl transition-all duration-300">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={item.imagen}
                        alt={item.titulo}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute inset-0 flex items-end p-6">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-primary/90 flex items-center justify-center">
                            <Icon className="w-6 h-6 text-white" />
                          </div>
                          <span className="text-white font-bold text-lg drop-shadow-md">
                            {item.titulo}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.descripcion}
                      </p>
                      <span className="inline-flex items-center gap-1.5 mt-3 text-primary font-bold text-sm group-hover:underline">
                        Explorar
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-white" />
          <div className="absolute bottom-0 left-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-white" />
        </div>
        <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 relative z-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6 leading-tight">
            ¿Listo para empezar?
          </h2>
          <p className="text-base sm:text-lg text-white/95 mb-8 sm:mb-10 max-w-xl mx-auto px-2">
            Contáctanos y descubre todo lo que tenemos para ti.
          </p>
          <Link href="/contacto">
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-base font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
              Contáctanos
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
