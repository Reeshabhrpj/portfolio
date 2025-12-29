import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Engineering',
      field: 'Computer Engineering',
      institution: 'BITS Edu Campus',
      university: 'Gujarat Technological University',
      location: 'Vadodara, Gujarat',
      year: 'August 2021',
      type: 'Graduation'
    },
    {
      degree: '12th Science',
      field: 'Science Stream',
      institution: 'Jai Ambe Vidyalaya',
      location: 'Vadodara, Gujarat',
      year: 'July 2017',
      type: 'Higher Secondary'
    }
  ]

  return (
    <section className="section-padding bg-slate-800/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text">Education</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="glass-effect p-8 rounded-2xl hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-primary-500/10 rounded-full">
                    <GraduationCap size={32} className="text-primary-400" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-1">
                          {edu.degree}
                        </h3>
                        <p className="text-primary-400 font-medium">
                          {edu.field}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                        <Calendar size={16} />
                        <span className="font-mono text-sm">{edu.year}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-gray-300 font-medium">
                        {edu.institution}
                      </p>
                      {edu.university && (
                        <p className="text-gray-400 text-sm">
                          {edu.university}
                        </p>
                      )}
                      <div className="flex items-center gap-2 text-gray-400 text-sm">
                        <MapPin size={14} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}