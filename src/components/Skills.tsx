import { motion } from 'framer-motion'
import { 
  Code2, Database, Globe, Smartphone, Cloud, GitBranch,
  Palette, Zap, Cpu, Terminal
} from 'lucide-react'

export default function Skills() {
  const skills = [
    { name: 'HTML5', icon: Code2 },
    { name: 'CSS3', icon: Palette },
    { name: 'JavaScript', icon: Code2 },
    { name: 'React', icon: Code2 },
    { name: 'WordPress', icon: Globe },
    { name: 'Shopify', icon: Smartphone },
    { name: 'CollectiveAccess', icon: Database },
    { name: 'PHP', icon: Code2 },
    { name: 'n8n', icon: Zap },
    { name: 'Node.js', icon: Terminal },
    { name: 'Webhooks', icon: Cloud },
    { name: 'REST APIs', icon: Cpu },
    { name: 'HubSpot CRM', icon: Globe },
    { name: 'Google Sheets', icon: Database },
    { name: 'Web Scraping', icon: Globe },
    { name: 'Git / GitHub', icon: GitBranch }
  ]

  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: Math.min(index * 0.05, 0.3),
                }}
                viewport={{ once: true }}
                className="glass-effect py-4 rounded-xl text-center hover:scale-105 transition-all duration-300 hover:bg-white/10 group"
              >
                <skill.icon
                  size={32}
                  className="mx-auto mb-3 text-primary-400 group-hover:text-primary-300 transition-colors"
                />
                <p className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
