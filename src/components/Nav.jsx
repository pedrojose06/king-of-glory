import { useEffect, useState } from 'react'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#topo" className="nav-brand">
        <img src="/assets/logo.webp" alt="King of Glory" width="40" height="40" />
        <span>King of Glory</span>
      </a>
      <div className="nav-links">
        <a href="#modalidades">Modalidades</a>
        <a href="#horarios">Horários</a>
        <a href="#contato">Contato</a>
      </div>
    </nav>
  )
}
