import { motion } from 'framer-motion'
import { Code, Palette, Zap } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Code,
      title: "Component-Based Architecture",
      description: "React-based frontend development with API-driven rendering, async data handling, conditional logic, and robust error handling for production systems"
    },
    {
      icon: Palette,
      title: "CMS & E-commerce Expertise",
      description: "WordPress themes, Shopify storefront customization, and CollectiveAccess systems with custom PHP templates and structured, data-driven content"
    },
    {
      icon: Zap,
      title: "Production Automation Workflows",
      description: "n8n and Make.com workflows using custom JavaScript, webhooks, schedulers, rate limiting, retries, and monitoring for 24/7 reliability"
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
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-6xl mx-auto">
           Currently working at RethinkingWeb, Vadodara since April 2022. I work extensively 
          with HTML, CSS, JavaScript, and React to build responsive and accessible user interfaces. 
          My experience includes WordPress theme development, Shopify storefront customization, 
          and frontend work on CollectiveAccess museum systems.</p>
           <p className="text-xl text-gray-300 mt-4 max-w-6xl mx-auto">
          Beyond UI, I specialize in connecting frontends to automation workflows and backend 
          systems using n8n and Make.com. I work with CRMs such as HubSpot and Zuper, handle complex 
          data processing, web scraping pipelines, and HTML-to-PDF generation for production systems.

          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-effect p-8 rounded-2xl text-center hover:scale-105 transition-transform"
            >
              <feature.icon size={48} className="mx-auto mb-4 text-primary-500" />
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}