import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { MODS, DAYS, GRID, FILTERS } from '../data/content.js'
import './Horarios.css'

function Cell({ modKey, filter }) {
  if (!modKey) return <div className="sched-cell empty" />
  const m = MODS[modKey]
  const dim = filter !== 'all' && m.group !== filter
  return (
    <div
      className={`sched-cell${dim ? ' dim' : ''}`}
      style={{ background: m.fill, border: `1px solid ${m.border}` }}
    >
      <div className="sched-cell-label" style={{ color: m.color }}>{m.label}</div>
      {m.tag && <div className="sched-cell-tag">{m.tag}</div>}
    </div>
  )
}

export default function Horarios() {
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
                {row.cells.map((key, i) => (
                  <Cell key={i} modKey={key} filter={filter} />
                ))}
              </div>
            ))}
          </div>
        </div>
        <p className="sched-hint">Toque em uma modalidade acima para destacá-la na grade.</p>
      </div>
    </Reveal>
  )
}
