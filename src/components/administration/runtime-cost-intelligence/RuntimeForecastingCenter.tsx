import {
  CalendarClock,
  LineChart,
  TrendingUp,
  WalletCards,
} from "lucide-react";

export default function RuntimeForecastingCenter() {
  const forecasts = [
    {
      label: "Projected Monthly Spend",
      value: "$51,000",
      icon: WalletCards,
    },
    {
      label: "Growth Trend",
      value: "Moderate",
      icon: TrendingUp,
    },
    {
      label: "Forecast Accuracy",
      value: "96%",
      icon: LineChart,
    },
    {
      label: "Planning Horizon",
      value: "90 Days",
      icon: CalendarClock,
    },
  ];

  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-5">
        <h3 className="text-lg font-semibold">
          Runtime Forecasting Center
        </h3>

        <p className="mt-2 text-sm text-muted-foreground">
          Predictive financial intelligence supporting capacity
          planning, budget forecasting, and runtime cost trends.
        </p>
      </div>

      <div className="space-y-4">
        {forecasts.map((forecast) => {
          const Icon = forecast.icon;

          return (
            <div
              key={forecast.label}
              className="flex items-center justify-between rounded-xl border bg-background/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg border p-2">
                  <Icon className="h-4 w-4 text-primary" />
                </div>

                <span className="text-sm font-medium">
                  {forecast.label}
                </span>
              </div>

              <span className="text-sm text-muted-foreground">
                {forecast.value}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}