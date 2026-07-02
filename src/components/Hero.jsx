import { useEffect, useRef } from 'react'
import { WHATSAPP, CTA_MSG } from '../data/content.js'
import './Hero.css'

export default function Hero() {
  const glowRef = useRef(null)

  // Glow segue o mouse com leve atraso — efeito sutil, só desktop
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse), (prefers-reduced-motion: reduce)').matches) return
    let raf = 0
    const onMove = (e) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth) * 100
        const y = (e.clientY / window.innerHeight) * 100
        glowRef.current.style.background = `radial-gradient(circle 340px at ${x}% ${y}%, rgba(249,233,160,.14), transparent 70%)`
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <header id="topo" className="hero">
      <div className="hero-bg" />
      <div className="hero-lines" />
      <div
        ref={glowRef}
        className="hero-spotlight"
        style={{ background: 'radial-gradient(circle 340px at 50% 40%, rgba(249,233,160,.14), transparent 70%)' }}
      />
      <div className="hero-crest">
        <div className="hero-crest-inner">
          <img src="/assets/logo.webp" alt="Brasão King of Glory Academy" fetchPriority="high" />
        </div>
      </div>
      <p className="hero-kicker">Desde 2020 · Bauru — SP</p>
      <h1 className="hero-title">King of Glory</h1>
      <p className="hero-sub">
        Muay Thai <em>◆</em> Jiu Jitsu
      </p>
      <div className="hero-ctas">
        <a href={WHATSAPP(CTA_MSG)} target="_blank" rel="noopener" className="btn btn-gold">
          Aula experimental
        </a>
        <a href="#horarios" className="btn btn-ghost">
          Ver horários
        </a>
      </div>
      <div className="hero-scroll-hint">↓ role para conhecer</div>
    </header>
  )
}
