import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { BookOpen, Brain, LineChart, Sparkles } from 'lucide-react'

const articles = [
  {
    icon: Brain,
    title: 'How Sleep Trackers Actually Work',
    description: 'Deep dive into the sensors, algorithms, and accuracy of modern sleep tracking technology',
    readTime: '8 min read'
  },
  {
    icon: LineChart,
    title: 'Understanding Your Sleep Stages',
    description: 'Learn about REM, deep sleep, and light sleep—and why they matter for your health',
    readTime: '6 min read'
  },
  {
    icon: Sparkles,
    title: 'The Science of Temperature & Sleep',
    description: 'Why cooling your body is crucial for falling asleep and staying asleep longer',
    readTime: '7 min read'
  },
  {
    icon: BookOpen,
    title: 'White Noise vs Pink Noise',
    description: 'Which sound frequencies are best for masking disturbances and improving sleep quality',
    readTime: '5 min read'
  },
]

export function ScienceSection() {
  return (
    <section id="science" className="py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-5xl text-balance">
            Sleep Science Education
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Understand the science behind better sleep and make informed decisions about sleep technology
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Card
              key={article.title}
              className="group cursor-pointer border-border bg-card p-8 transition-all hover:border-primary hover:shadow-lg"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <article.icon className="h-7 w-7" />
              </div>
              
              <h3 className="mb-3 font-serif text-2xl font-semibold text-card-foreground">
                {article.title}
              </h3>
              
              <p className="mb-4 text-muted-foreground leading-relaxed">
                {article.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{article.readTime}</span>
                <Button variant="ghost" size="sm" className="group-hover:text-primary">
                  Read Article →
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            Browse All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}
