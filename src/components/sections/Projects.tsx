'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Project } from '@/types'

const projects: Project[] = [
  {
    id: 'covase-fleet-intelligence',
    title: 'COVASE Enterprise Fleet Intelligence Platform',
    description: 'Transformed fleet management into an enterprise SaaS platform with AI/ML predictive analytics and bank-level security.',
    details: 'Architected a cutting-edge multi-tenant platform serving major UK organizations with AI-powered predictive maintenance, driver safety scoring, and zero-emission transition planning. Features include XGBoost ML models, 100% GDPR compliance, and comprehensive ESG tracking across Scope 1/2/3 emissions.',
    videoWebm: 'https://res.cloudinary.com/dd7svdirf/video/upload/v1745525997/globe_uuq61l.webm',
    videoMp4: 'https://res.cloudinary.com/dd7svdirf/video/upload/v1745526034/globe_vvqqkg.mp4',
    fallbackImage: 'https://res.cloudinary.com/dd7svdirf/image/upload/v1745526178/logo_mxa378.jpg',
    metrics: [
      { label: 'Vehicles Managed', value: '293+' },
      { label: 'Records Processed', value: '1.9M+' },
      { label: 'Annual Value', value: '>£250K' },
    ],
    tags: ['AI/ML', 'Enterprise SaaS', 'GDPR', 'Zero-Emission'],
  },
  {
    id: 'jurni-leasing',
    title: 'Jurni Leasing Expansion',
    description: 'Successfully scaled Jurni Leasing, formerly Bridle Vehicle Leasing into a Top 10 UK leasing broker.',
    details: 'Managing a fleet exceeding 30,000 vehicles through streamlined operations and strategic growth initiatives. Achieved a 15% increase in operational efficiency and reduced costs by 8% through advanced vehicle tracking and leasing optimisation.',
    videoWebm: 'https://res.cloudinary.com/dd7svdirf/video/upload/v1745525980/jurni-leasing_qwd7my.webm',
    videoMp4: 'https://res.cloudinary.com/dd7svdirf/video/upload/v1745526040/jurni-leasing_em8trv.mp4',
    fallbackImage: 'https://res.cloudinary.com/dd7svdirf/image/upload/v1745526178/logo_mxa378.jpg',
    metrics: [
      { label: 'Vehicles Managed', value: '30,000+' },
      { label: 'Efficiency Increase', value: '15%' },
      { label: 'Cost Reduction', value: '8%' },
    ],
    tags: ['Fleet Management', 'Growth Strategy', 'Optimization'],
  },
  {
    id: 'blockchain-esg',
    title: 'Blockchain ESG Platform',
    description: "Developed 'Perx', an innovative blockchain-enabled, ESG focus, Salary Sacrifice solution for fleet compliance.",
    details: 'Leveraging integrations across Power Automate, Azure, and Oracle Cloud. Enabled 100% compliance with ESG regulations through blockchain transparency.',
    videoWebm: 'https://res.cloudinary.com/dd7svdirf/video/upload/v1745525998/web-salsac_xjlnkq.webm',
    videoMp4: 'https://res.cloudinary.com/dd7svdirf/video/upload/v1745526172/web-salsac_gixh1e.mp4',
    fallbackImage: 'https://res.cloudinary.com/dd7svdirf/image/upload/v1745525976/jurni-ma-fallback_pciqua.webp',
    metrics: [
      { label: 'ESG Compliance', value: '100%' },
      { label: 'Blockchain Transactions', value: '10,000+' },
      { label: 'Processing Time', value: '-60%' },
    ],
    tags: ['Blockchain', 'ESG', 'Digital Transformation'],
  },
]

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50/30 dark:from-gray-950 dark:to-blue-950/20">
      <div className="container-wide" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-heading">
            Our <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Real-world results from strategic fleet management and digital transformation
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-xl transition-all hover:shadow-2xl"
            >
              {/* Video Background */}
              <div className="relative h-64 overflow-hidden">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={project.fallbackImage}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                >
                  <source src={project.videoWebm} type="video/webm" />
                  <source src={project.videoMp4} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />

                {/* Tags */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {project.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary/90 px-3 py-1 text-xs font-medium text-primary-foreground backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold font-heading group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground">
                  {project.description}
                </p>

                <p className="text-sm text-muted-foreground">
                  {project.details}
                </p>

                {/* Metrics */}
                {project.metrics && (
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {project.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="text-2xl font-bold text-primary">
                          {metric.value}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                  onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </div>

              {/* Decorative gradient */}
              <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 blur transition-opacity group-hover:opacity-20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
