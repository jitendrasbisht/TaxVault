import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`
        rounded-xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-shadow
        hover:shadow-md
        ${className}
      `}
    >
      {children}
    </div>
  );
}

export default Card;