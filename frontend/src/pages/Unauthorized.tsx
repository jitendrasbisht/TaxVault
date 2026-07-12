import { Link } from "react-router-dom";

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">

      <h1 className="text-6xl font-bold text-amber-500">
        403
      </h1>

      <h2 className="mt-6 text-3xl font-bold">
        Access Denied
      </h2>

      <p className="mt-3 text-slate-500">
        You don't have permission to access this page.
      </p>

      <Link
        to="/dashboard"
        className="mt-8 rounded-xl bg-slate-900 px-6 py-3 text-white hover:bg-slate-800"
      >
        Go to Dashboard
      </Link>

    </div>
  );
}