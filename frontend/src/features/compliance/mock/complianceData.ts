import { ComplianceTask } from "../types";

export const complianceTasks: ComplianceTask[] = [
  {
    id: "cmp-001",
    title: "GST Return Filing - June 2026",
    description:
      "Prepare and file the monthly GST return before the statutory due date.",

    clientId: "client-001",
    clientName: "ABC Industries Pvt Ltd",

    assignedTo: "Rahul Sharma",

    priority: "Critical",
    status: "Pending",
    frequency: "Monthly",

    dueDate: "2026-07-20",

    createdAt: "2026-07-01T09:00:00Z",
    updatedAt: "2026-07-01T09:00:00Z",

    recurring: true,

    tags: ["GST", "Monthly"],

    timeline: [
      {
        id: "tl-001",
        title: "Task Created",
        description: "Compliance task generated.",
        createdAt: "2026-07-01T09:00:00Z",
        createdBy: "System",
      },
    ],

    activity: [
      {
        id: "ac-001",
        action: "Created",
        description: "Task created.",
        performedBy: "System",
        performedAt: "2026-07-01T09:00:00Z",
      },
    ],
  },

  {
    id: "cmp-002",
    title: "TDS Return Filing",
    description: "Quarterly TDS return filing.",

    clientId: "client-002",
    clientName: "BlueTech Solutions",

    assignedTo: "Priya Gupta",

    priority: "High",
    status: "In Progress",
    frequency: "Quarterly",

    dueDate: "2026-07-18",

    createdAt: "2026-07-02T08:30:00Z",
    updatedAt: "2026-07-05T12:00:00Z",

    recurring: true,

    tags: ["TDS"],

    timeline: [
      {
        id: "tl-002",
        title: "Started",
        description: "Documents requested.",
        createdAt: "2026-07-05T12:00:00Z",
        createdBy: "Priya Gupta",
      },
    ],

    activity: [
      {
        id: "ac-002",
        action: "Updated",
        description: "Work started.",
        performedBy: "Priya Gupta",
        performedAt: "2026-07-05T12:00:00Z",
      },
    ],
  },

  {
    id: "cmp-003",
    title: "ROC Annual Filing",

    description: "Annual ROC compliance.",

    clientId: "client-003",
    clientName: "NextGen Ventures",

    assignedTo: "Amit Verma",

    priority: "Medium",

    status: "Completed",

    frequency: "Yearly",

    dueDate: "2026-06-25",

    createdAt: "2026-06-01T10:00:00Z",
    updatedAt: "2026-06-25T17:15:00Z",

    recurring: true,

    tags: ["ROC"],

    timeline: [
      {
        id: "tl-003",
        title: "Completed",
        description: "ROC filing submitted.",
        createdAt: "2026-06-25T17:15:00Z",
        createdBy: "Amit Verma",
      },
    ],

    activity: [
      {
        id: "ac-003",
        action: "Completed",
        description: "Compliance completed.",
        performedBy: "Amit Verma",
        performedAt: "2026-06-25T17:15:00Z",
      },
    ],
  },

  {
    id: "cmp-004",

    title: "Professional Tax",

    description: "Monthly professional tax payment.",

    clientId: "client-001",

    clientName: "ABC Industries Pvt Ltd",

    assignedTo: "Rahul Sharma",

    priority: "Low",

    status: "Pending",

    frequency: "Monthly",

    dueDate: "2026-07-15",

    createdAt: "2026-07-03T10:00:00Z",
    updatedAt: "2026-07-03T10:00:00Z",

    recurring: true,

    tags: ["PT"],

    timeline: [],

    activity: [],
  },

  {
    id: "cmp-005",

    title: "ESI Filing",

    description: "Employee State Insurance filing.",

    clientId: "client-004",

    clientName: "Green Foods",

    assignedTo: "Neha Singh",

    priority: "High",

    status: "Overdue",

    frequency: "Monthly",

    dueDate: "2026-07-05",

    createdAt: "2026-06-29T11:00:00Z",
    updatedAt: "2026-07-06T09:00:00Z",

    recurring: true,

    tags: ["ESI"],

    timeline: [],

    activity: [],
  },

  {
    id: "cmp-006",

    title: "PF Return",

    description: "Provident Fund monthly return.",

    clientId: "client-005",

    clientName: "Skyline Logistics",

    assignedTo: "Priya Gupta",

    priority: "Medium",

    status: "Pending",

    frequency: "Monthly",

    dueDate: "2026-07-24",

    createdAt: "2026-07-04T09:30:00Z",
    updatedAt: "2026-07-04T09:30:00Z",

    recurring: true,

    tags: ["PF"],

    timeline: [],

    activity: [],
  },

  {
    id: "cmp-007",

    title: "Income Tax Advance Payment",

    description: "Quarterly advance tax payment.",

    clientId: "client-006",

    clientName: "Zen Holdings",

    assignedTo: "Amit Verma",

    priority: "Critical",

    status: "Pending",

    frequency: "Quarterly",

    dueDate: "2026-07-30",

    createdAt: "2026-07-05T10:30:00Z",
    updatedAt: "2026-07-05T10:30:00Z",

    recurring: true,

    tags: ["Income Tax"],

    timeline: [],

    activity: [],
  },

  {
    id: "cmp-008",

    title: "Shops & Establishment Renewal",

    description: "Annual renewal.",

    clientId: "client-007",

    clientName: "Bright Retail",

    assignedTo: "Neha Singh",

    priority: "Medium",

    status: "In Progress",

    frequency: "Yearly",

    dueDate: "2026-08-12",

    createdAt: "2026-07-01T10:00:00Z",
    updatedAt: "2026-07-06T09:30:00Z",

    recurring: true,

    tags: ["License"],

    timeline: [],

    activity: [],
  },

  {
    id: "cmp-009",

    title: "Labour Welfare Fund",

    description: "State labour welfare contribution.",

    clientId: "client-003",

    clientName: "NextGen Ventures",

    assignedTo: "Rahul Sharma",

    priority: "Low",

    status: "Completed",

    frequency: "Half Yearly",

    dueDate: "2026-06-15",

    createdAt: "2026-05-25T09:00:00Z",
    updatedAt: "2026-06-15T15:00:00Z",

    recurring: true,

    tags: ["Labour"],

    timeline: [],

    activity: [],
  },

  {
    id: "cmp-010",

    title: "Company Annual Audit",

    description: "Coordinate statutory audit.",

    clientId: "client-008",

    clientName: "Urban Infra",

    assignedTo: "Priya Gupta",

    priority: "Critical",

    status: "Pending",

    frequency: "Yearly",

    dueDate: "2026-09-15",

    createdAt: "2026-07-05T12:00:00Z",
    updatedAt: "2026-07-05T12:00:00Z",

    recurring: false,

    tags: ["Audit"],

    timeline: [],

    activity: [],
  },
];