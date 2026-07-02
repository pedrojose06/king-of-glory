import { useEffect, useRef, useState } from 'react'
import { WHATSAPP, MODALIDADES, MODS, DAYS, GRID, FILTERS, MARQUEE_ITEMS, GALLERY, UNIDADES } from './data.js'

const CTA_MSG = 'Olá! Quero agendar uma aula experimental na King of Glory'

/* Envolve uma seção e anima a entrada quando ela aparece na viewport */
function Reveal({ as: Tag = 'section', children, ...props }) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          io.disconnect()
        }
      },
      { threshold: 0.12 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal${inView ? ' in' : ''}`} {...props}>
      {children}
    </Tag>
  )
}

function Nav() {
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

function Hero() {
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

function Marquee() {
  // duas passadas para o loop de -50% ser contínuo
  const run = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {run.map((item, i) => (
          <span key={i} style={{ display: 'contents' }}>
            <span className={`marquee-item${item === 'King of Glory' ? ' hi' : ''}`}>{item}</span>
            <span className="marquee-sep">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}

function Modalidades() {
  // spotlight segue o cursor dentro do card
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
    e.currentTarget.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
  }

  return (
    <Reveal id="modalidades">
      <div className="section">
        <p className="section-kicker">O que treinamos</p>
        <h2 className="section-title">Modalidades</h2>
        <div className="mods-grid">
          {MODALIDADES.map((m) => (
            <div key={m.num} className="mod-card" onMouseMove={onMove}>
              <div className="mod-num">{m.num}</div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
              <p className="mod-when">{m.when}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

function Horarios() {
  const [filter, setFilter] = useState('all')

  return (
    <Reveal id="horarios">
      <div className="section">
        <div className="sched-head">
          <div>
            <p className="section-kicker">Grade semanal</p>
            <h2 className="section-title">Horários</h2>
          </div>
          <div className="sched-filters" role="group" aria-label="Filtrar modalidades">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                className={`filter-btn${filter === f.id ? ' active' : ''}`}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="sched-scroll">
          <div className="sched-grid">
            <div className="sched-row">
              <div />
              {DAYS.map((d) => (
                <div key={d} className="sched-day">{d}</div>
              ))}
            </div>
            {GRID.map((row) => (
              <div key={row.time} className="sched-row">
                <div className="sched-time">{row.time}</div>
                {row.cells.map((key, i) => {
                  if (!key) return <div key={i} className="sched-cell empty" />
                  const m = MODS[key]
                  const dim = filter !== 'all' && m.group !== filter
                  return (
                    <div
                      key={i}
                      className={`sched-cell${dim ? ' dim' : ''}`}
                      style={{ background: m.fill, border: `1px solid ${m.border}` }}
                    >
                      <div className="sched-cell-label" style={{ color: m.color }}>{m.label}</div>
                      {m.tag && <div className="sched-cell-tag">{m.tag}</div>}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
        <p className="sched-hint">Toque em uma modalidade acima para destacá-la na grade.</p>
      </div>
    </Reveal>
  )
}

function Galeria() {
  return (
    <Reveal>
      <div className="section">
        <p className="section-kicker">Dentro do tatame</p>
        <h2 className="section-title">A Academia</h2>
        <div className="gallery-grid">
          {GALLERY.map((g) => (
            <figure key={g.src} className="gallery-item">
              <img src={g.src} alt={g.alt} loading="lazy" decoding="async" />
              <figcaption>{g.caption}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

function Citacao() {
  return (
    <Reveal>
      <div className="quote">
        <div className="quote-bg" />
        <div className="quote-mark">“</div>
        <blockquote>Uns encurvam-se e caem, mas nós nos levantamos e nos mantemos de pé.</blockquote>
        <cite>— Salmos 20:8</cite>
      </div>
    </Reveal>
  )
}

function Contato() {
  return (
    <Reveal id="contato">
      <div className="contact">
        <div className="contact-inner">
          <div>
            <p className="section-kicker">Vem treinar</p>
            <h2>Agende sua primeira aula com a gente</h2>
            <p className="contact-lead">
              Chame no WhatsApp e agende uma aula experimental de Muay Thai ou Jiu Jitsu.
            </p>
            <div className="contact-cta">
              <a
                href={WHATSAPP('Olá! Quero agendar uma aula experimental.')}
                target="_blank"
                rel="noopener"
                className="btn btn-gold"
              >
                Envie uma mensagem
              </a>
            </div>
          </div>
          <div className="contact-list">
            {UNIDADES.map((u) => (
              <div key={u.nome} className="contact-item">
                <p>{u.nome}</p>
                <a href={u.maps} target="_blank" rel="noopener">
                  {u.endereco[0]}
                  <br />
                  {u.endereco[1]}
                </a>
              </div>
            ))}
            <div className="contact-item">
              <p>Instagram</p>
              <a href="https://www.instagram.com/academiakingofglory/" target="_blank" rel="noopener" className="gold">
                @academiakingofglory
              </a>
            </div>
            <div className="contact-item">
              <p>Facebook</p>
              <a href="https://www.facebook.com/academykingofglory/" target="_blank" rel="noopener" className="gold">
                Academy King of Glory
              </a>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  )
}

export default function App() {
  return (
    <>
      <div className="grain" />
      <Nav />
      <Hero />
      <Marquee />
      <Modalidades />
      <Horarios />
      <Galeria />
      <Citacao />
      <Contato />
      <footer className="footer">
        <img src="/assets/logo.webp" alt="" width="30" height="30" />
        <p>© 2026 King of Glory Academy · Muay Thai & Jiu Jitsu · Bauru-SP</p>
      </footer>
    </>
  )
}
