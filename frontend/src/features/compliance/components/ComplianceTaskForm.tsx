import { useState } from "react";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

import {
  ComplianceFrequency,
  CompliancePriority,
  ComplianceStatus,
  ComplianceTask,
} from "../types";

interface ComplianceTaskFormProps {
  initialValue?: Partial<ComplianceTask>;
  onSubmit: (task: Omit<ComplianceTask, "id">) => void;
  onCancel: () => void;
}

const priorities: CompliancePriority[] = [
  "Low",
  "Medium",
  "High",
  "Critical",
];

const statuses: ComplianceStatus[] = [
  "Pending",
  "In Progress",
  "Completed",
  "Overdue",
];

const frequencies: ComplianceFrequency[] = [
  "One Time",
  "Weekly",
  "Monthly",
  "Quarterly",
  "Half Yearly",
  "Yearly",
];

export function ComplianceTaskForm({
  initialValue,
  onSubmit,
  onCancel,
}: ComplianceTaskFormProps) {
  const [form, setForm] = useState({
    title: initialValue?.title ?? "",
    description: initialValue?.description ?? "",
    clientId: initialValue?.clientId ?? "",
    clientName: initialValue?.clientName ?? "",
    assignedTo: initialValue?.assignedTo ?? "",
    priority: initialValue?.priority ?? "Medium",
    status: initialValue?.status ?? "Pending",
    frequency: initialValue?.frequency ?? "Monthly",
    dueDate: initialValue?.dueDate ?? "",
    recurring: initialValue?.recurring ?? true,
  });

  const handleSubmit = () => {
    onSubmit({
      ...form,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: [],
      timeline: [],
      activity: [],
    });
  };

  return (
    <Card className="space-y-5 p-6">
      <Input
        placeholder="Task Title"
        value={form.title}
        onChange={(e) =>
          setForm({ ...form, title: e.target.value })
        }
      />

      <Input
        placeholder="Description"
        value={form.description}
        onChange={(e) =>
          setForm({
            ...form,
            description: e.target.value,
          })
        }
      />

      <Input
        placeholder="Client Name"
        value={form.clientName}
        onChange={(e) =>
          setForm({
            ...form,
            clientName: e.target.value,
          })
        }
      />

      <Input
        placeholder="Assigned To"
        value={form.assignedTo}
        onChange={(e) =>
          setForm({
            ...form,
            assignedTo: e.target.value,
          })
        }
      />

      <Input
        type="date"
        value={form.dueDate}
        onChange={(e) =>
          setForm({
            ...form,
            dueDate: e.target.value,
          })
        }
      />

      <div className="grid grid-cols-3 gap-4">
        <select
          className="rounded-md border p-2"
          value={form.priority}
          onChange={(e) =>
            setForm({
              ...form,
              priority: e.target.value as CompliancePriority,
            })
          }
        >
          {priorities.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <select
          className="rounded-md border p-2"
          value={form.status}
          onChange={(e) =>
            setForm({
              ...form,
              status: e.target.value as ComplianceStatus,
            })
          }
        >
          {statuses.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>

        <select
          className="rounded-md border p-2"
          value={form.frequency}
          onChange={(e) =>
            setForm({
              ...form,
              frequency: e.target.value as ComplianceFrequency,
            })
          }
        >
          {frequencies.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>

      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onCancel}>
          Cancel
        </Button>

        <Button onClick={handleSubmit}>
          Save Compliance
        </Button>
      </div>
    </Card>
  );
}