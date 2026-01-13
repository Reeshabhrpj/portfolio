import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import snakezoneImg from '../assets/snakezone.png'
import pokemon from '../assets/pokemon.jpg'
import tictactoe from '../assets/tictactoe.jpg'
import boxes3d from '../assets/3dboxes.png'
import dashboard from '../assets/dashboard.png'
import kbcbg from '../assets/bg.jpg'

export default function Projects() {

  const projects = [
    {
      title: 'Workflow Monitoring Dashboard',
      description: 'A modern, production-ready React dashboard for monitoring automation workflows and jobs. Built with React 18, Vite, Tailwind CSS, and Recharts.',
      image: dashboard,
      tech: ['React 18', 'Tailwind CSS', 'React Router', 'Recharts'],
      github: 'https://github.com/Reeshabhrpj/Workflow-Monitoring-Dashboard',
      live: 'https://workflow-monitoring-dashboard.vercel.app/'
    },
        {
      title: 'React Quiz',
      description: 'A fully responsive React-based quiz game inspired by "Kaun Banega Crorepati" (KBC) with interactive lifelines, leaderboard, and engaging gameplay.',
      image: kbcbg,
      tech: ['React', 'CSS', 'Framer Motion', 'Framer Motion', 'React Hooks'],
      github: 'https://github.com/Reeshabhrpj/react-quiz',
      live: 'https://react-quiz-tau-seven.vercel.app/'
    },
    {
      title: 'Pokémon Explorer',
      description: 'A React application that allows users to explore and search through Pokémon using the PokéAPI. Features real-time search, detailed stats, and responsive card layout',
      image: pokemon,
      tech: ['React 19', 'Vite', 'Tailwind CSS', 'PokéAPI'],
      github: 'https://github.com/Reeshabhrpj/pokemon',
      live: 'https://pokemon-mu-eight.vercel.app/'
    },
    {
      title: 'Password Generator 🔐',
      description: 'Secure password generator built with React.js featuring customizable length, character sets, and strength indicators for creating strong passwords',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop',
      tech: ['React.js', 'JavaScript', 'CSS3', 'Vite'],
      github: 'https://github.com/Reeshabhrpj/password-generator',
      live: 'https://password-generator-ten-bay.vercel.app/'
    },
    {
      title: 'WeatherNow 🌤️',
      description: 'Real-time weather app that allows users to fetch weather information for any city. Features current temperature, weather conditions, humidity, wind speed with clean responsive UI',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      tech: ['JavaScript', 'Weather API', 'HTML5', 'CSS3'],
      github: 'https://github.com/Reeshabhrpj/WeatherNow',
      live: 'https://weather-now-psi-one.vercel.app/'
    },
    {
      title: 'Todo List ✅',
      description: 'User-friendly todo application with local storage support, current date/time display, responsive design, and multiple theme options for personalized experience',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop',
      tech: ['JavaScript', 'HTML5', 'CSS3', 'Local Storage'],
      github: 'https://github.com/Reeshabhrpj/todo-list',
      live: 'https://todo-list-ten-mu-27.vercel.app/'
    },
    {
      title: 'SnakeZone 🐍',
      description: 'A classic Snake game built with HTML, CSS, and JavaScript featuring smooth gameplay, sound effects, high score tracking, and responsive design',
      image: snakezoneImg,
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API'],
      github: 'https://github.com/Reeshabhrpj/Snakezone',
      live: 'https://snakezone-eight.vercel.app/'
    },
    {
      title: 'Tic Tac Toe ⭕',
      description: 'Classic Tic Tac Toe game built with interactive gameplay, win detection logic, game reset functionality, and clean responsive design for two players',
      image: tictactoe,
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Game Logic'],
      github: 'https://github.com/Reeshabhrpj/TicTacToc',
      live: 'https://tic-tac-toc-rosy.vercel.app/'
    },
    {
      title: '3D Boxes 📺',
      description: 'Interactive 3D visual effect created with CSS transforms and JavaScript. Features animated 3D box transitions, hover effects, and smooth animations',
      image: boxes3d,
      tech: ['HTML5', 'CSS3', 'JavaScript', '3D Transforms'],
      github: 'https://github.com/Reeshabhrpj/3D-boxes',
      live: 'https://3d-boxes-seven.vercel.app/'
    },
    {
      title: 'Random Dad Joke 😂',
      description: 'Simple web application that displays random dad jokes fetched from an API. Features responsive design and brings humor with a click of a button or page refresh',
      image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=500&h=300&fit=crop',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'Joke API'],
      github: 'https://github.com/Reeshabhrpj/random-dad-joke',
      live: 'https://random-dad-joke.vercel.app/'
    }
  ]

  return (
    <section className="section-padding bg-slate-800/50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Projects</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl overflow-hidden group hover:scale-105 transition-transform"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
                {/* Desktop hover overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity hidden md:flex items-center justify-center gap-4">
                  <a href={project.github} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                    <Github size={20} />
                  </a>
                  <a href={project.live} className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                
                {/* Mobile links - always visible on mobile */}
                <div className="absolute top-2 right-2 md:hidden flex gap-2">
                  <a href={project.github} className="p-2 bg-black/70 rounded-full hover:bg-black/90 transition-colors">
                    <Github size={16} />
                  </a>
                  <a href={project.live} className="p-2 bg-black/70 rounded-full hover:bg-black/90 transition-colors">
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}