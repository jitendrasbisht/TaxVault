import { Button } from "@/components/ui/Button";
import type { ChangeEvent } from "react";

interface Props {
  search:string;
  status:string;
  onSearch:(value:string)=>void;
  onStatus:(value:string)=>void;
  onExport:()=>void;
}

export default function CasesToolbar({
  search,
  status,
  onSearch,
  onStatus,
  onExport,
}:Props){

  return(
    <div className="mb-6 flex flex-wrap items-center gap-3">

      <input
        className="rounded-md border px-3 py-2"
        placeholder="Search..."
        value={search}
        onChange={(e:ChangeEvent<HTMLInputElement>)=>onSearch(e.target.value)}
      />

      <select
        className="rounded-md border px-3 py-2"
        value={status}
        onChange={(e)=>onStatus(e.target.value)}
      >
        <option value="ALL">All Status</option>
        <option value="OPEN">Open</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="COMPLETED">Completed</option>
        <option value="CLOSED">Closed</option>
      </select>

      <Button
        variant="outline"
        onClick={onExport}
      >
        Export CSV
      </Button>

    </div>
  );
}

