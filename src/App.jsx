
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NavContainer from './components/nav/NavContainer'
import theme from './Theme.module.css'

function App() {

  return (
    <>
      <NavContainer items={[
        { id: 1, href: '/', name: 'Home' },
        { id: 2, href: '/about', name: 'About' },
        { id: 3, href: '/contact', name: 'Contact' }

      ]} currentPath={window.location.pathname} />

      <Routes>
        <Route path="/" element={<Home class={`${theme.primary}`} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App