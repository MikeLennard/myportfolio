import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import NavContainer from './components/nav/NavContainer';
import Footer from './components/layout/Footer';
import theme from './Theme.module.css';
import './App.css';

/**
 * App Root Component
 * Demonstrates:
 * - Functional Component Architecture
 * - React Router v7 Routing (Home, Projects, About, Contact)
 * - Passing Props to child components (items to NavContainer, class to pages)
 * - Mixing CSS Modules (theme), Custom CSS (App.css), and Tailwind CSS
 */
function App() {
  const navItems = [
    { id: 1, href: '/', name: 'Home' },
    { id: 2, href: '/projects', name: 'Projects' },
    { id: 3, href: '/about', name: 'About' },
    { id: 4, href: '/contact', name: 'Contact' }
  ];

  return (
    <div className={`min-h-screen flex flex-col justify-between bg-transparent text-slate-100 ${theme.pageContainer}`}>
      {/* Navigation Bar with Props */}
      <NavContainer items={navItems} currentPath={window.location.pathname} />

      {/* Main Routed Content */}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home class={`${theme.primary}`} />} />
          <Route path="/projects" element={<Projects class={`${theme.primary}`} />} />
          <Route path="/about" element={<About class={`${theme.primary}`} />} />
          <Route path="/contact" element={<Contact class={`${theme.primary}`} />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;