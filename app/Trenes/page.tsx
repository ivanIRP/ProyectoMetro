'use client';
import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const trenes = [
  {
    id: 1,
    nombre: 'Tren Serie 9000',
    imagen: '/tren1.jpg',
    velocidad: 80,
    capacidad: 1200,
    linea: 'Línea 1',
  },
  {
    id: 2,
    nombre: 'Tren NM-16',
    imagen: '/tren2.jpg',
    velocidad: 75,
    capacidad: 1000,
    linea: 'Línea 12',
  },
  {
    id: 3,
    nombre: 'CAF 8000',
    imagen: '/tren3.jpg',
    velocidad: 70,
    capacidad: 1100,
    linea: 'Línea 7',
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<'left' | 'right'>('right');

  const tren = trenes[index];

  const handleNext = () => {
    setDirection('right');
    setIndex((prev) => (prev + 1) % trenes.length);
  };

  const handlePrev = () => {
    setDirection('left');
    setIndex((prev) => (prev - 1 + trenes.length) % trenes.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl p-8 relative flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Panel de Control de Trenes CDMX
        </h1>

        <div className="w-full flex items-center justify-center relative">
          {/* Botón izquierdo */}
          <button
            onClick={handlePrev}
            className="absolute left-0 z-10 bg-orange-500 hover:bg-orange-600 text-white font-bold text-2xl px-4 py-2 rounded-full shadow transition-all"
          >
            ◀
          </button>

          {/* Imagen y datos animados */}
          <div className="w-[300px] h-[250px] relative flex items-center justify-center overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={tren.id}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  x: direction === 'right' ? 100 : -100,
                }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                  x: direction === 'right' ? -100 : 100,
                }}
                transition={{ duration: 0.4 }}
                className="absolute flex flex-col items-center"
              >
                <Image
                  src={tren.imagen}
                  alt={tren.nombre}
                  width={280}
                  height={180}
                  className="rounded-md shadow-md border border-gray-300"
                />
                <h2 className="mt-4 text-xl font-bold text-gray-800">{tren.nombre}</h2>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Botón derecho */}
          <button
            onClick={handleNext}
            className="absolute right-0 z-10 bg-orange-500 hover:bg-orange-600 text-white font-bold text-2xl px-4 py-2 rounded-full shadow transition-all"
          >
            ▶
          </button>
        </div>

        {/* Ficha de atributos estilo Pokémon */}
        <div className="mt-8 w-full max-w-2xl bg-[#f9f9f9] rounded-xl p-6 shadow-inner border">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Estadísticas del Tren</h3>

          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600">Velocidad máxima</p>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-500 transition-all"
                  style={{ width: `${(tren.velocidad / 120) * 100}%` }}
                />
              </div>
              <p className="text-xs text-right text-gray-500 mt-1">{tren.velocidad} km/h</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Capacidad</p>
              <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-orange-400 transition-all"
                  style={{ width: `${(tren.capacidad / 1500) * 100}%` }}
                />
              </div>
              <p className="text-xs text-right text-gray-500 mt-1">{tren.capacidad} personas</p>
            </div>

            <div>
              <p className="text-sm text-gray-600">Línea asignada</p>
              <p className="text-md font-medium text-orange-600">{tren.linea}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
