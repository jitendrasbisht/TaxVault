import AuthCard from "../components/AuthCard";
import AuthLayout from "../components/AuthLayout";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <AuthCard
        title="Forgot Password"
        description="Password reset will be connected once backend authentication is implemented."
      >
        <p className="text-sm text-slate-600">
          This page is intentionally left simple for now.
        </p>
      </AuthCard>
    </AuthLayout>
  );
}