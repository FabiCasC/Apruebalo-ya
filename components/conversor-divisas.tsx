'use client';

import { useState, useEffect } from 'react';
import { ArrowRightLeft } from 'lucide-react';

// Monedas soportadas - ExchangeRate-API (150+ divisas, actualización diaria)
const MONEDAS = [
  { codigo: 'PEN', nombre: 'Sol peruano (PEN)' },
  { codigo: 'USD', nombre: 'Dólar (USD)' },
  { codigo: 'EUR', nombre: 'Euro (EUR)' },
  { codigo: 'GBP', nombre: 'Libra (GBP)' },
  { codigo: 'MXN', nombre: 'Peso mexicano (MXN)' },
  { codigo: 'BRL', nombre: 'Real (BRL)' },
  { codigo: 'COP', nombre: 'Peso colombiano (COP)' },
  { codigo: 'CLP', nombre: 'Peso chileno (CLP)' },
  { codigo: 'ARS', nombre: 'Peso argentino (ARS)' },
  { codigo: 'CHF', nombre: 'Franco suizo (CHF)' },
  { codigo: 'JPY', nombre: 'Yen (JPY)' },
  { codigo: 'CAD', nombre: 'Dólar canadiense (CAD)' },
  { codigo: 'AUD', nombre: 'Dólar australiano (AUD)' },
  { codigo: 'CNY', nombre: 'Yuan (CNY)' },
];

const API_URL = 'https://open.er-api.com/v6/latest/USD';

export function ConversorDivisas() {
  const [monto, setMonto] = useState('100');
  const [desde, setDesde] = useState('PEN');
  const [hacia, setHacia] = useState('USD');
  const [resultado, setResultado] = useState<number | null>(null);
  const [rates, setRates] = useState<Record<string, number> | null>(null);
  const [ultimaActualizacion, setUltimaActualizacion] = useState<string | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar tasas de cambio una sola vez
  useEffect(() => {
    setCargando(true);
    setError(null);
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.result === 'success' && data.rates) {
          setRates(data.rates);
          setUltimaActualizacion(data.time_last_update_utc || null);
        } else {
          setError('No se pudieron cargar las tasas de cambio.');
        }
      })
      .catch(() => {
        setError('Error al conectar con el servicio de tipos de cambio. Intenta de nuevo.');
      })
      .finally(() => setCargando(false));
  }, []);

  // Calcular resultado cuando cambian monto, monedas o tasas
  useEffect(() => {
    const valor = parseFloat(monto);
    if (isNaN(valor) || valor <= 0 || !rates) {
      setResultado(null);
      return;
    }
    if (desde === hacia) {
      setResultado(valor);
      return;
    }
    const rateDesde = rates[desde];
    const rateHacia = rates[hacia];
    if (!rateDesde || !rateHacia) {
      setResultado(null);
      return;
    }
    // Conversión: valor * (rate_hacia / rate_desde) — tasas en base USD
    setResultado(valor * (rateHacia / rateDesde));
  }, [monto, desde, hacia, rates]);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-border/60 p-6">
      <h3 className="font-bold text-foreground mb-4 flex items-center gap-2">
        <ArrowRightLeft className="w-5 h-5 text-primary" />
        Conversor de divisas
      </h3>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Monto</label>
          <input
            type="number"
            value={monto}
            onChange={(e) => setMonto(e.target.value)}
            min="0"
            step="0.01"
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">De</label>
          <select
            value={desde}
            onChange={(e) => setDesde(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {MONEDAS.map((m) => (
              <option key={m.codigo} value={m.codigo}>{m.nombre}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">A</label>
          <select
            value={hacia}
            onChange={(e) => setHacia(e.target.value)}
            className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            {MONEDAS.map((m) => (
              <option key={m.codigo} value={m.codigo}>{m.nombre}</option>
            ))}
          </select>
        </div>
        {cargando && <p className="text-sm text-muted-foreground">Cargando tasas de cambio…</p>}
        {error && <p className="text-sm text-destructive">{error}</p>}
        {!cargando && !error && resultado !== null && (
          <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
            <p className="text-sm text-muted-foreground">Resultado</p>
            <p className="text-2xl font-bold text-foreground mt-1">
              {resultado.toLocaleString('es', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} {hacia}
            </p>
          </div>
        )}
      </div>
      <div className="mt-4 space-y-1">
        {ultimaActualizacion && (
          <p className="text-xs text-muted-foreground">
            Tasas actualizadas: {new Date(ultimaActualizacion).toLocaleString('es', { dateStyle: 'short', timeStyle: 'short' })}
          </p>
        )}
        <p className="text-xs text-muted-foreground">
          Tasas de referencia vía{' '}
          <a href="https://www.exchangerate-api.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
            ExchangeRate-API
          </a>
          . El tipo aplicado por el procesador de pago puede variar ligeramente.
        </p>
      </div>
    </div>
  );
}
