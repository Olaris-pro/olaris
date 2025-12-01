'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Truck, TrendingUp, Users, Network, ChevronDown, ChevronUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Service } from '@/types'

const services: Service[] = [
  {
    id: 'fleet-management',
    title: 'Fleet Management UK',
    description: 'Optimise operations with strategic fleet consulting for efficiency, sustainability, and profitability.',
    details: 'Our services cover vehicle leasing optimisation, smart telematics, and future-proof compliance for seamless fleet management. We help reduce costs by up to 10% while improving sustainability.',
    icon: 'truck',
    features: ['Vehicle leasing optimization', 'Smart telematics integration', 'Compliance management', 'Cost reduction strategies'],
  },
  {
    id: 'expansion-strategy',
    title: 'Expansion Strategy',
    description: 'Sustainable growth through data-driven market intelligence and risk-averse scaling.',
    details: 'We map competitor landscapes, identify white-space opportunities, and deliver actionable expansion blueprints tailored to your business goals.',
    icon: 'trending-up',
    features: ['Market analysis', 'Competitor mapping', 'Growth blueprints', 'Risk assessment'],
  },
  {
    id: 'strategic-advisory',
    title: 'Strategic Advisory',
    description: 'Align your fleet goals with corporate vision and long-term growth strategies.',
    details: 'Custom C-level advisory to integrate fleet transformation into overall business innovation pathways.',
    icon: 'users',
    features: ['C-level consulting', 'Strategic planning', 'Business transformation', 'Long-term roadmaps'],
  },
  {
    id: 'digital-integration',
    title: 'Digital Integration',
    description: 'Blockchain, Azure cloud, ESG tracking — drive next-generation compliance and efficiency.',
    details: 'Implement digital roadmaps tailored to your business size, ensuring transparency, security, and scalability.',
    icon: 'network',
    features: ['Blockchain solutions', 'Cloud integration', 'ESG tracking', 'Digital transformation'],
  },
]

const iconMap = {
  truck: Truck,
  'trending-up': TrendingUp,
  users: Users,
  network: Network,
}

export function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [expandedService, setExpandedService] = useState<string | null>(null)

  const toggleService = (id: string) => {
    setExpandedService(expandedService === id ? null : id)
  }

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container-wide" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-heading">
            Our Premium <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Empowering your fleet operations and business growth through innovation, expertise, and strategic excellence
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap]
            const isExpanded = expandedService === service.id

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-lg transition-all hover:shadow-2xl hover:scale-105 hover:-translate-y-1">
                  {/* Icon */}
                  <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold font-heading">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  {/* Expand Button */}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => toggleService(service.id)}
                    className="w-full"
                  >
                    {isExpanded ? (
                      <>
                        Hide Details <ChevronUp className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Learn More <ChevronDown className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>

                  {/* Expanded Details */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: isExpanded ? 'auto' : 0,
                      opacity: isExpanded ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 space-y-3 border-t border-border pt-4">
                      <p className="text-sm text-muted-foreground">
                        {service.details}
                      </p>
                      <ul className="space-y-2">
                        {service.features?.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center gap-2 text-sm"
                          >
                            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>

                {/* Decorative gradient */}
                <div className="absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 blur transition-opacity group-hover:opacity-20" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
