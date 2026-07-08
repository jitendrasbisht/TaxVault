import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center text-sm text-slate-500">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center">
          {index > 0 && (
            <ChevronRight className="mx-2 h-4 w-4" />
          )}

          {item.href ? (
            <a
              href={item.href}
              className="hover:text-slate-900"
            >
              {item.label}
            </a>
          ) : (
            <span className="font-medium text-slate-900">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
}