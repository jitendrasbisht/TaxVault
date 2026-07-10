import { useMemo, useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Input } from "@/components/ui/Input";

import { useCompliance } from "../hooks/useCompliance";
import { ComplianceTask } from "../types";

export function ComplianceTaskTable() {
  const [search, setSearch] = useState("");

  const { tasks, loading } = useCompliance({
    search,
  });

  const filtered = useMemo(() => tasks, [tasks]);

  if (loading) {
    return (
      <Card className="p-6">
        <p className="text-sm text-slate-500">Loading...</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <Input
          placeholder="Search compliance..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-sm"
        />

        <Button>Add Compliance</Button>
      </div>

      {filtered.length === 0 ? (
        <EmptyState
          title="No compliance found"
          description="Try changing your search."
        />
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left">
                <th className="py-3">Title</th>
                <th>Client</th>
                <th>Assigned To</th>
                <th>Due Date</th>
                <th>Priority</th>
                <th>Status</th>
                <th className="w-40">Actions</th>
              </tr>
            </thead>

            <tbody>
              {filtered.map((task: ComplianceTask) => (
                <tr
                  key={task.id}
                  className="border-b last:border-none"
                >
                  <td className="py-4 font-medium">
                    {task.title}
                  </td>

                  <td>{task.clientName}</td>

                  <td>{task.assignedTo}</td>

                  <td>{task.dueDate}</td>

                  <td>
                    <Badge>{task.priority}</Badge>
                  </td>

                  <td>
                    <Badge>{task.status}</Badge>
                  </td>

                  <td>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost">
                        <Eye className="h-4 w-4" />
                      </Button>

                      <Button size="icon" variant="ghost">
                        <Pencil className="h-4 w-4" />
                      </Button>

                      <Button size="icon" variant="ghost">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}