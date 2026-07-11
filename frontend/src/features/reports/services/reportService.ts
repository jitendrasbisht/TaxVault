import type {
  DashboardMetric,
  RevenuePoint,
  TrendPoint,
  ClientAnalytics,
  ComplianceAnalytics,
  DocumentAnalytics,
} from "../types";

const executiveMetrics: DashboardMetric[] = [
  {
    id: "revenue",
    title: "Revenue",
    value: "₹2.45 Cr",
    change: 12.4,
    trend: "up",
  },
  {
    id: "clients",
    title: "Active Clients",
    value: 148,
    change: 6.8,
    trend: "up",
  },
  {
    id: "compliance",
    title: "Compliance Rate",
    value: "96%",
    change: 1.5,
    trend: "up",
  },
  {
    id: "documents",
    title: "Documents",
    value: 4289,
    change: 4.2,
    trend: "up",
  },
];

const monthlyRevenue: RevenuePoint[] = [
  { month: "Jan", revenue: 2400000 },
  { month: "Feb", revenue: 2550000 },
  { month: "Mar", revenue: 2680000 },
  { month: "Apr", revenue: 2810000 },
  { month: "May", revenue: 2940000 },
  { month: "Jun", revenue: 3080000 },
];

const monthlyTrend: TrendPoint[] = [
  { label: "Jan", value: 82 },
  { label: "Feb", value: 88 },
  { label: "Mar", value: 91 },
  { label: "Apr", value: 95 },
  { label: "May", value: 98 },
  { label: "Jun", value: 100 },
];

const clientAnalytics: ClientAnalytics = {
  totalClients: 186,
  activeClients: 148,
  inactiveClients: 38,
  newClients: 17,
};

const complianceAnalytics: ComplianceAnalytics = {
  totalItems: 1264,
  compliant: 1210,
  pending: 42,
  overdue: 12,
};

const documentAnalytics: DocumentAnalytics = {
  totalDocuments: 4289,
  uploadedThisMonth: 382,
  expiringSoon: 24,
  archived: 310,
};

export const reportService = {
  getExecutiveMetrics: async () => executiveMetrics,
  getRevenue: async () => monthlyRevenue,
  getMonthlyTrend: async () => monthlyTrend,
  getClientAnalytics: async () => clientAnalytics,
  getComplianceAnalytics: async () => complianceAnalytics,
  getDocumentAnalytics: async () => documentAnalytics,
};