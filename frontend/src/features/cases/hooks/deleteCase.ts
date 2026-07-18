import { caseService } from "../services/case.service";

export async function deleteCase(
    id: number,
    reload: () => Promise<void>
) {
    if (!confirm("Delete this case?")) return;

    await caseService.remove(String(id));
    await reload();
}

