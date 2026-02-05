import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ContactoPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Correo Electrónico',
      value: 'contacto@apruebaloya.com',
      description: 'Respuesta en 24 horas',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+34 123 456 789',
      description: 'Lunes a Viernes, 9:00 - 18:00',
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Madrid, España',
      description: 'Oficina de atención al cliente',
    },
    {
      icon: Clock,
      title: 'Horario de Atención',
      value: 'Lun - Vie: 9:00 - 18:00',
      description: 'Sáb - Dom: Cerrado',
    },
  ];

  const faqs = [
    {
      question: '¿Cuál es el costo de la suscripción?',
      answer: 'Ofrecemos planes flexibles con acceso a todos los recursos. Contáctanos para conocer los precios especiales para estudiantes y grupos.',
    },
    {
      question: '¿Puedo cancelar mi suscripción en cualquier momento?',
      answer: 'Sí, puedes cancelar tu suscripción sin penalización en cualquier momento desde tu panel de control.',
    },
    {
      question: '¿Ofrecen soporte personalizado?',
      answer: 'Sí, nuestro equipo ofrece soporte 24/7 por correo, chat y teléfono. Premium members tienen acceso a asesoría personalizada.',
    },
    {
      question: '¿Los recursos incluyen certificados?',
      answer: 'Sí, al completar cualquier curso recibirás un certificado verificable que puedes compartir en tu CV.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">Contacta con Nosotros</h1>
          <p className="text-xl text-gray-600">
            ¿Preguntas sobre ApruébaLo YA!? Nuestro equipo está aquí para ayudarte
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, idx) => {
            const Icon = method.icon;
            return (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <Icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-blue-600 font-semibold mb-2">{method.value}</p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </div>
            );
          })}
        </div>

        {/* Contact Form and Google Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Direct Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo *</label>
                <Input
                  type="text"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Correo Electrónico *</label>
                <Input
                  type="email"
                  placeholder="tu@email.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                <Input
                  type="tel"
                  placeholder="+34 123 456 789"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Asunto *</label>
                <Input
                  type="text"
                  placeholder="¿Cuál es tu consulta?"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
                <textarea
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  rows={5}
                  placeholder="Cuéntanos tu pregunta o consulta..."
                  required
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 py-3 text-base">
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </div>

          {/* Info Section */}
          <div className="space-y-8">
            {/* Google Form Embed Info */}
            <div className="bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Formulario de Contacto</h2>
              <p className="text-gray-600 mb-6">
                También puedes llenar nuestro formulario de Google Forms para consultas generales. La información se procesará en menos de 24 horas.
              </p>
              <div className="bg-blue-50 rounded-lg p-4 mb-6 border-l-4 border-blue-600">
                <p className="text-sm text-gray-700">
                  <strong>Nota:</strong> Reemplaza la URL del formulario con tu formulario de Google Forms actual para que los usuarios puedan responder directamente.
                </p>
              </div>
              <Button className="w-full bg-indigo-600 hover:bg-indigo-700 py-3">
                Abrir Formulario de Google
              </Button>
            </div>

            {/* Service Info */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Nuestros Servicios</h3>
              <ul className="space-y-3 text-gray-700">
                <li>✓ Consultas generales y soporte</li>
                <li>✓ Información sobre suscripciones</li>
                <li>✓ Asesoría académica personalizada</li>
                <li>✓ Solicitudes de recursos especiales</li>
                <li>✓ Reportes de problemas técnicos</li>
                <li>✓ Colaboraciones y asociaciones</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">Preguntas Frecuentes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 border-l-4 border-blue-600">
                <h3 className="font-bold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Comienza Hoy</h2>
          <p className="text-xl mb-8 text-blue-100">
            ¿Listo para transformar tu vida académica? Únete a ApruébaLo YA!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg font-bold">
              Registrarse Ahora
            </Button>
            <Button variant="outline" className="px-8 py-3 text-lg font-bold border-white text-white hover:bg-white/10 bg-transparent">
              Más Información
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
