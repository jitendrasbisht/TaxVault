import { Document } from "../types/document";

interface DocumentActivityTimelineProps {
  document: Document;
}

export default function DocumentActivityTimeline({
  document,
}: DocumentActivityTimelineProps) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-lg font-semibold text-slate-900">
        Activity Timeline
      </h2>

      <div className="space-y-5">

        <TimelineItem
          title="Document Uploaded"
          value={document.uploadedBy}
          date={document.uploadedAt}
        />

        <TimelineItem
          title="Last Updated"
          value={document.uploadedBy}
          date={document.updatedAt}
        />

      </div>
    </div>
  );
}

interface TimelineItemProps {
  title: string;
  value: string;
  date: string;
}

function TimelineItem({
  title,
  value,
  date,
}: TimelineItemProps) {
  return (
    <div className="border-l-2 border-blue-500 pl-4">
      <p className="font-medium">
        {title}
      </p>

      <p className="text-sm text-slate-600">
        {value}
      </p>

      <p className="text-xs text-slate-400">
        {new Date(date).toLocaleString()}
      </p>
    </div>
  );
}