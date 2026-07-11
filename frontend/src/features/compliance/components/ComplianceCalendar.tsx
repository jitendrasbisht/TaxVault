import { Card } from "@/components/ui/Card";

import { useComplianceDashboard } from "../hooks/useComplianceDashboard";

export function ComplianceCalendar() {
  const { calendarEvents, loading } = useComplianceDashboard();

  return (
    <Card className="p-6">
      <h2 className="mb-4 text-lg font-semibold">
        Compliance Calendar
      </h2>

      {loading ? (
        <p className="text-sm text-slate-500">
          Loading calendar...
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b">
                <th className="py-3 text-left">Due Date</th>
                <th className="text-left">Task</th>
                <th className="text-left">Priority</th>
                <th className="text-left">Status</th>
              </tr>
            </thead>

            <tbody>
              {calendarEvents.map((event) => (
                <tr
                  key={event.id}
                  className="border-b last:border-none"
                >
                  <td className="py-3">{event.dueDate}</td>
                  <td>{event.title}</td>
                  <td>{event.priority}</td>
                  <td>{event.status}</td>
                </tr>
              ))}

              {calendarEvents.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="py-8 text-center text-slate-500"
                  >
                    No upcoming compliance events.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}