import { Clapperboard } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary">
            <Clapperboard className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight text-foreground">ScriptVision AI</h1>
            <p className="text-sm text-muted-foreground">Turn your screenplay into a breakdown in seconds</p>
          </div>
        </div>
      </div>
    </header>
  )
}
