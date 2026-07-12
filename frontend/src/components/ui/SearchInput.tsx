type Props = {
  placeholder?: string;
};

export function SearchInput({
  placeholder = "Search...",
}: Props) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-blue-600 md:w-80"
    />
  );
}
