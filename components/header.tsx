import Link from 'next/link'
import { Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 font-serif text-xl font-bold">
          <Moon className="h-6 w-6 text-primary" />
          <span className="text-foreground">Sleeping Devices</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#categories" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Categories
          </Link>
          <Link href="#reviews" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Reviews
          </Link>
          <Link href="#compare" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Compare
          </Link>
          <Link href="#science" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Sleep Science
          </Link>
          <Button size="sm" className="ml-4">
            Newsletter
          </Button>
        </nav>
      </div>
    </header>
  )
}
