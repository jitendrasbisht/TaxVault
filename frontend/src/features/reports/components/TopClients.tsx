import { Card } from "@/components/ui/Card";

const clients = [
  {
    name: "ABC Pvt Ltd",
    revenue: "₹42.8 L",
  },
  {
    name: "XYZ Industries",
    revenue: "₹37.4 L",
  },
  {
    name: "Sunrise LLP",
    revenue: "₹31.6 L",
  },
  {
    name: "Global Traders",
    revenue: "₹28.9 L",
  },
  {
    name: "Prime Solutions",
    revenue: "₹24.1 L",
  },
];

export function TopClients() {
  return (
    <Card className="p-6">
      <h3 className="mb-6 text-lg font-semibold">
        Top Clients
      </h3>

      <div className="space-y-4">
        {clients.map((client, index) => (
          <div
            key={client.name}
            className="flex items-center justify-between border-b border-slate-100 pb-3 last:border-0"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 font-semibold text-blue-700">
                {index + 1}
              </div>

              <span className="font-medium">
                {client.name}
              </span>
            </div>

            <span className="font-semibold text-emerald-600">
              {client.revenue}
            </span>
          </div>
        ))}
      </div>
    </Card>
  );
}