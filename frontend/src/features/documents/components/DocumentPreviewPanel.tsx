import {
  Download,
  ExternalLink,
  FileText,
  Share2,
} from "lucide-react";

import { Button } from "@/components/ui/Button";

interface Props {
  fileName: string;
}

export default function DocumentPreviewPanel({
  fileName,
}: Props) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white shadow-sm">

      <div className="border-b border-slate-200 px-6 py-4">

        <h2 className="text-lg font-semibold">
          Document Preview
        </h2>

      </div>

      <div className="flex h-72 flex-col items-center justify-center gap-4 bg-slate-50">

        <FileText
          className="text-slate-400"
          size={72}
        />

        <div className="text-center">

          <p className="font-medium">
            {fileName}
          </p>

          <p className="text-sm text-slate-500">
            Preview will be available
            after backend integration.
          </p>

        </div>

      </div>

      <div className="flex gap-3 border-t border-slate-200 p-6">

        <Button variant="outline">
          <Download size={16} />

          <span className="ml-2">
            Download
          </span>
        </Button>

        <Button variant="outline">
          <ExternalLink
            size={16}
          />

          <span className="ml-2">
            Open
          </span>
        </Button>

        <Button variant="outline">
          <Share2 size={16} />

          <span className="ml-2">
            Share
          </span>
        </Button>

      </div>

    </div>
  );
}