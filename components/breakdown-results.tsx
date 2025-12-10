"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Users,
  Package,
  MapPin,
  Sun,
  Moon,
  Sunrise,
  Clapperboard,
  Zap,
} from "lucide-react";
import type { BreakdownData } from "@/lib/types";

interface BreakdownResultsProps {
  data: BreakdownData | null;
  isAnalyzing: boolean;
}

export function BreakdownResults({ data, isAnalyzing }: BreakdownResultsProps) {
  if (isAnalyzing) {
    return (
      <section className="w-full max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(5)].map((_, i) => (
            <Card key={i} className="bg-card border-border animate-pulse">
              <CardHeader className="pb-3">
                <div className="h-6 w-24 bg-muted rounded" />
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="h-4 w-full bg-muted rounded" />
                  <div className="h-4 w-3/4 bg-muted rounded" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
  }

  if (!data) {
    return (
      <section className="w-full max-w-5xl mx-auto">
        <div className="flex flex-col items-center justify-center py-16 text-center">
          <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-4">
            <Clapperboard className="w-8 h-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-2">
            Ready to Analyze
          </h3>
          <p className="text-muted-foreground max-w-md">
            Paste your screenplay scene above and click &quot;Break Down
            Scene&quot; to extract characters, props, locations, and more.
          </p>
        </div>
      </section>
    );
  }

  const getTimeIcon = (time: string) => {
    const timeLower = time.toLowerCase();
    if (timeLower.includes("night") || timeLower.includes("evening")) {
      return <Moon className="w-5 h-5" />;
    }
    if (
      timeLower.includes("dawn") ||
      timeLower.includes("dusk") ||
      timeLower.includes("morning")
    ) {
      return <Sunrise className="w-5 h-5" />;
    }
    return <Sun className="w-5 h-5" />;
  };

  return (
    <section className="w-full max-w-5xl mx-auto space-y-4">
      <div className="text-center mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Scene Breakdown
        </h2>
        <p className="text-sm text-muted-foreground">
          AI-extracted elements from your script
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Characters Card */}
        <Card className="bg-card border-border hover:border-primary/30 transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base font-medium text-foreground">
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                <Users className="w-4 h-4" />
              </div>
              Characters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1.5">
              {data.characters.map((character, index) => (
                <li
                  key={index}
                  className="text-sm text-card-foreground/90 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {character}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Props Card */}
        <Card className="bg-card border-border hover:border-primary/30 transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base font-medium text-foreground">
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                <Package className="w-4 h-4" />
              </div>
              Props
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1.5">
              {data.props.map((prop, index) => (
                <li
                  key={index}
                  className="text-sm text-card-foreground/90 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {prop}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Locations Card */}
        <Card className="bg-card border-border hover:border-primary/30 transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base font-medium text-foreground">
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                <MapPin className="w-4 h-4" />
              </div>
              Locations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1.5">
              {data.locations.map((location, index) => (
                <li
                  key={index}
                  className="text-sm text-card-foreground/90 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  {location}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Time of Day Card */}
        <Card className="bg-card border-border hover:border-primary/30 transition-colors">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base font-medium text-foreground">
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                {getTimeIcon(data.time_of_day)}
              </div>
              Time of Day
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-card-foreground/90 font-medium">
              {data.time_of_day}
            </p>
          </CardContent>
        </Card>

        {/* Actions Card - spans 2 columns on larger screens */}
        <Card className="bg-card border-border hover:border-primary/30 transition-colors md:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base font-medium text-foreground">
              <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center text-primary">
                <Zap className="w-4 h-4" />
              </div>
              Key Actions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {data.actions.map((action, index) => (
                <li
                  key={index}
                  className="text-sm text-card-foreground/90 flex items-start gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 shrink-0" />
                  <span className="line-clamp-2">{action}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
