"use client";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [role, setRole] = useState("usuario");

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 space-y-6">
        <div className="flex flex-col items-center gap-4">
          <Image src="/img1.webp" alt="Metro Logo" width={64} height={64} />
          <h1 className="text-2xl font-bold text-gray-800">Acceso al Portal del Metro del grupo de sistemas 902</h1>
          <p className="text-sm text-gray-500">Selecciona tu rol e inicia sesión</p>
        </div>

        <form className="flex flex-col space-y-4">
          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-700">Rol</span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="usuario">Usuario</option>
              <option value="admin">Administrador</option>
              <option value="operador">Operador</option>
            </select>
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-700">Correo</span>
            <input
              type="email"
              placeholder="correo@ejemplo.com"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </label>

          <label className="flex flex-col gap-1">
            <span className="text-sm font-medium text-gray-700">Contraseña</span>
            <input
              type="password"
              placeholder="********"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
              required
            />
          </label>

          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition-all"
          >
            Iniciar sesión
          </button>
        </form>

        <div className="text-center text-sm text-gray-500">
          ¿Olvidaste tu contraseña? <a href="#" className="text-orange-500 hover:underline">Recupérala</a>
        </div>
      </div>
    </div>
  );
}
