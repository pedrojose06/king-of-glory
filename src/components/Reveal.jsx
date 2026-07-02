import { useReveal } from '../hooks/useReveal.js'

/** Seção que anima a entrada quando aparece na viewport. */
export default function Reveal({ as: Tag = 'section', children, ...props }) {
  const { ref, inView } = useReveal()
  return (
    <Tag ref={ref} className={`reveal${inView ? ' in' : ''}`} {...props}>
      {children}
    </Tag>
  )
}
