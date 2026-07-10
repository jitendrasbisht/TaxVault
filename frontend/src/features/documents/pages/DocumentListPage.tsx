import { PageHeader } from "@/components/ui/PageHeader";

export function DocumentListPage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="Document Vault"
        description="Manage client documents from one centralized workspace."
      />

      <div className="rounded-xl border border-slate-200 bg-white p-8">
        <p className="text-sm text-slate-500">
          Document Vault Workspace
        </p>
      </div>
    </div>
  );
}

export default DocumentListPage;