interface ComplianceAssignedUserProps {
  name: string;
}

export function ComplianceAssignedUser({
  name,
}: ComplianceAssignedUserProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-200 font-semibold">
        {name.charAt(0).toUpperCase()}
      </div>

      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}