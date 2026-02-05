import { Search, BookOpen, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AsignaturasPage() {
  const carreras = [
    {
      name: 'Ingeniería en Sistemas',
      asignaturas: [
        'Programación I', 'Algoritmos', 'Bases de Datos', 'Desarrollo Web',
        'Seguridad Informática', 'Machine Learning', 'Cloud Computing'
      ]
    },
    {
      name: 'Ingeniería Civil',
      asignaturas: [
        'Cálculo Estructural', 'Resistencia de Materiales', 'Topografía',
        'Hidráulica', 'Geotecnia', 'Proyectos', 'Supervisión de Obras'
      ]
    },
    {
      name: 'Administración de Empresas',
      asignaturas: [
        'Contabilidad General', 'Finanzas', 'Gestión Recursos Humanos',
        'Marketing', 'Economía', 'Emprendimiento', 'Estadística Empresarial'
      ]
    },
    {
      name: 'Medicina',
      asignaturas: [
        'Anatomía', 'Fisiología', 'Patología', 'Farmacología',
        'Diagnóstico', 'Quirúrgica', 'Pediatría', 'Medicina General'
      ]
    },
    {
      name: 'Psicología',
      asignaturas: [
        'Psicología General', 'Psicología Clínica', 'Neuropsicología',
        'Psicología Social', 'Investigación', 'Terapia Cognitiva'
      ]
    },
    {
      name: 'Educación',
      asignaturas: [
        'Didáctica', 'Evaluación Educativa', 'Desarrollo Infantil',
        'Tecnología Educativa', 'Currículo', 'Gestión Educativa'
      ]
    },
    {
      name: 'Derecho',
      asignaturas: [
        'Derecho Constitucional', 'Derecho Penal', 'Derecho Civil',
        'Derecho Laboral', 'Derecho Internacional', 'Procedimiento'
      ]
    },
    {
      name: 'Biología',
      asignaturas: [
        'Biología Molecular', 'Ecología', 'Genética', 'Evolución',
        'Microbiología', 'Biotecnología', 'Bioquímica'
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-blue-900 mb-2">Asignaturas Universitarias</h1>
          <p className="text-gray-600">Catálogo completo de asignaturas organizadas por carrera profesional</p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Busca asignaturas, carreras o temas..."
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-base"
            />
          </div>
        </div>

        {/* Carreras Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {carreras.map((carrera, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-4">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  {carrera.name}
                </h2>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                  {carrera.asignaturas.map((asignatura, aIdx) => (
                    <div
                      key={aIdx}
                      className="p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors cursor-pointer group"
                    >
                      <p className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors text-sm">
                        {asignatura}
                      </p>
                    </div>
                  ))}
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Ver Recursos de {carrera.name.split(' ').slice(0, 2).join(' ')}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
              <p className="text-gray-700">Carreras Profesionales</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-700">Asignaturas Disponibles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-700">Recursos Verificados</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-gray-600 mb-6">
            Contáctanos y te ayudaremos a encontrar los recursos que necesitas para tu carrera.
          </p>
          <Button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg">
            Solicitar Asignatura
          </Button>
        </div>
      </div>
    </div>
  );
}
