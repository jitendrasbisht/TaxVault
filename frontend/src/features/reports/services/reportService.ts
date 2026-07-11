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

const monthlyRevenue: RevenuePoint[] = [];

const monthlyTrend: TrendPoint[] = [];

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