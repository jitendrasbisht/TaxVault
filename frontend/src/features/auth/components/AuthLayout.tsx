import type { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="grid min-h-screen lg:grid-cols-2">
        {/* Left Panel */}
        <div className="hidden lg:flex flex-col justify-between bg-slate-900 p-12 text-white">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
                TV
              </div>

              <div>
                <h1 className="text-3xl font-bold">TaxVault</h1>
                <p className="text-sm text-slate-400">
                  Secure Tax Document Management
                </p>
              </div>
            </div>

            <div className="mt-16 max-w-md">
              <h2 className="text-4xl font-bold leading-tight">
                Securely manage clients, tax documents and compliance.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                Built for Chartered Accountants and Tax Professionals to
                organize documents, manage clients and streamline tax filing
                workflows.
              </p>
            </div>
          </div>

          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} TaxVault
          </div>
        </div>

        {/* Right Panel */}
        <div className="flex items-center justify-center p-6 lg:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}