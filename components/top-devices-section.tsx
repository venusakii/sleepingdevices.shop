import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Award } from 'lucide-react'

const devices = [
  {
    name: 'Oura Ring Gen 4',
    category: 'Sleep Tracker',
    rating: 9.4,
    image: '/oura-smart-ring-black-minimal.jpg',
    price: '$349',
    badge: "Editor's Choice",
    highlights: ['99% accurate tracking', 'Battery: 7 days', 'Lightweight design']
  },
  {
    name: 'Hatch Restore 2',
    category: 'Light Therapy',
    rating: 9.1,
    image: '/modern-sunrise-alarm-clock-white.jpg',
    price: '$199',
    badge: 'Best Value',
    highlights: ['Natural wake-up', 'Smart features', 'White noise library']
  },
  {
    name: 'Eight Sleep Pod 4',
    category: 'Smart Mattress',
    rating: 9.6,
    image: '/smart-mattress-cover-temperature-control.jpg',
    price: '$2,695',
    badge: 'Premium Pick',
    highlights: ['Dual-zone cooling', 'AI optimization', 'Health tracking']
  },
  {
    name: 'Muse S Gen 2',
    category: 'Sleep Headband',
    rating: 8.8,
    image: '/sleep-headband-brain-sensing-black.jpg',
    price: '$399',
    badge: 'Best Tech',
    highlights: ['EEG brain sensing', 'Real-time feedback', 'Meditation guides']
  },
]

export function TopDevicesSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-5xl text-balance">
            Top-Rated Sleep Devices 2025
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Our highest-scoring devices based on rigorous testing and real-world performance
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {devices.map((device) => (
            <Card key={device.name} className="group overflow-hidden border-border bg-card transition-all hover:shadow-xl">
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={device.image || "/placeholder.svg"}
                  alt={device.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <Badge className="absolute top-3 right-3 bg-primary text-primary-foreground">
                  <Award className="mr-1 h-3 w-3" />
                  {device.badge}
                </Badge>
              </div>
              
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {device.category}
                  </span>
                  <div className="flex items-center gap-1 text-sm font-bold text-foreground">
                    <Star className="h-4 w-4 fill-primary text-primary" />
                    {device.rating}
                  </div>
                </div>
                
                <h3 className="mb-2 font-serif text-xl font-semibold text-card-foreground">
                  {device.name}
                </h3>
                
                <ul className="mb-4 space-y-1">
                  {device.highlights.map((highlight) => (
                    <li key={highlight} className="text-xs text-muted-foreground">
                      • {highlight}
                    </li>
                  ))}
                </ul>
                
                <div className="flex items-center justify-between">
                  
                  <Button size="sm" variant="outline">
                    Read Review
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            View All Reviews
          </Button>
        </div>
      </div>
    </section>
  )
}
