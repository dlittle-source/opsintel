import ExecutiveHomeHero from "@/components/home/ExecutiveHomeHero";
import ExecutiveAIBriefing from "@/components/home/ExecutiveAIBriefing";
import ExecutiveReadinessSnapshot from "@/components/home/ExecutiveReadinessSnapshot";
import StrategicRecommendationsFeed from "@/components/home/StrategicRecommendationsFeed";
import AutonomousInsightsPanel from "@/components/home/AutonomousInsightsPanel";
import ExecutivePriorityQueue from "@/components/home/ExecutivePriorityQueue";
import OperationalAttentionCenter from "@/components/home/OperationalAttentionCenter";
import ExecutiveHomeCommandCenter from "@/components/home/ExecutiveHomeCommandCenter";
import ExecutiveHomeCompletionBanner from "@/components/home/ExecutiveHomeCompletionBanner";
import ExecutiveWorkspaceLaunchGrid from "@/components/home/ExecutiveWorkspaceLaunchGrid";
import ExecutiveHomeFooter from "@/components/home/ExecutiveHomeFooter";

export default function ExecutiveHomePage() {
  return (
    <div className="space-y-6">
      <ExecutiveHomeHero />

      <ExecutiveAIBriefing />

      <ExecutiveReadinessSnapshot />

      <div className="grid gap-6 min-[720px]:grid-cols-2">
        <StrategicRecommendationsFeed />
        <AutonomousInsightsPanel />
      </div>

      <div className="grid gap-6 min-[720px]:grid-cols-2">
        <ExecutivePriorityQueue />
        <OperationalAttentionCenter />
      </div>

      <ExecutiveHomeCommandCenter />

      <ExecutiveHomeCompletionBanner />

      <ExecutiveWorkspaceLaunchGrid />

      <ExecutiveHomeFooter />
    </div>
  );
}