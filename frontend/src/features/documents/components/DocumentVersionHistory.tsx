import {
  CheckCircle2,
  History,
} from "lucide-react";

import { Badge } from "@/components/ui/Badge";

import { Document } from "../types/document";

interface Props {
  document: Document;
}

export default function DocumentVersionHistory({
  document,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-5 flex items-center gap-2">

        <History
          size={20}
          className="text-blue-600"
        />

        <h2 className="text-lg font-semibold">
          Version History
        </h2>

      </div>

      <div className="space-y-4">

        <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">

          <div>

            <div className="flex items-center gap-3">

              <span className="font-semibold">
                Version {document.version}
              </span>

              <Badge>
                Current
              </Badge>

            </div>

            <p className="mt-2 text-sm text-slate-500">
              Last updated{" "}
              {new Date(
                document.updatedAt,
              ).toLocaleDateString()}
            </p>

          </div>

          <CheckCircle2
            className="text-green-600"
            size={22}
          />

        </div>

      </div>

    </div>
  );
}