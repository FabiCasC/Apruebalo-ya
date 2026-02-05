import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { BookOpen, Users, Award, CheckCircle, ArrowRight, Lightbulb, Target, Zap } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: BookOpen,
      title: 'Cursos Universitarios',
      description: 'Acceso a miles de cursos especializados con simuladores interactivos y recursos multimedia.'
    },
    {
      icon: Target,
      title: 'Asesoría de Tesis',
      description: 'Guías completas y recursos para desarrollar tu tesis de grado con éxito.'
    },
    {
      icon: Lightbulb,
      title: 'Contenido Verificado',
      description: 'Todos nuestros recursos son revisados por expertos universitarios y académicos.'
    },
    {
      icon: Zap,
      title: 'Aprendizaje Interactivo',
      description: 'Simuladores, ejercicios prácticos y herramientas que hacen el aprendizaje efectivo.'
    },
    {
      icon: Award,
      title: 'Tasa de Éxito del 98%',
      description: 'Nuestros estudiantes aprueban sus exámenes y logran sus objetivos académicos.'
    },
    {
      icon: Users,
      title: 'Comunidad Activa',
      description: 'Conecta con otros estudiantes y accede a recursos compartidos por la comunidad.'
    },
  ];

  const stats = [
    { number: '15,000+', label: 'Recursos Disponibles' },
    { number: '50,000+', label: 'Estudiantes Activos' },
    { number: '98%', label: 'Tasa de Aprobación' },
    { number: '24/7', label: 'Disponibilidad' },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 lg:pt-32 lg:pb-40 overflow-hidden bg-gradient-to-br from-[#E8F5F7] to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block mb-8 px-4 py-2 bg-white border border-border rounded-full">
                <p className="text-sm font-bold text-foreground">Tu portal de éxito académico</p>
              </div>
              <h1 className="text-6xl lg:text-7xl font-black text-foreground mb-8 leading-tight tracking-tight">
                Aprueba tus <span className="text-primary font-script italic">Exámenes</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-lg">
                Plataforma integral con cursos, asesoría de tesis y más de 15,000 recursos. Tasa de éxito del 98%.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link href="/cursos">
                  <Button className="px-8 py-4 text-base font-bold rounded-xl bg-primary hover:bg-orange-600 shadow-lg hover:shadow-xl transition-all">
                    Explorar Cursos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/contacto">
                  <Button variant="outline" className="px-8 py-4 text-base font-bold rounded-xl border-2 bg-white hover:bg-gray-50">
                    Contactanos
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 lg:h-full min-h-96">
              <Image
                src="/hero-students.jpg"
                alt="Estudiantes aprendiendo"
                fill
                className="object-cover rounded-3xl shadow-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-5xl lg:text-6xl font-black text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground font-semibold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-[#FFF3E0] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
              Por qué <span className="text-secondary font-script italic text-6xl">elegir</span> ApruébaLo YA!
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todo lo que necesitas para triunfar en la universidad en un solo lugar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              const bgColors = [
                'bg-[#FFE8D6]',
                'bg-[#E8F5F7]',
                'bg-[#F0E8FF]',
                'bg-[#E8FFF5]',
                'bg-[#FFF9E8]',
                'bg-[#F5E8FF]'
              ];
              return (
                <div key={idx} className={`group p-8 rounded-2xl border border-border hover:shadow-xl transition-all duration-300 ${bgColors[idx % 6]}`}>
                  <div className="inline-flex p-3 rounded-lg bg-white mb-6">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-20 text-center leading-tight">
            Nuestros <span className="text-primary font-script italic text-5xl">Servicios</span> Principales
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Cursos Card */}
            <Link href="/cursos" className="group">
              <div className="h-full bg-white rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl">
                <div className="h-56 bg-gradient-to-br from-[#FFE8D6] to-[#FFF3E0] flex items-center justify-center overflow-hidden relative">
                  <BookOpen className="w-32 h-32 text-primary opacity-25 group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Cursos</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Accede a cursos universitarios de todas las áreas: matemáticas, física, química, ingeniería y más.
                  </p>
                  <Button className="w-full bg-primary hover:bg-orange-600 font-bold rounded-xl group-hover:shadow-lg transition-all">
                    Ver Cursos
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Tesis Card */}
            <Link href="/asesoria-tesis" className="group">
              <div className="h-full bg-white rounded-2xl overflow-hidden border-2 border-border hover:border-secondary transition-all duration-300 hover:shadow-2xl">
                <div className="h-56 bg-gradient-to-br from-[#E8F5F7] to-[#F0F9FA] flex items-center justify-center overflow-hidden relative">
                  <Target className="w-32 h-32 text-secondary opacity-25 group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Asesoría de Tesis</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Recursos completos para desarrollar tu tesis: guías, normas APA, ejemplos y asesoría especializada.
                  </p>
                  <Button className="w-full bg-secondary hover:bg-teal-600 font-bold rounded-xl text-white group-hover:shadow-lg transition-all">
                    Explorar Tesis
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Link>

            {/* Asignaturas Card */}
            <Link href="/asignaturas" className="group">
              <div className="h-full bg-white rounded-2xl overflow-hidden border-2 border-border hover:border-primary transition-all duration-300 hover:shadow-2xl">
                <div className="h-56 bg-gradient-to-br from-[#F0E8FF] to-[#F9F0FF] flex items-center justify-center overflow-hidden relative">
                  <Lightbulb className="w-32 h-32 text-primary opacity-25 group-hover:opacity-40 transition-opacity" />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-foreground mb-3">Asignaturas</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    Catálogo completo de asignaturas universitarias organizadas por carrera y nivel de dificultad.
                  </p>
                  <Button className="w-full bg-primary hover:bg-orange-600 font-bold rounded-xl group-hover:shadow-lg transition-all">
                    Ver Asignaturas
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-[#E8F5F7] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl lg:text-6xl font-black text-foreground mb-16 text-center leading-tight">
            Beneficios de Ser <span className="text-secondary font-script italic text-5xl">Miembro</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              'Acceso ilimitado a todos los cursos y recursos',
              'Simuladores interactivos y ejercicios prácticos',
              'Asesoría personalizada para tu tesis',
              'Contenido actualizado constantemente',
              'Comunidad de estudiantes activa',
              'Certificados de finalización',
              'Descuentos en recursos premium',
              'Soporte 24/7 por correo y chat',
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle className="w-6 h-6 text-primary font-bold" />
                </div>
                <p className="text-foreground text-lg font-semibold leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-white" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-white" />
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10">
          <h2 className="text-5xl lg:text-6xl font-black mb-6 leading-tight">Listo para <span className="text-yellow-300 font-script italic">Cambiar</span> tu Vida Académica</h2>
          <p className="text-xl text-white/95 mb-12 max-w-2xl mx-auto leading-relaxed font-semibold">
            Únete a miles de estudiantes que ya están transformando su vida académica con ApruébaLo YA!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all">
              Registrarse Ahora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Link href="/contacto">
              <Button className="px-8 py-4 text-lg font-bold rounded-xl bg-white/20 hover:bg-white/30 border-2 border-white hover:border-white transition-all">
                Más Información
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-blue-900 mb-12 text-center">Beneficios de Ser Miembro</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Acceso ilimitado a todos los cursos y recursos',
              'Simuladores interactivos y ejercicios prácticos',
              'Asesoría personalizada para tu tesis',
              'Contenido actualizado constantemente',
              'Comunidad de estudiantes activa',
              'Certificados de finalización',
              'Descuentos en recursos premium',
              'Soporte 24/7 por correo y chat',
            ].map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
