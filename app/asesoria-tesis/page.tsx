import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function TesisPage() {

  return (
    <div className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="pt-16 sm:pt-20 pb-10 sm:pb-16 bg-gradient-to-b from-[#F5F0EB] to-[#EDE7E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground">
              Libros de <span className="text-primary">Tesis</span>
            </h1>
            <div className="mt-3 w-20 h-1 bg-primary rounded-full mx-auto" />
          </div>

          {/* Image */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-border">
            <Image
              src="/img/asesoria%20de%20%20tesis.jpg"
              alt="Libros de Asesoría de Tesis"
              width={900}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Description */}
          <div className="mt-8 sm:mt-14 space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
            <p className="text-lg font-bold text-foreground">Comparto esta carpeta y mucho más</p>
            <p>
              Estos son algunos de los libros disponibles para asesoría de tesis, publicación de artículos, metodología de la investigación y más.
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Cómo Elaborar y Asesorar Una Investigación de Tesis — Carlos Muñoz Razo, 2da Edición</li>
              <li>Edición de Textos Científicos con LATEX — Alexander Borbón A., Walter Mora F., 2da Edición</li>
              <li>Fundamentos de Metodología de la Investigación Científica</li>
              <li>Metodología de la Investigación — Roberto Hernández, 3ra Edición</li>
              <li>Referencias Estilo Vancouver</li>
            </ul>
          </div>

          <div className="mt-12 text-center">
            <Link href="/informacion">
              <Button className="px-10 py-5 text-lg font-bold rounded-xl bg-primary hover:bg-orange-600 text-white shadow-lg hover:shadow-xl transition-all">
                Más información
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
