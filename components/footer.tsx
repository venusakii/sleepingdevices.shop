import Link from 'next/link'
import { Moon } from 'lucide-react'

const footerLinks = {
  product: [
    { name: 'All Reviews', href: '#' },
    { name: 'Categories', href: '#' },
    { name: 'Comparison Tool', href: '#' },
    { name: 'Buying Guides', href: '#' },
  ],
  resources: [
    { name: 'Sleep Science', href: '#' },
    { name: 'How We Test', href: '#' },
    { name: 'Best of 2025', href: '#' },
    { name: 'Blog', href: '#' },
  ],
  company: [
    { name: 'About Us', href: '#' },
    { name: 'Our Team', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Careers', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Disclaimer', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-2 font-serif text-xl font-bold">
              <Moon className="h-6 w-6 text-primary" />
              <span className="text-foreground">Sleeping Devices</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Expert reviews and unbiased comparisons to help you find the perfect sleep technology.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Reviews</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Sleeping Devices. All rights reserved. Independent reviews since 2015.
          </p>
        </div>
      </div>
    </footer>
  )
}
