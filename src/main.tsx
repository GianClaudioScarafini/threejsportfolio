import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Navbar from './Navbar.tsx'
import Experience from './Experience.tsx'
import Footer from './Footer.tsx'
import Skills from './Skills.tsx'
import Projects from './Projects.tsx'
import Contact from './Contact.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <App />
    <Experience />
    <Skills />
    <Footer />
    <Projects />
    <Contact />

  </StrictMode>,
)
