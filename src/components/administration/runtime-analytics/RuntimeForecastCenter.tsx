const forecasts = [
  {
    category: "Compute Demand",
    prediction: "+14%",
    horizon: "30 Days",
  },
  {
    category: "Storage Growth",
    prediction: "+8%",
    horizon: "90 Days",
  },
  {
    category: "Deployment Volume",
    prediction: "+22%",
    horizon: "30 Days",
  },
  {
    category: "Incident Reduction",
    prediction: "-11%",
    horizon: "60 Days",
  },
];

export default function RuntimeForecastCenter() {
  return (
    <section className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-white">
          Runtime Forecast Center
        </h3>

        <p className="mt-2 text-sm text-slate-400">
          Predictive analytics estimate future demand, growth trends, and
          operational conditions to improve planning and capacity readiness.
        </p>
      </div>

      <div className="space-y-4">
        {forecasts.map((forecast) => (
          <div
            key={forecast.category}
            className="rounded-xl border border-slate-800 bg-slate-900/70 p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-medium text-cyan-300">
                  {forecast.category}
                </h4>

                <p className="mt-1 text-sm text-slate-400">
                  Forecast Window: {forecast.horizon}
                </p>
              </div>

              <div className="rounded-lg border border-violet-500/30 bg-violet-500/10 px-3 py-2 text-sm text-violet-300">
                {forecast.prediction}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}