import { FileText } from "lucide-react";

import { Card } from "@/components/ui/Card";

import { useDocumentAnalytics } from "../hooks/useDocumentAnalytics";

export function DocumentAnalyticsSummary() {
  const { analytics, loading } = useDocumentAnalytics();

  if (loading || !analytics) {
    return (
      <Card className="p-6">
        <p className="text-sm text-slate-500">Loading...</p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <div className="mb-5 flex items-center gap-3">
        <FileText className="h-6 w-6 text-amber-600" />

        <div>
          <h3 className="text-lg font-semibold">
            Document Analytics
          </h3>

          <p className="text-sm text-slate-500">
            Repository overview
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-slate-500">Total</p>
          <p className="text-2xl font-bold">
            {analytics.totalDocuments}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Uploaded
          </p>
          <p className="text-2xl font-bold text-blue-600">
            {analytics.uploadedThisMonth}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Expiring
          </p>
          <p className="text-2xl font-bold text-red-600">
            {analytics.expiringSoon}
          </p>
        </div>

        <div>
          <p className="text-sm text-slate-500">
            Archived
          </p>
          <p className="text-2xl font-bold text-slate-700">
            {analytics.archived}
          </p>
        </div>
      </div>
    </Card>
  );
}