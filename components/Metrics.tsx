import StatStrip from "@/components/StatStrip";
import { metrics } from "@/data/metrics";
import { sectors } from "@/data/sectors";

export default function Metrics() {
  return (
    <section id="metrics" className="scroll-mt-20 py-20">
      <StatStrip
        stats={[
          ...metrics.map((metric) => ({ value: metric.display, label: metric.label })),
          { value: String(sectors.length), label: "Sectors covered" },
        ]}
      />
    </section>
  );
}
