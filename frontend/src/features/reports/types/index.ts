export interface DashboardMetric {
  id: string;
  title: string;
  value: number | string;
  change: number;
  trend: "up" | "down" | "neutral";
}

export interface TrendPoint {
  label: string;
  value: number;
}

export interface RevenuePoint {
  month: string;
  revenue: number;
}

export interface ClientAnalytics {
  totalClients: number;
  activeClients: number;
  inactiveClients: number;
  newClients: number;
}

export interface ComplianceAnalytics {
  totalItems: number;
  compliant: number;
  pending: number;
  overdue: number;
}

export interface DocumentAnalytics {
  totalDocuments: number;
  uploadedThisMonth: number;
  expiringSoon: number;
  archived: number;
}