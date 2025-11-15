import { CheckCircle2 } from 'lucide-react'

const benefits = [
  {
    title: 'Expert Analysis',
    description: 'Our team of sleep scientists and tech reviewers test every device thoroughly'
  },
  {
    title: 'Unbiased Reviews',
    description: 'We purchase all devices ourselves and never accept payment for positive reviews'
  },
  {
    title: 'Real Testing',
    description: 'Every device is tested for at least 30 nights in real-world conditions'
  },
  {
    title: 'Data-Driven',
    description: 'We measure accuracy, effectiveness, and reliability with scientific methods'
  },
]

export function BenefitsSection() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 className="mb-6 font-serif text-3xl font-bold md:text-5xl text-balance">
              Why Trust Our Reviews?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
              We're committed to helping you find sleep technology that genuinely improves your rest. 
              Our rigorous testing process ensures you get accurate, reliable information.
            </p>
            
            <div className="space-y-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-foreground">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-2xl border border-border bg-card p-4 shadow-xl">
              <img
                src="/sleep-scientist-testing-smart-devices-in-modern-la.jpg"
                alt="Sleep testing laboratory"
                className="w-full rounded-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rounded-lg bg-secondary px-6 py-4 text-secondary-foreground shadow-lg">
              <p className="text-2xl font-bold">10+ Years</p>
              <p className="text-sm">Testing Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
