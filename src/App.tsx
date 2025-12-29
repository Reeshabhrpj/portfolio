import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navbar />
      <div id="hero"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="education"><Education /></div>
      <div id="contact"><Contact /></div>
      
      <footer className="py-8 text-center text-gray-400 border-t border-white/10">
        <p>&copy; 2025 Reeshabh. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App