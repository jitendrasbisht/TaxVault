import { Input } from "@/components/ui/Input";

interface Props {
  value: string;
  onSearchChange: (
    value: string,
  ) => void;
}

export function DocumentSearch({
  value,
  onSearchChange,
}: Props) {
  return (
    <div className="w-full max-w-md">
      <Input
        placeholder="Search documents..."
        value={value}
        onChange={(event) =>
          onSearchChange(
            event.target.value,
          )
        }
      />
    </div>
  );
}