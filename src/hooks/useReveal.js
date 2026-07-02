import { useEffect, useRef, useState } from 'react'

/**
 * Observa o elemento e retorna `true` quando ele entra na viewport
 * (uma única vez). Elementos já visíveis no mount entram sem animar.
 */
export function useReveal(threshold = 0.12) {
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
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return { ref, inView }
}
