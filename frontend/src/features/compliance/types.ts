export type CompliancePriority = "Low" | "Medium" | "High" | "Critical";

export type ComplianceStatus =
  | "Pending"
  | "In Progress"
  | "Completed"
  | "Overdue";

export type ComplianceFrequency =
  | "One Time"
  | "Weekly"
  | "Monthly"
  | "Quarterly"
  | "Half Yearly"
  | "Yearly";

export interface ComplianceTimelineItem {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  createdBy: string;
}

export interface ComplianceActivity {
  id: string;
  action: string;
  description: string;
  performedBy: string;
  performedAt: string;
}

export interface ComplianceTask {
  id: string;

  title: string;
  description: string;

  clientId: string;
  clientName: string;

  assignedTo: string;

  priority: CompliancePriority;
  status: ComplianceStatus;
  frequency: ComplianceFrequency;

  dueDate: string;

  createdAt: string;
  updatedAt: string;

  recurring: boolean;

  tags: string[];

  timeline: ComplianceTimelineItem[];

  activity: ComplianceActivity[];
}

export interface ComplianceFilters {
  search: string;

  status?: ComplianceStatus;

  priority?: CompliancePriority;

  assignedTo?: string;

  clientId?: string;

  recurring?: boolean;
}

export interface ComplianceDashboardStats {
  total: number;
  pending: number;
  inProgress: number;
  completed: number;
  overdue: number;
}

export interface ComplianceCalendarEvent {
  id: string;
  title: string;
  dueDate: string;
  priority: CompliancePriority;
  status: ComplianceStatus;
}