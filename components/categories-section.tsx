import { Card } from '@/components/ui/card'
import { Activity, Brain, Headphones, Moon, ThermometerSun, Watch, Wind, Zap } from 'lucide-react'

const categories = [
  {
    icon: Watch,
    name: 'Sleep Trackers',
    description: 'Monitor your sleep patterns and quality',
    count: '120+ devices'
  },
  {
    icon: Headphones,
    name: 'White Noise Machines',
    description: 'Block distractions for peaceful rest',
    count: '85+ devices'
  },
  {
    icon: Moon,
    name: 'Smart Sleep Masks',
    description: 'Block light and enhance REM sleep',
    count: '45+ devices'
  },
  {
    icon: Brain,
    name: 'Sleep Headbands',
    description: 'Brain-sensing technology for better sleep',
    count: '30+ devices'
  },
  {
    icon: ThermometerSun,
    name: 'Temperature Control',
    description: 'Mattress pads and climate systems',
    count: '55+ devices'
  },
  {
    icon: Wind,
    name: 'Air Purifiers',
    description: 'Clean air for healthier sleep',
    count: '70+ devices'
  },
  {
    icon: Activity,
    name: 'Smart Mattresses',
    description: 'Adaptive comfort technology',
    count: '40+ devices'
  },
  {
    icon: Zap,
    name: 'Light Therapy',
    description: 'Wake up naturally with sunrise alarms',
    count: '60+ devices'
  },
]

export function CategoriesSection() {
  return (
    <section id="categories" className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-5xl text-balance">
            Explore Sleep Device Categories
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            From smart trackers to climate control, find the perfect technology to transform your sleep
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="group cursor-pointer border-border bg-card p-6 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 font-serif text-xl font-semibold text-card-foreground">
                {category.name}
              </h3>
              <p className="mb-3 text-sm text-muted-foreground leading-relaxed">
                {category.description}
              </p>
              <p className="text-xs font-medium text-primary">{category.count}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
