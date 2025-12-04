'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Send, Loader2 } from 'lucide-react'
import Image from 'next/image'
import type { ContactFormData } from '@/types'

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('https://formspree.io/f/mqaqazog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
      <div className="container-wide" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-heading">
            Let's <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="mt-6 text-lg text-blue-100">
            Ready to transform your fleet operations? Get in touch today.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 items-start">
          {/* Profile & Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="glass rounded-2xl p-8 text-center">
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full ring-4 ring-white/20 mb-6">
                <Image
                  src="https://res.cloudinary.com/dd7svdirf/image/upload/v1745526187/profile_ixlfbz.png"
                  alt="Alan Carreras, Founder of Olaris Consulting"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Alan Carreras</h3>
              <p className="text-blue-200 mb-4">Founder & CEO</p>
              <p className="text-sm text-blue-100">
                Oxfordshire-based consultant with 30 years of fleet management expertise. Let's discuss your business goals together.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="glass rounded-xl p-6 flex items-start gap-4 hover:bg-white/20 transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Mail className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a
                    href="mailto:alan@olaris.co.uk"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    alan@olaris.co.uk
                  </a>
                </div>
              </div>

              <div className="glass rounded-xl p-6 flex items-start gap-4 hover:bg-white/20 transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <Phone className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Phone</div>
                  <a
                    href="tel:+447919354068"
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    +44-7919-35-40-68
                  </a>
                </div>
              </div>

              <div className="glass rounded-xl p-6 flex items-start gap-4 hover:bg-white/20 transition-colors">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <MapPin className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Address</div>
                  <p className="text-blue-200">
                    10 Bull Street, Aston<br />
                    Nr Bampton, OX18 2DN, UK
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass rounded-2xl p-8 space-y-6"
            >
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name *
                </label>
                <Input
                  id="name"
                  {...register('name')}
                  placeholder="Your full name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200/50 focus:border-cyan-400"
                />
                {errors.name && (
                  <p className="text-sm text-red-300">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email *
                </label>
                <Input
                  id="email"
                  type="email"
                  {...register('email')}
                  placeholder="your@email.com"
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200/50 focus:border-cyan-400"
                />
                {errors.email && (
                  <p className="text-sm text-red-300">{errors.email.message}</p>
                )}
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    {...register('phone')}
                    placeholder="+44"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200/50 focus:border-cyan-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company
                  </label>
                  <Input
                    id="company"
                    {...register('company')}
                    placeholder="Your company"
                    className="bg-white/10 border-white/20 text-white placeholder:text-blue-200/50 focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message *
                </label>
                <Textarea
                  id="message"
                  {...register('message')}
                  placeholder="Tell us about your fleet management needs..."
                  rows={5}
                  className="bg-white/10 border-white/20 text-white placeholder:text-blue-200/50 focus:border-cyan-400 resize-none"
                />
                {errors.message && (
                  <p className="text-sm text-red-300">{errors.message.message}</p>
                )}
              </div>

              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </>
                )}
              </Button>

              {submitStatus === 'success' && (
                <div className="rounded-lg bg-green-500/20 border border-green-500/30 p-4 text-center text-green-100">
                  ✓ Thank you! We'll get back to you soon.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="rounded-lg bg-red-500/20 border border-red-500/30 p-4 text-center text-red-100">
                  Failed to send message. Please try again or email us directly.
                </div>
              )}

              <p className="text-center text-sm text-blue-200">
                🔒 100% Secure | No Spam | Direct response within 24 hours
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
