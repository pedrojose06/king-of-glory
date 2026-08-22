import { useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { MODS, DAYS, SCHEDULES, FILTERS } from '../data/content.js'
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

const dist = (t) => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY)

// ponytail: pinça simples (só escala, sem foco no ponto médio). Toque duplo reseta.
function usePinch(min = 1, max = 3) {
  const [scale, setScale] = useState(1)
  const start = useRef(null)

  return {
    scale,
    handlers: {
      onTouchStart: (e) => {
        if (e.touches.length === 2) start.current = { d: dist(e.touches), s: scale }
      },
      onTouchMove: (e) => {
        if (e.touches.length !== 2 || !start.current) return
        const next = (start.current.s * dist(e.touches)) / start.current.d
        setScale(Math.min(max, Math.max(min, next)))
      },
      onTouchEnd: () => { start.current = null },
      onDoubleClick: () => setScale(1),
    },
  }
}

export default function Horarios() {
  const [filter, setFilter] = useState('all')
  const [unidade, setUnidade] = useState(SCHEDULES[0].id)
  const pinch = usePinch()

  const grid = SCHEDULES.find((u) => u.id === unidade).grid
  // ponytail: só mostra filtros de modalidades que existem na unidade atual
  const groups = new Set(grid.flatMap((r) => r.cells).filter(Boolean).map((k) => MODS[k].group))
  const filters = FILTERS.filter((f) => f.id === 'all' || groups.has(f.id))

  return (
    <Reveal id="horarios">
      <div className="section">
        <div className="sched-head">
          <div>
            <p className="section-kicker">Grade semanal</p>
            <h2 className="section-title">Horários</h2>
          </div>
          <div className="sched-filters" role="group" aria-label="Filtrar modalidades">
            {filters.map((f) => (
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

        <div className="sched-tabs" role="tablist" aria-label="Unidades">
          {SCHEDULES.map((u) => (
            <button
              key={u.id}
              role="tab"
              aria-selected={unidade === u.id}
              className={`sched-tab${unidade === u.id ? ' active' : ''}`}
              onClick={() => {
                setUnidade(u.id)
                setFilter('all')
              }}
            >
              {u.nome}
            </button>
          ))}
        </div>

        <div className="sched-scroll" {...pinch.handlers}>
          <div className="sched-grid" style={{ zoom: pinch.scale }}>
            <div className="sched-row">
              <div />
              {DAYS.map((d) => (
                <div key={d} className="sched-day">{d}</div>
              ))}
            </div>
            {grid.map((row) => (
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
