'use client'
import { Header } from '@/components/organisms/Header'

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ padding: '2rem' }}>
        <h1>Bem-vinda, Nayara! 💖</h1>
        <p>Aqui começa sua nova jornada frontend: com atomic design, padrão, e nenhuma gambiarra.</p>
      </main>
    </>
  )
}