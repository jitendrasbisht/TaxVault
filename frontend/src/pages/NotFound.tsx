import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold text-slate-900">404</h1>

      <p className="mt-4 text-slate-600">
        The page you are looking for does not exist.
      </p>

      <Link
        to="/dashboard"
        className="mt-6 rounded-lg bg-slate-900 px-5 py-3 text-white transition hover:bg-slate-800"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}

export default NotFound;