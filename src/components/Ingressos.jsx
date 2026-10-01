import './Ingressos.css'
import { INGRESSOS } from '../data/content.js'

export function IngressoBtn({ className = '', children = INGRESSOS.textoNav }) {
  if (!INGRESSOS.ativo) return null
  return (
    <a
      className={`ingresso-btn ${className}`}
      href={INGRESSOS.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="ingresso-ico">🎟</span> {children}
    </a>
  )
}

export default function IngressoFlutuante() {
  return (
    <IngressoBtn className="ingresso-float">
      {INGRESSOS.textoFlutuante}
    </IngressoBtn>
  )
}
