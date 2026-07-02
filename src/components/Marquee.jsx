import { MARQUEE_ITEMS } from '../data/content.js'
import './Marquee.css'

export default function Marquee() {
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
