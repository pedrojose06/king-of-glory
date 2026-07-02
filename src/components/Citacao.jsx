import Reveal from './Reveal.jsx'
import './Citacao.css'

export default function Citacao() {
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
