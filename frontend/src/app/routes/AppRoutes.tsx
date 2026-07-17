import { Routes, Route } from "react-router-dom";

import { TaxProfilePage } from "@/features/tax-profile";
import { RequestListPage } from "@/features/document-requests";

export default function AppRoutes() {
  return (
    <Routes>

      {/* Existing Routes */}

      <Route
        path="/tax-profile"
        element={<TaxProfilePage />}
      />

      <Route
        path="/document-requests"
        element={<RequestListPage />}
      />

    </Routes>
  );
}
