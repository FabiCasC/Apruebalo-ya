'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, Filter, BookOpen, X } from 'lucide-react';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

// Estructura: Psicología y Medicina en pestañas separadas
const MENU_CURSOS = [
  { titulo: 'Biología', submenus: ['Biología Celular', 'Botánica', 'Ecología', 'Genética', 'Inmunología', 'Geología'] },
  { titulo: 'Biotecnología', submenus: null },
  { titulo: 'Ciencias de Materiales', submenus: null },
  { titulo: 'Computación', submenus: ['Desarrollo de Videojuegos', 'El ABC de la PC', 'Lenguaje de Programación', 'MATLAB', 'Ofimática', 'Robótica'] },
  { titulo: 'Economía y Finanzas', submenus: null },
  { titulo: 'Electrónica', submenus: ['Análisis y Diseño de Circuitos', 'Comunicaciones', 'Dispositivos'] },
  { titulo: 'Estadística', submenus: ['Estadística Descriptiva', 'Estadística Inferencial'] },
  { titulo: 'Física', submenus: ['Astronomía', 'Electricidad y Electromagnetismo', 'Física Aplicada', 'Física General', 'Física Matemática', 'Mecánica Cuántica', 'Óptica', 'Termodinámica', 'Transferencia de Calor', 'Vibraciones y Ondas'] },
  { titulo: 'Idiomas', submenus: ['Inglés', 'Alemán', 'Chino', 'Francés', 'Italiano', 'Portugués', 'Ruso', 'Árabe', 'Japonés'] },
  { titulo: 'Matemáticas', submenus: ['Aritmética', 'Trigonometría', 'Análisis Matemático de Espinoza', 'Análisis Numérico', 'Cálculo', 'Matemática Administrativa', 'Matemática Económica', 'Matemática Avanzada', 'Matemática Básica', 'Matemática Discreta'] },
  { titulo: 'Mecánica', submenus: ['Biomecánica', 'Dinámica Vectorial', 'Diseño de Máquinas', 'Estática', 'Instrumentación Industrial', 'Máquinas Térmicas', 'Mecánica de Fluidos', 'Mecánica de Sólidos', 'Vibraciones Mecánicas'] },
  { titulo: 'Psicología', submenus: null },
  { titulo: 'Medicina', submenus: null },
  { titulo: 'Química', submenus: ['Bioquímica', 'Electroquímica', 'Fitoquímica', 'Ingeniería de las Reacciones Químicas', 'Química Ambiental', 'Química Analítica', 'Química Cuántica', 'Química General', 'Química Inorgánica', 'Química Orgánica'] },
];

// Aplanar a lista de cursos
const CURSOS_PLANOS = MENU_CURSOS.flatMap((item) =>
  item.submenus
    ? item.submenus.map((sub) => ({ nombre: sub, categoria: item.titulo }))
    : [{ nombre: item.titulo, categoria: item.titulo }]
);

const CATEGORIAS = MENU_CURSOS.map((c) => c.titulo);

// Imagen de libro por curso. Añade rutas reales aquí (ej: 'Biología-Biología Celular': '/img/libros/...')
const IMAGENES_LIBROS: Record<string, string[]> = {
  // Ejemplo: 'Biología-Biología Celular': ['/img/libros/biologia/portada.jpg'],
};

const COLORES_CATEGORIA: Record<string, string> = {
  Biología: 'from-emerald-500/20 to-teal-500/10 border-emerald-500/30',
  Biotecnología: 'from-violet-500/20 to-purple-500/10 border-violet-500/30',
  'Ciencias de Materiales': 'from-slate-500/20 to-zinc-500/10 border-slate-500/30',
  Computación: 'from-blue-500/20 to-cyan-500/10 border-blue-500/30',
  'Economía y Finanzas': 'from-amber-500/20 to-yellow-500/10 border-amber-500/30',
  Electrónica: 'from-indigo-500/20 to-blue-500/10 border-indigo-500/30',
  Estadística: 'from-rose-500/20 to-pink-500/10 border-rose-500/30',
  Física: 'from-orange-500/20 to-amber-500/10 border-orange-500/30',
  Idiomas: 'from-cyan-500/20 to-teal-500/10 border-cyan-500/30',
  Matemáticas: 'from-primary/20 to-primary/5 border-primary/30',
  Mecánica: 'from-stone-500/20 to-neutral-500/10 border-stone-500/30',
  Psicología: 'from-fuchsia-500/20 to-pink-500/10 border-fuchsia-500/30',
  Medicina: 'from-red-500/20 to-rose-500/10 border-red-500/30',
  Química: 'from-lime-500/20 to-green-500/10 border-lime-500/30',
};

// Placeholder para libros. Añade imágenes reales en IMAGENES_LIBROS o en public/img/libros/
const PLACEHOLDER_LIBRO = '/img/asesoria%20de%20%20tesis.jpg';

function getImagenCurso(cursoKey: string): string {
  const custom = IMAGENES_LIBROS[cursoKey];
  if (custom && custom.length > 0) return custom[0];
  return PLACEHOLDER_LIBRO;
}

type CursoSeleccionado = { nombre: string; categoria: string } | null;

