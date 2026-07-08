import Card from "./ui/Card";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
}

function KPICard({ title, value, change }: KPICardProps) {
  const isPositive = change.startsWith("+");

  return (
    <Card>
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-slate-500">
          {title}
        </h3>

        <p className="text-3xl font-bold text-slate-900">
          {value}
        </p>

        <p
          className={`text-sm font-medium ${
            isPositive ? "text-emerald-600" : "text-red-600"
          }`}
        >
          {change} this month
        </p>
      </div>
    </Card>
  );
}

export default KPICard;