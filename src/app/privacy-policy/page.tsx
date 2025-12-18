'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container-wide max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button asChild variant="ghost" className="mb-8">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl font-heading mb-8">
            Privacy Policy
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground">Last updated: December 2024</p>

            <h2>1. Introduction</h2>
            <p>
              Olaris Consulting Limited (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website olaris.co.uk.
            </p>

            <h2>2. Information We Collect</h2>
            <p>We may collect information you provide directly to us, such as:</p>
            <ul>
              <li>Name and contact information when you use our contact form</li>
              <li>Email address when you subscribe to our communications</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your enquiries and requests</li>
              <li>Send you information about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>4. Data Protection</h2>
            <p>
              We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, alteration, disclosure, or destruction. We are fully GDPR compliant and committed to maintaining bank-level security standards.
            </p>

            <h2>5. Your Rights</h2>
            <p>Under GDPR, you have the right to:</p>
            <ul>
              <li>Access your personal data</li>
              <li>Rectify inaccurate personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Data portability</li>
            </ul>

            <h2>6. Cookies</h2>
            <p>
              Our website uses essential cookies to ensure proper functionality. We do not use tracking or advertising cookies without your explicit consent.
            </p>

            <h2>7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <p>
              <strong>Olaris Consulting Limited</strong><br />
              10 Bull Street, Aston<br />
              Nr Bampton, OX18 2DN<br />
              United Kingdom<br />
              Email: alan@olaris.co.uk
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
