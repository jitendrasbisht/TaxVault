import type { Case } from "../types/case";

interface Props{
  caseData:Case;
}

export default function CaseInfoCard({
  caseData,
}:Props){

  return(
    <div className="rounded-lg border p-6">

      <h2 className="mb-4 text-lg font-semibold">
        Case Information
      </h2>

      <div className="grid grid-cols-2 gap-4">

        <div>
          <div className="text-sm text-gray-500">
            Case ID
          </div>
          <div>{caseData.id}</div>
        </div>

        <div>
          <div className="text-sm text-gray-500">
            Client ID
          </div>
          <div>{caseData.client_id}</div>
        </div>

        <div>
          <div className="text-sm text-gray-500">
            Status
          </div>
          <div>{caseData.status}</div>
        </div>

        <div>
          <div className="text-sm text-gray-500">
            Priority
          </div>
          <div>{caseData.priority}</div>
        </div>

        <div>
          <div className="text-sm text-gray-500">
            Assigned To
          </div>
          <div>{caseData.assigned_to ?? "-"}</div>
        </div>

        <div>
          <div className="text-sm text-gray-500">
            Due Date
          </div>
          <div>{caseData.due_date ?? "-"}</div>
        </div>

      </div>

    </div>
  );
}
