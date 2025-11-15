import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { ArrowRight, Scale } from 'lucide-react'

export function ComparisonSection() {
  return (
    <section id="compare" className="bg-gradient-to-b from-muted/30 to-background py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <Card className="overflow-hidden border-border bg-card">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Scale className="h-6 w-6" />
              </div>
              
              <h2 className="mb-4 font-serif text-3xl font-bold text-card-foreground md:text-4xl text-balance">
                Compare Devices Side-by-Side
              </h2>
              
              <p className="mb-6 text-lg text-muted-foreground leading-relaxed">
                Use our interactive comparison tool to see how different sleep devices stack up. 
                Compare features, accuracy, battery life, price, and our expert ratings all in one place.
              </p>
              
              <ul className="mb-8 space-y-3">
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  Compare up to 4 devices at once
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  See detailed specs and test results
                </li>
                <li className="flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                  Get personalized recommendations
                </li>
              </ul>
              
              <Button size="lg" className="w-fit">
                Open Comparison Tool
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="relative bg-muted p-8 lg:p-12">
              <img
                src="/comparison-chart-interface-showing-sleep-devices-s.jpg"
                alt="Device comparison interface"
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
