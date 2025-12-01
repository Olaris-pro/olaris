'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Testimonial } from '@/types'

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'Alan has extensive knowledge and vast experience in fleet management and financial services. His strategic insights and practical recommendations are incredibly valuable and effective. Alan is a highly recommended industry professional!',
    author: 'Industry Colleague',
    role: 'Fleet Operations Director',
    company: 'LinkedIn Recommendation',
  },
  {
    id: '2',
    quote: 'Alan consistently demonstrates strategic thinking and a deep understanding of the complexities involved in fleet management. His expertise has significantly contributed to the growth and operational success of our organisation.',
    author: 'Business Partner',
    role: 'Managing Director',
    company: 'LinkedIn Recommendation',
  },
]

export function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-24 bg-background">
      <div className="container-wide" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-heading">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Trusted by industry leaders across the UK
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl border border-border bg-card p-8 shadow-lg hover:shadow-xl transition-shadow">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg">
                  <Quote className="h-6 w-6" />
                </div>

                {/* Stars */}
                <div className="mb-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground/90 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="mt-6 flex items-center gap-4 border-t border-border pt-6">
                  <div className="flex-1">
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    {testimonial.company && (
                      <div className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Button
            variant="gradient"
            size="xl"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See How We Can Help You
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
