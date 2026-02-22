'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FolderOpen } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const editoriales = [
  { title: 'Editorial Cuzcano', desc: 'Libros de todas las áreas, ejercicios, teoría y exámenes de admisión.' },
  { title: 'Editorial Lumbreras', desc: 'Matemáticas, ciencias y letras con metodología clara y ejercicios resueltos.' },
];

const academias = [
  { title: 'Academia Cipuni', desc: 'Separatas, exámenes simulacro y recursos exclusivos para el ingreso.' },
  { title: 'Academia Aduni', desc: 'Material completo con enfoque en las principales universidades.' },
  { title: 'Academia Preunmsicos', desc: 'Preparación para UNMSM y otras universidades con material especializado.' },
  { title: 'Academia Trilce Anual', desc: 'Programa anual completo con seguimiento y evaluaciones.' },
];

export default function AsignaturasPreuniversitariasPage() {
  const [openSection, setOpenSection] = useState<'editoriales' | 'academias' | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <section className="pt-16 sm:pt-20 pb-10 sm:pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="inline-block px-4 sm:px-6 py-2 bg-foreground text-white font-black uppercase text-xs sm:text-sm mb-3 sm:mb-4 rounded-lg">
              Asignatura Preuniversitaria
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-foreground uppercase">
              Asignatura Preuniversitaria
            </h1>
            <div className="mt-3 w-20 h-1 bg-primary rounded-full mx-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Tarjeta EDITORIALES */}
            <button
              type="button"
              onClick={() => setOpenSection('editoriales')}
              className="group text-left bg-white rounded-2xl shadow-md border-2 border-border overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-[#FFF3E0]">
                <Image
                  src="/img/editorial.jpg"
                  alt="Editoriales"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FolderOpen className="w-16 h-16 text-white/90" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-2xl font-black text-white uppercase drop-shadow-lg">Editoriales</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm">
                  Buen día, les presento algunos libros de editoriales. Comparto...
                </p>
                <span className="inline-block mt-3 text-primary font-bold text-sm">Ver información →</span>
              </div>
            </button>

            {/* Tarjeta ACADEMIAS */}
            <button
              type="button"
              onClick={() => setOpenSection('academias')}
              className="group text-left bg-white rounded-2xl shadow-md border-2 border-border overflow-hidden hover:shadow-xl hover:border-primary/40 transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-[#FFF3E0]">
                <Image
                  src="/img/academia.jpg"
                  alt="Academias"
                  fill
                  className="object-cover opacity-80 group-hover:opacity-90 group-hover:scale-105 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <FolderOpen className="w-16 h-16 text-white/90" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-2xl font-black text-white uppercase drop-shadow-lg">Academias</span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground text-sm">
                  Buen día, les presento algunos libros de academias. Comparto...
                </p>
                <span className="inline-block mt-3 text-primary font-bold text-sm">Ver información →</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      <Dialog open={!!openSection} onOpenChange={(open) => !open && setOpenSection(null)}>
        <DialogContent className="w-[95vw] sm:w-full max-w-2xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
          {openSection === 'editoriales' && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-black uppercase text-foreground pr-8">
                  Editoriales
                </DialogTitle>
              </DialogHeader>
              <p className="text-muted-foreground mb-6">
                Buen día, les presento algunos libros de editoriales. Comparto esta carpeta con material de calidad para tu preparación preuniversitaria.
              </p>
              <div className="space-y-4">
                {editoriales.map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#FFF3E0] border border-primary/20">
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Para acceder al material, contáctanos por la página de contacto o WhatsApp.
              </p>
            </>
          )}
          {openSection === 'academias' && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-black uppercase text-foreground pr-8">
                  Academias
                </DialogTitle>
              </DialogHeader>
              <p className="text-muted-foreground mb-6">
                Buen día, les presento algunos libros de academias. Comparto esta carpeta con recursos de las principales academias preuniversitarias.
              </p>
              <div className="space-y-4">
                {academias.map((item, i) => (
                  <div key={i} className="p-4 rounded-xl bg-[#FFF3E0] border border-primary/20">
                    <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-sm text-muted-foreground">
                Para acceder al material, contáctanos por la página de contacto o WhatsApp.
              </p>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
