import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Modalidades from './components/Modalidades.jsx'
import Horarios from './components/Horarios.jsx'
import Galeria from './components/Galeria.jsx'
import Citacao from './components/Citacao.jsx'
import Contato from './components/Contato.jsx'
import Footer from './components/Footer.jsx'
import IngressoFlutuante from './components/Ingressos.jsx'

export default function App() {
  return (
    <>
      <div className="grain" />
      <Nav />
      <Hero />
      <Marquee />
      <Modalidades />
      <Horarios />
      <Galeria />
      <Citacao />
      <Contato />
      <Footer />
      <IngressoFlutuante />
    </>
  )
}
