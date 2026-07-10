import {
  CheckCircle2,
  Clock3,
  Upload,
} from "lucide-react";

import { Document } from "../types/document";

interface Props {
  document: Document;
}

export default function DocumentActivityTimeline({
  document,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      <h2 className="mb-6 text-lg font-semibold">
        Activity Timeline
      </h2>

      <div className="space-y-6">

        <TimelineRow
          icon={
            <Upload
              size={18}
            />
          }
          title="Uploaded"
          subtitle={
            document.uploadedBy
          }
          date={
            document.uploadedAt
          }
        />

        <TimelineRow
          icon={
            <Clock3
              size={18}
            />
          }
          title="Updated"
          subtitle={
            document.uploadedBy
          }
          date={
            document.updatedAt
          }
        />

        <TimelineRow
          icon={
            <CheckCircle2
              size={18}
            />
          }
          title="Current Version"
          subtitle={`v${document.version}`}
          date={
            document.updatedAt
          }
        />

      </div>

    </div>
  );
}

interface TimelineRowProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  date: string;
}

function TimelineRow({
  icon,
  title,
  subtitle,
  date,
}: TimelineRowProps) {
  return (
    <div className="flex gap-4">

      <div className="mt-1 rounded-full bg-slate-100 p-2">
        {icon}
      </div>

      <div>

        <p className="font-medium">
          {title}
        </p>

        <p className="text-sm text-slate-500">
          {subtitle}
        </p>

        <p className="text-xs text-slate-400">
          {new Date(
            date,
          ).toLocaleString()}
        </p>

      </div>

    </div>
  );
}