import './Ingressos.css'

const URL = 'https://interno.kingofglory.com.br/'

export function IngressoBtn({ className = '', children = 'Ingressos' }) {
  return (
    <a
      className={`ingresso-btn ${className}`}
      href={URL}
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
      Ingressos — 7º Interno
    </IngressoBtn>
  )
}
