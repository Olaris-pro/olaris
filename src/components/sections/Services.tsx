'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Truck, TrendingUp, Users, Network, ChevronDown, ChevronUp, Brain, Leaf, Zap, Shield, Car, ClipboardCheck } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Service } from '@/types'

const services: Service[] = [
  {
    id: 'ai-fleet-intelligence',
    title: 'AI Fleet Intelligence',
    description: 'Machine learning-powered predictive maintenance and driver safety scoring delivering measurable ROI.',
    details: 'XGBoost ML models analysing 1.9M+ telemetry records. Predictive maintenance system with 40+ engineered features, real-time risk classification, and driver behaviour analytics. Successfully deployed for major UK organisations achieving >£15K annual savings per client.',
    icon: 'brain',
    features: ['Predictive maintenance (ML-powered)', 'Driver safety scoring (insurance integration)', 'Real-time anomaly detection', '>£15K annual ROI per client'],
  },
  {
    id: 'zero-emission-transformation',
    title: 'Zero-Emission Transformation',
    description: '5-year TCO analysis, 3-phase transition roadmaps, and charging infrastructure planning for EV fleets.',
    details: 'Comprehensive EV transition planning with OpenChargeMap integration, depot vs public charging cost-benefit analysis, and government incentive optimisation. Integration with 500+ real EV models and payback period calculations. Proven >£50K engagement value.',
    icon: 'zap',
    features: ['5-year TCO calculator (ICE vs EV)', '3-phase transition roadmaps', 'Charging infrastructure planning', '>£50K project value'],
  },
  {
    id: 'esg-carbon-intelligence',
    title: 'ESG & Carbon Intelligence',
    description: 'Full Scope 1/2/3 emissions tracking, SECR compliance automation, and carbon offset marketplace integration.',
    details: 'UK DEFRA 2024 emission factors with automated SECR report generation (PDF + JSON). Real-time ESG dashboards tracking carbon emissions for mixed fleets. Custom fuel/energy rates tracking home EV charging savings (up to 70% vs market rates). Delivering >£4K annual compliance time savings.',
    icon: 'leaf',
    features: ['Scope 1/2/3 emissions tracking', 'SECR compliance automation', 'Carbon offset marketplace', '>£4K annual savings'],
  },
  {
    id: 'enterprise-integration-security',
    title: 'Enterprise Integration & Security',
    description: 'Multi-tenant SaaS architecture, 100% GDPR compliance, webhook infrastructure, and automated compliance.',
    details: 'Tenant-level security with JWT + Row-Level Security (RLS). Full GDPR Article 15 compliance with automated DSAR processing. Webhook infrastructure supporting event types with circuit breaker and dead letter queue. Foundation for >£15K annual integration efficiency.',
    icon: 'shield',
    features: ['100% GDPR Article 15 compliant', 'Tenant-level security (JWT + RLS)', 'Webhook infrastructure (27 events)', '>£15K annual efficiency'],
  },
  {
    id: 'grey-fleet-duty-of-care',
    title: 'Grey Fleet & Duty of Care',
    description: 'Complete grey fleet management with live DVLA API integration for vehicle and driver compliance checks.',
    details: 'Comprehensive driver duty of care compliance featuring real-time DVLA API checks for licence validation, vehicle MOT status, and tax verification. Grey fleet onboarding with document management, insurance verification, and automated expiry alerts. Reduces compliance risk and administrative burden.',
    icon: 'car',
    features: ['Live DVLA API vehicle checks', 'Driver licence validation', 'Grey fleet onboarding portal', 'Automated compliance alerts'],
  },
  {
    id: 'leased-fleet-compliance',
    title: 'Leased Fleet Compliance',
    description: 'Rule-based automated DVLA API checks for leased fleet duty of care with secure tenant access.',
    details: 'Automated compliance management for leased vehicles with rule-based DVLA API live checking. GDPR compliant with secure permission-based tenant access. Supports nominated drivers and contractor functionality with configurable check frequencies and automated alert workflows.',
    icon: 'clipboard-check',
    features: ['Rule-based automated DVLA checks', 'Nominated driver & contractor support', 'Secure permission-based access', 'GDPR compliant tenant isolation'],
  },
]

const iconMap = {
  brain: Brain,
  zap: Zap,
  leaf: Leaf,
  shield: Shield,
  car: Car,
  'clipboard-check': ClipboardCheck,
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
