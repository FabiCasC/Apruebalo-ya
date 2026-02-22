import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-background to-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 relative">
                <Image
                  src="/img/logo.png"
                  alt="ApruébaLo YA!"
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-bold text-foreground text-lg">ApruébaLo YA!</h3>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tu plataforma integral para cursos, asesoría de tesis y éxito académico.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Navegación</h4>
            <ul className="space-y-3">
              <li><Link href="/cursos" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Cursos</Link></li>
              <li><Link href="/asesoria-tesis" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Asesoría de Tesis</Link></li>
              <li><Link href="/asignaturas-preuniversitarias" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Asignaturas Preuniversitarias</Link></li>
              <li><Link href="/contacto" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Contacto</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="w-4 h-4" />
                <a href="mailto:contacto@apruebaloya.com">contacto@apruebaloya.com</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="w-4 h-4" />
                <a href="tel:+34123456789">+34 123 456 789</a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Madrid, España</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all flex items-center justify-center text-muted-foreground">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all flex items-center justify-center text-muted-foreground">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all flex items-center justify-center text-muted-foreground">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            &copy; 2024 ApruébaLo YA! Todos los derechos reservados. Síguenos transformando la educación.
          </p>
        </div>
      </div>
    </footer>
  );
}
