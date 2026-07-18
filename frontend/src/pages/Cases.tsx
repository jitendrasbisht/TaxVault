import { useMemo, useState } from "react";

import { Button } from "@/components/ui/Button";
import { EmptyState } from "@/components/ui/EmptyState";
import { PageHeader } from "@/components/ui/PageHeader";
import { Skeleton } from "@/components/ui/Skeleton";

import CaseTable from "@/features/cases/components/CaseTable";
import { useCases } from "@/features/cases/hooks/useCases";
import { Case } from "@/features/cases/types/case";

export default function Cases() {
  const { cases, loading } = useCases();
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();

    if (!q) return cases;

    return cases.filter(
      (c) =>
        c.title.toLowerCase().includes(q) ||
        c.case_type.toLowerCase().includes(q) ||
        c.status.toLowerCase().includes(q)
    );
  }, [cases, search]);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Cases"
        description="Manage tax cases."
        action={<Button>New Case</Button>}
      />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search..."
        className="w-80 rounded-xl border p-3"
      />

      {loading ? (
        <Skeleton className="h-96 w-full rounded-xl" />
      ) : filtered.length === 0 ? (
        <EmptyState
          title="No Cases"
          description="No cases found."
        />
      ) : (
        <CaseTable
          cases={filtered}
          onEdit={(item: Case) => console.log(item)}
          onDelete={(item: Case) => console.log(item)}
        />
      )}
    </div>
  );
}
