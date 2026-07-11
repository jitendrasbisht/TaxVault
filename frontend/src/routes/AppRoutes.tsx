import { Navigate, Route, Routes } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import DashboardPage from "../pages/Dashboard";
import CasesPage from "../pages/Cases";
import CaseDetailsPage from "../pages/CaseDetails";
import DocumentsPage from "../pages/Documents";
import ReportsPage from "../pages/Reports";
import SettingsPage from "../pages/Settings";
import NotFoundPage from "../pages/NotFound";

import LoginPage from "../features/auth/pages/LoginPage";
import ForgotPasswordPage from "../features/auth/pages/ForgotPasswordPage";

import {
  ClientListPage,
} from "../features/clients/pages/ClientListPage";
import ClientDetailsPage from "../features/clients/pages/ClientDetailsPage";

import {
  DocumentDetailsPage,
} from "../features/documents";

import {
  ProtectedRoute,
  PublicRoute,
} from "../features/auth";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route element={<PublicRoute />}>
        <Route
          path="/login"
          element={<LoginPage />}
        />

        <Route
          path="/forgot-password"
          element={<ForgotPasswordPage />}
        />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>

          <Route
            index
            element={
              <Navigate
                to="/dashboard"
                replace
              />
            }
          />

          <Route
            path="/dashboard"
            element={<DashboardPage />}
          />

          <Route
            path="/clients"
            element={<ClientListPage />}
          />

          <Route
            path="/clients/:id"
            element={<ClientDetailsPage />}
          />

          <Route
            path="/cases"
            element={<CasesPage />}
          />

          <Route
            path="/cases/:id"
            element={<CaseDetailsPage />}
          />

          <Route
            path="/documents"
            element={<DocumentsPage />}
          />

          <Route
            path="/documents/:id"
            element={<DocumentDetailsPage />}
          />

          <Route
            path="/reports"
            element={<ReportsPage />}
          />

          <Route
            path="/settings"
            element={<SettingsPage />}
          />

        </Route>
      </Route>

      <Route
        path="*"
        element={<NotFoundPage />}
      />
    </Routes>
  );
}