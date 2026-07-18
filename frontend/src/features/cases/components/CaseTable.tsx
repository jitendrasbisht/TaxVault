import { Link } from "react-router-dom";
import { Dropdown } from "@/components/ui/Dropdown";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Case } from "../types/case";

interface Props {
  cases: Case[];
  onEdit: (item: Case) => void;
  onDelete: (item: Case) => void;
}

export default function CaseTable({
  cases,
  onEdit,
  onDelete,
}: Props) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-left">Title</th>
              <th className="px-6 py-4 text-left">Type</th>
              <th className="px-6 py-4 text-left">Status</th>
              <th className="px-6 py-4 text-left">Priority</th>
              <th className="px-6 py-4 text-left">Assigned</th>
              <th className="px-6 py-4 text-left">Due Date</th>
              <th className="px-6 py-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {cases.map((item) => (
              <tr
                key={item.id}
                className="border-t hover:bg-slate-50"
              >
                <td className="px-6 py-4">
                  <Link
                    to={`/cases/${item.id}`}
                    className="font-semibold text-blue-600 hover:underline"
                  >
                    {item.title}
                  </Link>
                </td>

                <td className="px-6 py-4">
                  {item.case_type}
                </td>

                <td className="px-6 py-4">
                  <StatusBadge status="success">
                    {item.status}
                  </StatusBadge>
                </td>

                <td className="px-6 py-4">
                  {item.priority}
                </td>

                <td className="px-6 py-4">
                  {item.assigned_to}
                </td>

                <td className="px-6 py-4">
                  {item.due_date}
                </td>

                <td className="px-6 py-4 text-right">
                  <Dropdown
                    items={[
                      {
                        label: "View",
                        onClick: () =>
                          (window.location.href = `/cases/${item.id}`),
                      },
                      {
                        label: "Edit",
                        onClick: () => onEdit(item),
                      },
                      {
                        label: "Delete",
                        onClick: () => onDelete(item),
                      },
                    ]}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

