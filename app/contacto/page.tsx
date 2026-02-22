'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Banner + Información general */}
      <section className="relative h-64 sm:h-72 lg:h-96 overflow-hidden">
        <Image
          src="/img/banner.jpg"
          alt="Información general"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
          <div className="w-full pb-8 sm:pb-10 pt-20 sm:pt-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white drop-shadow-lg">
              Información general
            </h1>
            <p className="mt-3 text-white/95 text-lg max-w-2xl">
              Aprende a reforzar tus ideas de investigación con nosotros
            </p>
            {/* Datos de contacto */}
            <div className="mt-6 sm:mt-10 flex flex-wrap gap-4 sm:gap-8 text-white text-sm sm:text-base">
              <a href="tel:932757400" className="flex items-center gap-2 font-semibold hover:underline">
                <Phone className="w-5 h-5" />
                932 757 400
              </a>
              <a href="mailto:informes@apruebaloya.com" className="flex items-center gap-2 font-semibold hover:underline">
                <Mail className="w-5 h-5" />
                informes@apruebaloya.com
              </a>
              <span className="flex items-center gap-2 font-semibold">
                <MapPin className="w-5 h-5" />
                Av. Del Ejército 930
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Mensaje de bienvenida */}
      <section className="py-10 sm:py-16 bg-white border-y border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl sm:text-2xl font-black text-foreground mb-6 sm:mb-8">
            ¡Bienvenidos, exploradores del conocimiento! 👋
          </p>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Somos doctores apasionados por la <span className="font-bold text-foreground">CIENCIA</span>. A lo largo de nuestra trayectoria como docentes universitarios, hemos descubierto que el motor más poderoso del ser humano es la curiosidad.
            </p>
            <p>
              Hoy, queremos compartir con ustedes el fruto de años de dedicación y recopilación. Detrás de cada archivo que encontrarán aquí, incontables horas invertidas. Pregúntense: ¿Cuánto tiempo lleva realmente construir una biblioteca de información valiosa?
            </p>
            <h3 className="font-black text-foreground text-lg pt-2">
              El Valor del Tiempo y el Conocimiento Genuino
            </h3>
            <p>
              En nuestra experiencia, siempre deseamos tener a nuestro alcance tantos libros y recursos como los que hoy pongo a su disposición. Es un tesoro que forjé con disciplina.
            </p>
            <p>
              Mi intención es simple, pero profunda: compartir esta información con aquellos que verdaderamente valoren el tiempo, el esfuerzo y la dedicación que implica compilar un recurso de esta magnitud.
            </p>
            <p>
              Es cierto que la Inteligencia Artificial (IA) ha llegado para revolucionar el acceso a la información. Es una herramienta poderosa, ¡pero recordemos que eso es: una herramienta! El análisis crítico, la experiencia humana y la bibliografía original siguen siendo irremplazables.
            </p>
            <p>
              Si compartes mi entusiasmo por el aprendizaje genuino, el análisis profundo y la emoción pura que genera la Ciencia, estás en el lugar correcto.
            </p>
            <p className="text-foreground font-bold text-lg">
              ¡Empecemos a explorar este universo de conocimiento juntos! 💡
            </p>
          </div>
        </div>
      </section>

      {/* Formulario de contacto + descripción + Google Chat */}
      <section className="py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 sm:mb-8">
            <div className="w-14 h-14 relative">
              <Image src="/img/logo.png" alt="Apruebaloya" width={56} height={56} className="object-contain" />
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-foreground">Formulario de contacto</h2>
          </div>
          <div className="space-y-6 text-muted-foreground leading-relaxed mb-10">
            <p>
              Te ofrecemos asesoría personalizada para tu investigación. Nuestro equipo te acompaña con apoyo en metodología, redacción y revisión de tesis, además de recursos y materiales de estudio.
            </p>
            <p className="font-semibold text-foreground">
              Comunícate con nosotros de forma rápida y efectiva
            </p>
            <p>
              Obtén respuestas ágiles y un trato personalizado. Ya sea por formulario, correo o Google Chat, estamos para ayudarte.
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-md border border-border p-5 sm:p-8 mb-8 sm:mb-10">
            <h3 className="font-black text-foreground mb-6">Cómo iniciar un chat en Google Chat</h3>
            <ol className="space-y-4 list-decimal list-inside text-muted-foreground">
              <li>Abre Google Chat e inicia sesión con tu cuenta Gmail.</li>
              <li>En el menú lateral elige &quot;Nuevo chat&quot; o &quot;Nuevo tema&quot;.</li>
              <li>Escribe tu mensaje, por ejemplo: &quot;Hola, necesito información sobre...&quot; y envíalo.</li>
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
}
