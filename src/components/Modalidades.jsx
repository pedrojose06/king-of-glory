import Reveal from './Reveal.jsx'
import { MODALIDADES } from '../data/content.js'
import './Modalidades.css'

export default function Modalidades() {
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
