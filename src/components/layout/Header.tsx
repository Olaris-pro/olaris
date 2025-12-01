'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '#contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false)
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'glass shadow-lg backdrop-blur-xl bg-white/80 dark:bg-gray-950/80'
          : 'bg-transparent'
      )}
    >
      <nav className="container-wide flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 group"
          aria-label="Olaris Consulting Home"
        >
          <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-primary/20 transition-transform group-hover:scale-110 group-hover:ring-primary/40">
            <Image
              src="https://res.cloudinary.com/dd7svdirf/image/upload/v1745526178/logo_mxa378.jpg"
              alt="Olaris Consulting Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          <span className="hidden text-xl font-bold text-foreground sm:block font-heading">
            Olaris Consulting
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-2 lg:flex">
          {navigation.map((item) => (
            <Button
              key={item.name}
              variant="ghost"
              asChild
              className="text-base hover:text-primary"
            >
              {item.href.startsWith('#') ? (
                <button onClick={() => handleNavClick(item.href)}>
                  {item.name}
                </button>
              ) : (
                <Link href={item.href}>{item.name}</Link>
              )}
            </Button>
          ))}
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          {mounted && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
              className="rounded-full"
            >
              {theme === 'dark' ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>
          )}

          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden rounded-full"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>

          {/* CTA Button - Desktop */}
          <Button variant="gradient" size="lg" className="hidden lg:flex" asChild>
            <button onClick={() => handleNavClick('#contact')}>
              Get Started
            </button>
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="glass-dark border-t border-border lg:hidden">
          <div className="container-wide flex flex-col gap-2 py-4">
            {navigation.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                className="w-full justify-start text-base"
                asChild={!item.href.startsWith('#')}
                onClick={() => handleNavClick(item.href)}
              >
                {item.href.startsWith('#') ? (
                  <button className="w-full text-left">{item.name}</button>
                ) : (
                  <Link href={item.href}>{item.name}</Link>
                )}
              </Button>
            ))}
            <Button
              variant="gradient"
              size="lg"
              className="mt-4 w-full"
              onClick={() => handleNavClick('#contact')}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
