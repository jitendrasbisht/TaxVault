import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">

      <h1 className="text-7xl font-bold text-blue-600">
        404
      </h1>

      <h2 className="mt-6 text-3xl font-bold">
        Page Not Found
      </h2>

      <p className="mt-3 text-slate-500">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/dashboard"
        className="mt-8 rounded-xl bg-slate-900 px-6 py-3 font-medium text-white hover:bg-slate-800"
      >
        Back to Dashboard
      </Link>

    </div>
  );
}