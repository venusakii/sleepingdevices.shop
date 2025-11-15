import { Button } from '@/components/ui/button'
import { ArrowRight, Moon, Star } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-accent/20 to-background py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <Star className="h-4 w-4" />
            <span>Trusted by 50,000+ Sleep Seekers</span>
          </div>
          
          <h1 className="mb-6 max-w-4xl font-serif text-4xl font-bold leading-tight text-balance md:text-6xl lg:text-7xl">
            Discover Sleep Technology That Actually Works
          </h1>
          
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl text-pretty">
            Expert reviews and unbiased comparisons of the latest sleep devices, trackers, and gadgets. 
            Find the perfect solution for your best night's sleep.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-base">
              Browse Devices
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Read Latest Reviews
            </Button>
          </div>
          
          <div className="mt-16 w-full max-w-5xl">
            <div className="relative rounded-2xl border border-border bg-card p-4 shadow-2xl">
              <img
                src="/modern-bedroom-with-smart-sleep-devices-and-peacef.jpg"
                alt="Modern bedroom with sleep technology"
                className="w-full rounded-lg"
              />
              <div className="absolute -bottom-4 -right-4 rounded-lg bg-primary px-6 py-3 text-primary-foreground shadow-lg">
                <div className="flex items-center gap-2">
                  <Moon className="h-5 w-5" />
                  <span className="font-semibold">500+ Devices Reviewed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
