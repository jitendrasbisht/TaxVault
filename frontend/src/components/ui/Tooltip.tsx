import { ReactNode, useState } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export function Tooltip({
  text,
  children,
}: TooltipProps) {
  const [show, setShow] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}

      {show && (
        <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded bg-slate-900 px-2 py-1 text-xs text-white whitespace-nowrap">
          {text}
        </div>
      )}
    </div>
  );
}