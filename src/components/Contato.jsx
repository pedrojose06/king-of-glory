import Reveal from './Reveal.jsx'
import { WHATSAPP, UNIDADES, SOCIALS } from '../data/content.js'
import './Contato.css'

export default function Contato() {
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
            {SOCIALS.map((s) => (
              <div key={s.label} className="contact-item">
                <p>{s.label}</p>
                <a href={s.url} target="_blank" rel="noopener" className="gold">
                  {s.handle}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
