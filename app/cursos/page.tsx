'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Filter, X, Star, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function CursosPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const subjects = [
    { id: 'mathematics', label: 'Matemáticas' },
    { id: 'physics', label: 'Física' },
    { id: 'chemistry', label: 'Química' },
    { id: 'biology', label: 'Biología' },
    { id: 'engineering', label: 'Ingeniería' },
    { id: 'economics', label: 'Economía' },
    { id: 'history', label: 'Historia' },
    { id: 'literature', label: 'Literatura' },
    { id: 'programming', label: 'Programación' },
  ];

  const courses = [
    { id: 1, title: 'Cálculo Integral Avanzado', subject: 'mathematics', rating: 4.9, students: 2340, image: '/resource-1.jpg', description: 'Domina el cálculo integral con ejemplos y simuladores' },
    { id: 2, title: 'Química Orgánica Paso a Paso', subject: 'chemistry', rating: 4.8, students: 1890, image: '/resource-2.jpg', description: 'Comprende las estructuras y reacciones orgánicas' },
    { id: 3, title: 'Termodinámica Explicada', subject: 'physics', rating: 4.9, students: 3120, image: '/resource-3.jpg', description: 'Leyes de la termodinámica con ejercicios interactivos' },
    { id: 4, title: 'Biología Molecular Interactiva', subject: 'biology', rating: 4.7, students: 2010, image: '/resource-1.jpg', description: 'Estructura del ADN y procesos celulares' },
    { id: 5, title: 'Economía Microeconómica', subject: 'economics', rating: 4.8, students: 1650, image: '/resource-2.jpg', description: 'Teoría económica y modelos de mercado' },
    { id: 6, title: 'Ingeniería Civil Básica', subject: 'engineering', rating: 4.6, students: 980, image: '/resource-3.jpg', description: 'Fundamentos de estructuras y proyecto' },
    { id: 7, title: 'Historia Universal Contemporánea', subject: 'history', rating: 4.5, students: 1200, image: '/resource-1.jpg', description: 'Eventos históricos del siglo XX y XXI' },
    { id: 8, title: 'Literatura Clásica y Moderna', subject: 'literature', rating: 4.7, students: 890, image: '/resource-2.jpg', description: 'Análisis de obras literarias destacadas' },
    { id: 9, title: 'Python para Científicos', subject: 'programming', rating: 4.9, students: 4500, image: '/resource-3.jpg', description: 'Programación aplicada a la ciencia e ingeniería' },
    { id: 10, title: 'Álgebra Lineal Completa', subject: 'mathematics', rating: 4.8, students: 3200, image: '/resource-1.jpg', description: 'Matrices, vectores y transformaciones lineales' },
    { id: 11, title: 'Física Cuántica Introducción', subject: 'physics', rating: 4.7, students: 1560, image: '/resource-2.jpg', description: 'Conceptos fundamentales de mecánica cuántica' },
    { id: 12, title: 'JavaScript Avanzado', subject: 'programming', rating: 4.8, students: 5000, image: '/resource-3.jpg', description: 'Desarrollo web moderno con JavaScript' },
  ];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilters.length === 0 || selectedFilters.includes(course.subject);
    return matchesSearch && matchesFilter;
  });

  const toggleFilter = (id: string) => {
    setSelectedFilters(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl font-bold text-foreground mb-4 leading-tight">Cursos Universitarios</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Accede a miles de cursos especializados de todas las áreas de estudio con recursos interactivos
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl border border-border p-8 mb-12">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-4 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Busca cursos por nombre, tema o palabra clave..."
              className="w-full pl-12 pr-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-primary" />
              <h3 className="font-semibold text-foreground">Filtrar por Asignatura</h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {subjects.map(subject => (
                <button
                  key={subject.id}
                  onClick={() => toggleFilter(subject.id)}
                  className={`px-4 py-2 rounded-lg transition-all font-medium text-sm ${
                    selectedFilters.includes(subject.id)
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-muted text-foreground hover:bg-border'
                  }`}
                >
                  {subject.label}
                </button>
              ))}
            </div>
            {selectedFilters.length > 0 && (
              <button
                onClick={() => setSelectedFilters([])}
                className="text-sm text-primary hover:text-secondary font-medium mt-4"
              >
                Limpiar todos los filtros
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 flex items-center justify-between">
          <p className="text-muted-foreground">
            Mostrando <span className="font-semibold text-foreground">{filteredCourses.length}</span> curso(s)
          </p>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map(course => (
              <div key={course.id} className="group overflow-hidden rounded-xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer">
                <div className="relative h-56 bg-muted overflow-hidden">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">{course.description}</p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-border mb-6 text-sm">
                    <div className="flex items-center gap-1 text-amber-500">
                      <Star className="w-4 h-4 fill-current" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="w-4 h-4" />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                  </div>

                  <Button className="w-full group-hover:shadow-lg transition-shadow">
                    Acceder al Curso
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <Search className="w-16 h-16 mx-auto text-muted opacity-20 mb-4" />
            <p className="text-xl text-muted-foreground">No encontramos cursos que coincidan con tu búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
}
