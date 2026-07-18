import { caseService } from "../services/case.service";

export async function bulkDeleteCases(
  ids: number[],
  reload: () => Promise<void>,
  clear: () => void
) {
  if (ids.length === 0) return;

  if (!confirm(`Delete ${ids.length} selected case(s)?`)) return;

  await Promise.all(ids.map(id => caseService.remove(String(id))));

  clear();
  await reload();
}

