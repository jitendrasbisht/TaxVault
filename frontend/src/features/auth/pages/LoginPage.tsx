import AuthCard from "../components/AuthCard";
import AuthLayout from "../components/AuthLayout";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthCard
        title="Welcome Back"
        description="Sign in to access your TaxVault workspace."
      >
        <LoginForm />
      </AuthCard>
    </AuthLayout>
  );
}