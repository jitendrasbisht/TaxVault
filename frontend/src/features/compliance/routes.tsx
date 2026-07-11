import { RouteObject } from "react-router-dom";

import { CompliancePage } from "./pages/CompliancePage";

export const complianceRoutes: RouteObject[] = [
  {
    path: "compliance",
    element: <CompliancePage />,
  },
];