"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Loader2, Sparkles } from "lucide-react"

interface ScriptInputProps {
  onAnalyze: (script: string) => void
  isAnalyzing: boolean
}

export function ScriptInput({ onAnalyze, isAnalyzing }: ScriptInputProps) {
  const [script, setScript] = useState("")

  const handleSubmit = () => {
    if (script.trim()) {
      onAnalyze(script)
    }
  }

  return (
    <section className="w-full max-w-3xl mx-auto space-y-4">
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-2xl font-semibold text-foreground">Analyze Your Scene</h2>
        <p className="text-muted-foreground">
          Paste your screenplay scene below and let AI extract the breakdown elements
        </p>
      </div>

      <div className="relative">
        <Textarea
          placeholder="Paste your scene script here (EXT. DAY - CITY STREET)...

JOHN walks down the busy street, phone in hand. He stops at a coffee shop, checking his watch.

SARAH exits the shop, nearly colliding with him. They lock eyes..."
          value={script}
          onChange={(e) => setScript(e.target.value)}
          className="min-h-[220px] resize-none bg-input border-border text-foreground placeholder:text-muted-foreground/60 text-base leading-relaxed p-4 focus:ring-2 focus:ring-primary/50"
          disabled={isAnalyzing}
        />
      </div>

      <Button
        onClick={handleSubmit}
        disabled={!script.trim() || isAnalyzing}
        className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90 text-primary-foreground transition-all"
        size="lg"
      >
        {isAnalyzing ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Analyzing Script...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5 mr-2" />
            Break Down Scene
          </>
        )}
      </Button>
    </section>
  )
}
