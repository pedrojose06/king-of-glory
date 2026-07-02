import Reveal from './Reveal.jsx'
import { GALLERY } from '../data/content.js'
import './Galeria.css'

export default function Galeria() {
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
