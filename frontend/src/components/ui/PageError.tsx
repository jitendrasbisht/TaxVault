import { ErrorState } from "./ErrorState";

type Props = {
  onRetry?: () => void;
};

export function PageError({
  onRetry,
}: Props) {
  return (
    <div className="py-10">
      <ErrorState />

      {onRetry && (
        <div className="mt-6 text-center">
          <button
            onClick={onRetry}
            className="rounded-xl bg-slate-900 px-5 py-3 text-white hover:bg-slate-800"
          >
            Retry
          </button>
        </div>
      )}
    </div>
  );
}