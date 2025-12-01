'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { CheckCircle } from 'lucide-react'

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    'Pioneering sustainable business transformations',
    'Expert fleet management and strategic advisory',
    'Industry-leading insights and innovation',
    'Passionate commitment to sustainability',
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-950 dark:to-blue-950/20">
      <div className="container-wide" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-heading">
            About{' '}
            <span className="gradient-text">Olaris</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Leading the way in fleet sustainability and business transformation
          </p>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 items-center">
          {/* Video/Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative overflow-hidden rounded-2xl shadow-2xl"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full aspect-video object-cover"
              poster="https://res.cloudinary.com/dd7svdirf/image/upload/v1745526178/logo_mxa378.jpg"
            >
              <source
                src="https://res.cloudinary.com/dd7svdirf/video/upload/v1745525997/globe_uuq61l.webm"
                type="video/webm"
              />
              <source
                src="https://res.cloudinary.com/dd7svdirf/video/upload/v1745526034/globe_vvqqkg.mp4"
                type="video/mp4"
              />
            </video>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/90">
              Olaris was founded on a commitment to pioneering sustainable business transformations through expert fleet management and strategic advisory services.
            </p>
            <p className="text-lg text-foreground/90">
              Our seasoned professionals, led by experienced fleet management executive{' '}
              <span className="font-semibold text-primary">Alan Carreras</span>, bring unparalleled expertise, industry-leading insights, and a passion for sustainability to every client engagement.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle className="h-6 w-6 shrink-0 text-primary mt-0.5" />
                  <span className="text-foreground/90">{feature}</span>
                </motion.div>
              ))}
            </div>

            <blockquote className="border-l-4 border-primary bg-muted/50 p-6 rounded-r-lg italic text-muted-foreground">
              "We're more than advisors; we're strategic partners dedicated to helping you navigate sustainability challenges, optimise fleet management, and achieve lasting business success."
              <footer className="mt-2 text-sm font-semibold text-primary not-italic">
                — Alan Carreras, Founder
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
