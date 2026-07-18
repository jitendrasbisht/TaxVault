interface Props {
  loading: boolean;
  error?: string | null;
}

export default function CasesState({ loading, error }: Props) {
  if (loading) {
    return (
      <div className="flex justify-center py-10">
        Loading cases...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-md border border-red-300 bg-red-50 p-4 text-red-700">
        {error}
      </div>
    );
  }

  return null;
}
