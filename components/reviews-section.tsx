import { Card } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    author: 'Dr. James Patterson',
    role: 'Sleep Scientist',
    avatar: '/professional-woman-scientist.png',
    rating: 5,
    text: 'Sleeping Devices provides the most comprehensive and scientifically rigorous reviews in the industry. Their testing methodology is exemplary.',
    device: 'Oura Ring Gen 4'
  },
  {
    author: 'David Rodriguez',
    role: 'Tech Reviewer',
    avatar: '/professional-tech-reviewer.png',
    rating: 5,
    text: 'After testing over 50 sleep trackers personally, I trust their recommendations completely. They catch details other reviewers miss.',
    device: 'Eight Sleep Pod 4'
  },
  {
    author: 'Lisa Anderson',
    role: 'Sleep Coach',
    avatar: '/professional-woman-health-coach.jpg',
    rating: 5,
    text: 'I recommend this site to all my clients. The reviews are honest, detailed, and actually help people make better purchasing decisions.',
    device: 'Hatch Restore 2'
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-serif text-3xl font-bold md:text-5xl text-balance">
            Trusted by Experts Worldwide
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Sleep professionals, researchers, and tech experts rely on our in-depth analysis
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.author} className="relative border-border bg-card p-8">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              
              <div className="mb-4 flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="mb-6 text-sm leading-relaxed text-card-foreground">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={review.avatar || "/placeholder.svg"} alt={review.author} />
                  <AvatarFallback>{review.author[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-card-foreground">{review.author}</p>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Reviewed: <span className="font-medium text-foreground">{review.device}</span>
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
