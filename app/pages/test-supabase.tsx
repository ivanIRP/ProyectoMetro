// pages/test-supabase.tsx
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'

type Registro = {
  id: number
  [key: string]: any
}

export default function TestSupabase() {
  const [data, setData] = useState<Registro[] | null>(null)
  const [error, setError] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('usuarios') // Cambia el nombre de la tabla si es diferente
        .select('*')
        .limit(10)

      if (error) {
        console.error('Error al obtener datos:', error)
        setError(error)
      } else {
        console.log('Datos obtenidos:', data)
        setData(data)
      }
    }

    fetchData()
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Prueba de conexión con Supabase</h1>
      {error && <p style={{ color: 'red' }}>❌ Error: {error.message}</p>}
      {data ? (
        <pre style={{ backgroundColor: '#eee', padding: '1rem' }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  )
}
