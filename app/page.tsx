"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { ScriptInput } from "@/components/script-input";
import { BreakdownResults } from "@/components/breakdown-results";
import type { BreakdownData } from "@/lib/types";
import axios from "axios";

export default function Home() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [breakdownData, setBreakdownData] = useState<BreakdownData | null>(
    null
  );

  const handleAnalyze = async (script: string) => {
    try {
      setIsAnalyzing(true);
      setBreakdownData(null);

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/script`,
        {
          scriptText: script,
        }
      );

      setBreakdownData(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 container mx-auto px-4 py-8 flex flex-col gap-8">
        <ScriptInput onAnalyze={handleAnalyze} isAnalyzing={isAnalyzing} />
        <BreakdownResults data={breakdownData} isAnalyzing={isAnalyzing} />
      </div>
    </main>
  );
}
