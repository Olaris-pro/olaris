'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Terms() {
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
            Terms of Service
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-muted-foreground">Last updated: December 2024</p>

            <h2>1. Introduction</h2>
            <p>
              These Terms of Service govern your use of the Olaris Consulting Limited website and services. By accessing our website, you agree to be bound by these terms.
            </p>

            <h2>2. Services</h2>
            <p>
              Olaris Consulting Limited provides fleet management consulting, AI/ML analytics solutions, zero-emission transformation planning, ESG compliance services, and enterprise software solutions. Specific service terms are outlined in individual client agreements.
            </p>

            <h2>3. Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, and software, is the property of Olaris Consulting Limited and is protected by UK and international copyright laws.
            </p>

            <h2>4. Use of Website</h2>
            <p>You agree to use this website only for lawful purposes and in a way that does not:</p>
            <ul>
              <li>Infringe the rights of others</li>
              <li>Restrict or inhibit anyone else&apos;s use of the website</li>
              <li>Breach any applicable laws or regulations</li>
            </ul>

            <h2>5. Limitation of Liability</h2>
            <p>
              While we strive to ensure accuracy, we make no warranties about the completeness, reliability, or accuracy of information on this website. Any reliance you place on such information is at your own risk.
            </p>

            <h2>6. Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of these external sites.
            </p>

            <h2>7. Governing Law</h2>
            <p>
              These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive jurisdiction of the courts of England and Wales.
            </p>

            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the website following any changes constitutes acceptance of those changes.
            </p>

            <h2>9. Contact Us</h2>
            <p>
              For any questions regarding these Terms of Service, please contact us at:
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
