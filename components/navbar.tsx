'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 relative">
              <Image
                src="/logo.png"
                alt="ApruébaLo YA!"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-lg font-black text-foreground hidden sm:block">ApruébaLo YA!</h1>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/cursos"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/cursos') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Cursos
            </Link>
            <Link
              href="/asesoria-tesis"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/asesoria-tesis') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Asesoría de Tesis
            </Link>
            <Link
              href="/asignaturas"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/asignaturas') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Asignaturas
            </Link>
            <Link
              href="/contacto"
              className={`text-sm font-medium transition-colors duration-200 ${
                isActive('/contacto') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Contacto
            </Link>
          </div>

          <div className="flex gap-3 items-center">
            <Button variant="outline" size="sm" className="hidden sm:inline-flex bg-transparent">
              Iniciar Sesión
            </Button>
            <Button size="sm" className="bg-primary hover:bg-secondary text-white font-medium">
              Registrarse
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
