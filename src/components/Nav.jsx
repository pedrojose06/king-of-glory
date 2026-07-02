import { useEffect, useState } from 'react'
import './Nav.css'

const LINKS = [
  { href: '#modalidades', label: 'Modalidades' },
  { href: '#horarios', label: 'Horários' },
  { href: '#contato', label: 'Contato' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // trava o scroll do body enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const close = () => setOpen(false)

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}${open ? ' open' : ''}`}>
      <a href="#topo" className="nav-brand" onClick={close}>
        <img src="/assets/logo.webp" alt="King of Glory" width="40" height="40" />
        <span>King of Glory</span>
      </a>

      <div className="nav-links">
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>

      <button
        className="nav-burger"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className="nav-mobile" onClick={close}>
        {LINKS.map((l) => (
          <a key={l.href} href={l.href}>{l.label}</a>
        ))}
      </div>
    </nav>
  )
}
