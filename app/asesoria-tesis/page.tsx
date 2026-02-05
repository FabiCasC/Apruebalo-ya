'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Filter, Target, BookOpen, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

export default function TesisPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'Todas' },
    { id: 'investigacion', label: 'Investigación' },
    { id: 'metodologia', label: 'Metodología' },
    { id: 'normas', label: 'Normas y Formatos' },
    { id: 'defensa', label: 'Defensa y Presentación' },
    { id: 'ejemplos', label: 'Ejemplos Completos' },
  ];

  const resources = [
    {
      id: 1,
      title: 'Guía Completa de Investigación Científica',
      category: 'investigacion',
      description: 'Metodología paso a paso para investigación de calidad',
      image: '/resource-1.jpg',
      details: ['8 módulos', '40+ videos', 'Ejercicios prácticos'],
    },
    {
      id: 2,
      title: 'Normas APA 7ma Edición',
      category: 'normas',
      description: 'Guía actualizada de citación y referencias',
      image: '/resource-2.jpg',
      details: ['Citas', 'Referencias', 'Bibliografía'],
    },
    {
      id: 3,
      title: 'Diseño de Investigación',
      category: 'metodologia',
      description: 'Diseño experimental, cuantitativo y cualitativo',
      image: '/resource-3.jpg',
      details: ['Variables', 'Hipótesis', 'Población'],
    },
    {
      id: 4,
      title: 'Presentación y Defensa de Tesis',
      category: 'defensa',
      description: 'Consejos expertos para la defensa exitosa',
      image: '/resource-1.jpg',
      details: ['Diapositivas', 'Ensayo', 'Preguntas comunes'],
    },
    {
      id: 5,
      title: 'Tesis Ejemplo - Ingeniería',
      category: 'ejemplos',
      description: 'Tesis completa con todas las secciones',
      image: '/resource-2.jpg',
      details: ['Introducción', 'Métodos', 'Resultados', 'Conclusiones'],
    },
    {
      id: 6,
      title: 'Análisis Estadístico para Tesis',
      category: 'metodologia',
      description: 'Estadística aplicada a investigación',
      image: '/resource-3.jpg',
      details: ['Descriptiva', 'Inferencial', 'Software SPSS'],
    },
    {
      id: 7,
      title: 'Escritura Académica Profesional',
      category: 'investigacion',
      description: 'Técnicas de redacción clara y efectiva',
      image: '/resource-1.jpg',
      details: ['Párrafos', 'Coherencia', 'Estilo académico'],
    },
    {
      id: 8,
      title: 'Gestión de Referencias con Mendeley',
      category: 'normas',
      description: 'Herramienta para organizar tu bibliografía',
      image: '/resource-2.jpg',
      details: ['Importar', 'Organizar', 'Generar citas'],
    },
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || resource.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Asesoría de Tesis</h1>
          <p className="text-gray-600">Recursos completos para desarrollar tu tesis de grado exitosamente</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Busca recursos de tesis..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filter Buttons */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-3">
              <Filter className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold text-gray-900">Categorías</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFilter(cat.id)}
                  className={`px-4 py-2 rounded-lg transition-all font-medium ${
                    selectedFilter === cat.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <div className="flex gap-4">
            <Target className="w-6 h-6 text-blue-600 flex-shrink-0" />
            <div>
              <h3 className="font-bold text-blue-900 mb-2">Proceso de Tesis Paso a Paso</h3>
              <p className="text-blue-800">Tenemos recursos para cada etapa: desde la selección del tema hasta la defensa final. Sigue nuestro plan y asegura el éxito de tu tesis.</p>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 text-gray-600">
          Mostrando <span className="font-bold">{filteredResources.length}</span> recurso(s)
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map(resource => (
              <Card key={resource.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                <div className="relative h-48 bg-gray-200 overflow-hidden">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>

                  <div className="mb-4 space-y-1">
                    {resource.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-blue-600" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Acceder al Recurso
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <p className="text-xl text-gray-600">No encontramos recursos que coincidan con tu búsqueda</p>
          </div>
        )}

        {/* Benefits Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl p-8 shadow-lg">
          <div>
            <h3 className="text-2xl font-bold text-blue-900 mb-6">¿Por qué usar nuestros recursos?</h3>
            <ul className="space-y-3">
              {[
                'Diseñados por académicos expertos',
                'Adaptados a normativas internacionales',
                'Actualizados continuamente',
                'Ejemplos reales y funcionales',
                'Soporte personalizado disponible',
                'Acceso de por vida',
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-blue-50 rounded-xl p-6">
            <h4 className="font-bold text-blue-900 mb-4">Estimado de Tiempo</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-700">Etapa 1: Planificación</span>
                <span className="font-bold text-blue-600">2-3 semanas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Etapa 2: Investigación</span>
                <span className="font-bold text-blue-600">6-8 semanas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Etapa 3: Redacción</span>
                <span className="font-bold text-blue-600">4-6 semanas</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Etapa 4: Revisión</span>
                <span className="font-bold text-blue-600">2-3 semanas</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold">
                <span className="text-gray-900">Total Estimado</span>
                <span className="text-blue-600">4-5 meses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
