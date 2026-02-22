import Image from 'next/image';
import { CreditCard, Globe, Sparkles, BookOpen, FileCheck, Users } from 'lucide-react';
import { ConversorDivisas } from '@/components/conversor-divisas';

export default function InformacionPage() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header con imagen de fondo */}
      <section className="relative h-56 sm:h-64 lg:h-80 overflow-hidden">
        <Image
          src="/img/banner.jpg"
          alt="ApruébaLo YA - Información"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white drop-shadow-lg">
              Información
            </h1>
            <p className="mt-2 sm:mt-3 text-white/85 text-base sm:text-lg font-medium px-4">Todo lo que necesitas saber para acceder a nuestros recursos</p>
          </div>
        </div>
      </section>

      {/* Colaboración */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl lg:text-3xl font-black text-foreground">Colaboración</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-border/60 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Exámenes y Quiz</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Aquí se pueden realizar los exámenes quiz de las asignaturas de grado superior.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-border/60 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-teal-50 flex items-center justify-center mb-4">
                <FileCheck className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Acceso a Archivos</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Te doy el acceso a descargar, y también a las carpetas de archivos que requieras. Para ello deberás registrarte con el formulario de esta web y el grupo de WhatsApp.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-border/60 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Google Drive</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Comparto mis archivos de ciencia y otros por Google Drive. Tendrás acceso a una gran variedad de recursos educativos organizados por asignaturas y temas.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-7 shadow-sm border border-border/60 hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl bg-purple-50 flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Comunícate</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Experiencias o dedicación y persona natural por vía WhatsApp o correo electrónico.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-border" />
      </div>

      {/* Formulario Incrustado */}
      <section className="py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full mb-3">Registro</span>
            <h2 className="text-2xl lg:text-3xl font-black text-foreground">
              Formulario de Registro
            </h2>
            <p className="text-muted-foreground mt-2">Completa el formulario para acceder a los recursos</p>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-border/60 p-4 sm:p-8">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSdv-9XXgXZ9cdQhUgajyv6hsPwYLsQSR5TVgmMyv3EL7l7iZg/viewform?embedded=true"
              width="100%"
              height="500"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              className="rounded-xl"
            >
              Cargando…
            </iframe>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-border" />
      </div>

      {/* Opciones de Pago */}
      <section className="py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-bold rounded-full mb-3">Pagos</span>
            <h2 className="text-2xl lg:text-3xl font-black text-foreground">
              Opciones de Pago
            </h2>
            <p className="text-muted-foreground mt-2 max-w-lg mx-auto">
              Con los enlaces de pago la conversión de divisas será inmediata y no se te cobrará de más.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            {/* Culqi */}
            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-border/60 hover:shadow-lg hover:border-orange-200 transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-orange-50 flex items-center justify-center mx-auto mb-5">
                <CreditCard className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-black text-foreground mb-3">Culqi</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Cuando hagas clic aparecerá una ventana donde debes colocar el monto que deseas pagar en soles (S/.).
              </p>
              <a
                href="https://express.culqi.com/pago/48FA2D3C86"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold shadow-sm hover:shadow-md transition-all text-sm"
              >
                <CreditCard className="w-4 h-4" />
                Pagar con Culqi
              </a>
            </div>

            {/* PayPal - enlace pendiente */}
            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-border/60 hover:shadow-lg hover:border-blue-200 transition-all text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center mx-auto mb-5">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-black text-foreground mb-3">PayPal</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Paga de forma segura con tu cuenta PayPal desde cualquier país. El enlace es fácilmente ubicable.
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold shadow-sm hover:shadow-md transition-all text-sm"
              >
                <Globe className="w-4 h-4" />
                Pagar con PayPal
              </a>
            </div>

            {/* Conversor de divisas */}
            <div className="lg:col-span-1">
              <ConversorDivisas />
            </div>
          </div>

          <p className="text-sm text-muted-foreground text-center mt-10">
            Con cualquier método de pago, comunícate al WhatsApp para confirmar tu acceso.
          </p>
        </div>
      </section>
    </div>
  );
}
