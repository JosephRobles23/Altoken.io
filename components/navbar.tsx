"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { useTranslation } from 'react-i18next'
import { SignInDialog } from "@/components/auth/sign-in-dialog"
import { SignUpDialog } from "@/components/auth/sign-up-dialog"
import { LanguageSwitcher } from "@/components/ui/Navbar/language-switcher"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showSignIn, setShowSignIn] = useState(false)
  const [showSignUp, setShowSignUp] = useState(false)
  const { t } = useTranslation('common')

  const navLinks = [
    { href: "/", label: t('navigation.home') },
    { href: "/marketplace", label: t('navigation.marketplace') },
    { href: "/como-funciona", label: t('navigation.howItWorks') },
    { href: "/ecosistema", label: t('navigation.ecosystem') },
    { href: "/socios", label: t('navigation.partners') },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">A</span>
            </div>
            <span className="font-bold text-lg text-foreground hidden sm:inline">Altoken</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={() => setShowSignIn(true)}
              className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              {t('navigation.signIn')}
            </button>
            <button onClick={() => setShowSignUp(true)} className="btn-primary text-sm">
              {t('navigation.signUp')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 py-2">
              <LanguageSwitcher />
            </div>
            <button
              onClick={() => {
                setShowSignIn(true)
                setIsOpen(false)
              }}
              className="block w-full px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-muted rounded-lg transition-colors text-left"
            >
              {t('navigation.signIn')}
            </button>
            <button
              onClick={() => {
                setShowSignUp(true)
                setIsOpen(false)
              }}
              className="block w-full px-4 py-2 btn-primary text-sm text-center"
            >
              {t('navigation.signUp')}
            </button>
          </div>
        )}
      </div>

      {/* Auth Dialogs */}
      <SignInDialog
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        onSwitchToSignUp={() => {
          setShowSignIn(false)
          setShowSignUp(true)
        }}
      />
      <SignUpDialog
        isOpen={showSignUp}
        onClose={() => setShowSignUp(false)}
        onSwitchToSignIn={() => {
          setShowSignUp(false)
          setShowSignIn(true)
        }}
      />
    </nav>
  )
}
