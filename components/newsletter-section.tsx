'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'

export function NewsletterSection() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log('Newsletter signup:', email)
  }

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Mail className="h-8 w-8" />
          </div>
          
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-5xl text-balance">
            Get Sleep Tech Insights Weekly
          </h2>
          
          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            Join 50,000+ subscribers receiving expert reviews, exclusive deals, and the latest 
            sleep science research delivered to your inbox every Tuesday.
          </p>
          
          <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" size="lg">
              Subscribe
            </Button>
          </form>
          
          <p className="mt-4 text-xs text-muted-foreground">
            No spam. Unsubscribe anytime. Read our{' '}
            <a href="#" className="underline hover:text-foreground">
              privacy policy
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
