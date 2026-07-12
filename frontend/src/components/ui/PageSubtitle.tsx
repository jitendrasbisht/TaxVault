type Props = {
  children: React.ReactNode;
};

export function PageSubtitle({
  children,
}: Props) {
  return (
    <p className="mt-2 text-slate-500">
      {children}
    </p>
  );
}
