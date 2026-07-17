import {
  Clock3,
  FileCheck2,
  FileClock,
  AlertTriangle,
} from "lucide-react";

import { Card } from "@/components/ui/Card";

import {
  DocumentRequest,
  RequestStatus,
} from "../types/request";

interface Props {
  requests: DocumentRequest[];
}

export function RequestSummaryCards({
  requests,
}: Props) {
  const total =
    requests.length;

  const completed =
    requests.filter(
      (request) =>
        request.status ===
        RequestStatus.COMPLETED,
    ).length;

  const pending =
    requests.filter(
      (request) =>
        request.status ===
          RequestStatus.SENT ||
        request.status ===
          RequestStatus.PARTIALLY_RECEIVED,
    ).length;

  const overdue =
    requests.filter(
      (request) =>
        request.status ===
        RequestStatus.OVERDUE,
    ).length;

  const cards = [
    {
      title: "Total Requests",
      value: total,
      icon: FileClock,
    },
    {
      title: "Pending",
      value: pending,
      icon: Clock3,
    },
    {
      title: "Completed",
      value: completed,
      icon: FileCheck2,
    },
    {
      title: "Overdue",
      value: overdue,
      icon: AlertTriangle,
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {cards.map((card) => {
        const Icon =
          card.icon;

        return (
          <Card
            key={card.title}
            className="p-5"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">
                  {card.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {card.value}
                </h2>
              </div>

              <Icon
                size={30}
                className="text-muted-foreground"
              />
            </div>
          </Card>
        );
      })}
    </div>
  );
}
