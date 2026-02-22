'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const NAV_LINKS = [
  { href: '/asesoria-tesis', label: 'Asesoría de Tesis' },
  { href: '/cursos', label: 'Cursos' },
  { href: '/asignaturas-preuniversitarias', label: 'Asignaturas Preuniversitarias' },
  { href: '/simuladores-virtuales', label: 'Simuladores Virtuales' },
  { href: '/informacion', label: 'Información' },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 relative">
              <Image
                src="/img/logo.png"
                alt="ApruébaLo YA!"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-base sm:text-lg font-black text-foreground hidden sm:block">ApruébaLo YA!</h1>
          </Link>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href) ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <Link href="/contacto" className="hidden sm:block">
              <Button size="sm" className="bg-primary hover:bg-primary/85 text-white font-bold shadow-md hover:shadow-lg transition-all animate-pulse hover:animate-none">
                Contáctanos
              </Button>
            </Link>

            {/* Menú móvil */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden h-10 w-10">
                  <Menu className="h-6 w-6 text-foreground" />
                  <span className="sr-only">Abrir menú</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[320px] pt-12">
                <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                <nav className="flex flex-col gap-2">
                  {NAV_LINKS.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                        isActive(link.href) ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Link
                    href="/contacto"
                    onClick={() => setOpen(false)}
                    className="mt-4 mx-4"
                  >
                    <Button className="w-full bg-primary hover:bg-primary/90 text-white font-bold">
                      Contáctanos
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
