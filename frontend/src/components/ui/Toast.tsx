interface ToastProps {
  message: string;
}

export function Toast({
  message,
}: ToastProps) {
  return (
    <div className="fixed bottom-6 right-6 rounded-lg bg-slate-900 px-4 py-3 text-white shadow-lg">
      {message}
    </div>
  );
}