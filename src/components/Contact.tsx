import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react'

export default function Contact() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'reeshabhjagetiya2406@gmail.com', href: 'mailto:reeshabhjagetiya2406@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 95589 38722', href: 'tel:+919558938722' },
    { icon: MapPin, label: 'Location', value: 'Vadodara, Gujarat', href: '#' }
  ]

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Reeshabhrpj?tab=repositories', color: 'hover:text-gray-300' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/reeshabh-jagetiya/', color: 'hover:text-blue-400' }
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
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your next project? I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="glass-effect p-8 rounded-2xl mb-12"
          >
            <h3 className="text-2xl font-semibold mb-8 text-center">Get In Touch</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-white/5 transition-all duration-300 group"
                  whileHover={{ scale: 1.05 }}
                >
                  <info.icon size={32} className="text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-semibold mb-2">{info.label}</p>
                  <p className="text-gray-300 group-hover:text-white transition-colors">{info.value}</p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-xl font-semibold mb-8">Follow Me</h3>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 glass-effect rounded-full text-gray-400 ${social.color} transition-all duration-300 group`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.a
              href="mailto:reeshabhjagetiya2406@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full font-semibold hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={20} />
              Start a Conversation
              <ExternalLink size={16} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}