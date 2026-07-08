import { Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "../components/layout/AppLayout";

import DashboardPage from "../pages/Dashboard";
import ClientsPage from "../pages/Clients";
import CasesPage from "../pages/Cases";
import DocumentsPage from "../pages/Documents";
import ReportsPage from "../pages/Reports";
import SettingsPage from "../pages/Settings";
import NotFoundPage from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate to="/dashboard" replace />} />

        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/documents" element={<DocumentsPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}