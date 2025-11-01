"use client"

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from 'next/navigation'
import { useState, useTransition } from 'react'
import { motion } from 'framer-motion'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ]

  const currentLanguage = languages.find(lang => lang.code === locale)

  const handleLanguageChange = (newLocale: string) => {
    startTransition(() => {
      // Remove the current locale from the pathname
      const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
      // Navigate to the new locale
      router.push(`/${newLocale}${pathWithoutLocale}`)
      setIsOpen(false)
    })
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-border bg-background hover:bg-muted transition-colors duration-200"
        disabled={isPending}
      >
        <Globe size={16} className="text-muted-foreground" />
        <span className="text-sm font-medium">
          {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-muted-foreground"
        >
          ▼
        </motion.div>
      </button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          className="absolute top-full mt-2 right-0 bg-background border border-border rounded-lg shadow-lg overflow-hidden z-50 min-w-[140px]"
        >
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-muted transition-colors duration-200 ${
                locale === language.code ? 'bg-primary/10 text-primary' : 'text-foreground'
              }`}
              disabled={isPending}
            >
              <span className="text-lg">{language.flag}</span>
              <div>
                <div className="text-sm font-medium">{language.name}</div>
                <div className="text-xs text-muted-foreground">{language.code.toUpperCase()}</div>
              </div>
              {locale === language.code && (
                <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
              )}
            </button>
          ))}
        </motion.div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}