export default function CursosPage() {
  const [filtroCategoria, setFiltroCategoria] = useState<string | null>(null);
  const [busqueda, setBusqueda] = useState('');
  const [cursoSeleccionado, setCursoSeleccionado] = useState<CursoSeleccionado>(null);

  const cursosFiltrados = useMemo(() => {
    return CURSOS_PLANOS.filter((curso) => {
      const matchCategoria = !filtroCategoria || curso.categoria === filtroCategoria;
      const matchBusqueda =
        !busqueda.trim() ||
        curso.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
        curso.categoria.toLowerCase().includes(busqueda.toLowerCase());
      return matchCategoria && matchBusqueda;
    });
  }, [filtroCategoria, busqueda]);

  const toggleCategoria = (cat: string) => {
    setFiltroCategoria((prev) => (prev === cat ? null : cat));
  };

  const imagenModal = cursoSeleccionado
    ? getImagenCurso(`${cursoSeleccionado.categoria}-${cursoSeleccionado.nombre}`)
    : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Banner */}
      <section className="relative h-44 sm:h-52 lg:h-72 overflow-hidden">
        <Image
          src="/img/banner.jpg"
          alt="Cursos"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
          <div className="w-full pb-6 sm:pb-8 pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white drop-shadow-lg">
              Cursos
            </h1>
            <p className="mt-2 text-white/95 text-lg max-w-2xl">
              Explora nuestro catálogo y filtra por área de estudio
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Barra de búsqueda */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Buscar por nombre de curso o categoría..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-border bg-white shadow-sm focus:ring-2 focus:ring-primary focus:border-primary transition-all text-foreground placeholder:text-muted-foreground"
            />
          </div>

          {/* Filtros por categoría */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-primary" />
              <h3 className="font-bold text-foreground">Filtrar por área</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {CATEGORIAS.map((cat) => (
                <button
                  key={cat}
                  onClick={() => toggleCategoria(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    filtroCategoria === cat
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-white border border-border text-muted-foreground hover:border-primary/50 hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              ))}
              {filtroCategoria && (
                <button
                  onClick={() => setFiltroCategoria(null)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium bg-muted text-muted-foreground hover:bg-border transition-colors"
                >
                  <X className="w-4 h-4" />
                  Limpiar filtro
                </button>
              )}
            </div>
          </div>

          {/* Resultados */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-muted-foreground">
              <span className="font-bold text-foreground">{cursosFiltrados.length}</span> curso{cursosFiltrados.length !== 1 ? 's' : ''} encontrado{cursosFiltrados.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Grid de cards */}
          {cursosFiltrados.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {cursosFiltrados.map((curso, i) => (
                <button
                  key={`${curso.categoria}-${curso.nombre}-${i}`}
                  type="button"
                  onClick={() => setCursoSeleccionado(curso)}
                  className={`group rounded-2xl border-2 bg-gradient-to-br overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] text-left ${
                    COLORES_CATEGORIA[curso.categoria] || 'from-muted to-muted/50 border-border'
                  }`}
                >
                  <div className="p-5 h-full flex flex-col">
                    <div className="mb-3">
                      <span className="inline-block px-2.5 py-1 rounded-md bg-white/80 text-xs font-semibold text-foreground/80">
                        {curso.categoria}
                      </span>
                    </div>
                    <h3 className="font-bold text-foreground text-lg leading-tight flex-1">
                      {curso.nombre}
                    </h3>
                    <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:underline">
                      <BookOpen className="w-4 h-4" />
                      Ver libros
                    </span>
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-2xl border border-border">
              <Search className="w-16 h-16 mx-auto text-muted-foreground/30 mb-4" />
              <p className="text-lg font-medium text-foreground mb-1">No se encontraron cursos</p>
              <p className="text-muted-foreground text-sm">
                Prueba con otro filtro o término de búsqueda
              </p>
              <button
                onClick={() => {
                  setFiltroCategoria(null);
                  setBusqueda('');
                }}
                className="mt-4 px-6 py-2 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          )}

          <div className="mt-14 text-center">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
            >
              Contáctanos para más información
            </Link>
          </div>
        </div>
      </section>

      {/* Modal con imágenes de libros */}
      <Dialog open={!!cursoSeleccionado} onOpenChange={(open) => !open && setCursoSeleccionado(null)}>
        <DialogContent className="w-[95vw] sm:w-full max-w-4xl max-h-[90vh] overflow-y-auto p-4 sm:p-6">
          {cursoSeleccionado && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl font-black text-foreground pr-8">
                  {cursoSeleccionado.nombre}
                  <span className="block text-sm font-normal text-muted-foreground mt-1">
                    {cursoSeleccionado.categoria}
                  </span>
                </DialogTitle>
              </DialogHeader>
              <p className="text-muted-foreground text-sm mb-6">
                Libros que podrás encontrar en este curso:
              </p>
              <div className="relative aspect-[3/4] w-full max-w-xs sm:max-w-sm mx-auto rounded-lg overflow-hidden border border-border bg-muted mb-6 sm:mb-8">
                <Image
                  src={imagenModal!}
                  alt={`Libros - ${cursoSeleccionado.nombre}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 384px"
                />
              </div>
              <Link
                href="/contacto"
                className="flex items-center justify-center gap-2 w-full py-4 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 shadow-md hover:shadow-lg transition-all"
              >
                <BookOpen className="w-5 h-5" />
                Solicita acceso
              </Link>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
