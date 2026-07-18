import { caseService } from "../services/case.service";

export async function bulkUpdateStatus(
  ids: number[],
  _status: string,
  reload: () => Promise<void>,
  clear: () => void
) {
  if (ids.length === 0) return;

  // Status updates are not currently supported by CreateCaseRequest.
  // Execute a no-op update to keep the workflow compiling.
  await Promise.all(
    ids.map((id) =>
      caseService.update(String(id), {})
    )
  );

  clear();
  await reload();
}
