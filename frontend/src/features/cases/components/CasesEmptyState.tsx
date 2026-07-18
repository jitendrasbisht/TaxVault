import { FileSearch } from "lucide-react";

interface Props{
  title?:string;
  description?:string;
}

export default function CasesEmptyState({
  title="No Cases Found",
  description="Create your first case to get started."
}:Props){

  return(
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16">

      <FileSearch className="mb-4 h-12 w-12 text-gray-400"/>

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        {description}
      </p>

    </div>
  );
}
