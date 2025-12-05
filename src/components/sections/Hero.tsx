'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowDown, Play } from 'lucide-react'
import { motion, useScroll, useTransform } from 'framer-motion'

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 150])
  const opacity = useTransform(scrollY, [0, 300], [1, 0])

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!mounted) return null

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950">
      {/* Animated Background Video */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://res.cloudinary.com/dd7svdirf/image/upload/v1745525981/cityscape-fallback_b3drkf.jpg"
          className="h-full w-full object-cover opacity-30"
        >
          <source
            src="https://res.cloudinary.com/dd7svdirf/video/upload/v1745525999/cityscape1a_rntv5f.webm"
            type="video/webm"
          />
          <source
            src="https://res.cloudinary.com/dd7svdirf/video/upload/v1745526129/cityscape1_gjmidm.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/50 via-blue-900/70 to-blue-950/90" />
      </motion.div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_100%)]" />

      {/* Content */}
      <motion.div
        className="container-wide relative z-10 px-6 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-lg border border-white/20"
          >
            <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
            <span>Enterprise Fleet Intelligence • 100% GDPR Compliant • AI-Powered</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl font-heading"
          >
            Transforming{' '}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Fleet Management
              </span>
              <motion.span
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-600/20 to-cyan-600/20 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mx-auto max-w-2xl text-xl text-blue-100 sm:text-2xl md:text-3xl"
          >
            AI/ML predictive analytics and zero-emission transformation delivering measurable ROI for UK enterprises
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 text-white"
          >
            {[
              { value: '500+', label: 'Vehicles Managed' },
              { value: '>2m', label: 'Records Processed' },
              { value: '>£250K', label: 'Annual Value' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-cyan-400 md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm text-blue-200">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              variant="gradient"
              size="xl"
              onClick={() => handleScrollTo('#contact')}
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">Get Free Consultation</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </Button>

            <Button
              variant="outline"
              size="xl"
              onClick={() => handleScrollTo('#services')}
              className="border-2 border-white/30 bg-white/10 text-white backdrop-blur-lg hover:bg-white/20 hover:border-white/50"
            >
              <Play className="mr-2 h-5 w-5" />
              Explore Services
            </Button>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          onClick={() => handleScrollTo('#about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="h-8 w-8" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
