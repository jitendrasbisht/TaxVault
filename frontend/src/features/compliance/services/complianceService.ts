import { complianceTasks } from "../mock/complianceData";
import {
  ComplianceCalendarEvent,
  ComplianceDashboardStats,
  ComplianceFilters,
  ComplianceTask,
} from "../types";

const delay = (ms = 250) =>
  new Promise((resolve) => setTimeout(resolve, ms));

let tasks: ComplianceTask[] = [...complianceTasks];

const clone = <T>(value: T): T => structuredClone(value);

const sortByDueDate = (items: ComplianceTask[]) =>
  [...items].sort(
    (a, b) =>
      new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
  );

function applyFilters(
  items: ComplianceTask[],
  filters?: ComplianceFilters
): ComplianceTask[] {
  if (!filters) {
    return items;
  }

  return items.filter((task) => {
    const matchesSearch =
      !filters.search ||
      task.title.toLowerCase().includes(filters.search.toLowerCase()) ||
      task.clientName
        .toLowerCase()
        .includes(filters.search.toLowerCase()) ||
      task.assignedTo
        .toLowerCase()
        .includes(filters.search.toLowerCase()) ||
      task.description
        .toLowerCase()
        .includes(filters.search.toLowerCase());

    const matchesStatus =
      !filters.status || task.status === filters.status;

    const matchesPriority =
      !filters.priority || task.priority === filters.priority;

    const matchesAssigned =
      !filters.assignedTo ||
      task.assignedTo === filters.assignedTo;

    const matchesClient =
      !filters.clientId || task.clientId === filters.clientId;

    const matchesRecurring =
      filters.recurring === undefined ||
      task.recurring === filters.recurring;

    return (
      matchesSearch &&
      matchesStatus &&
      matchesPriority &&
      matchesAssigned &&
      matchesClient &&
      matchesRecurring
    );
  });
}

export const complianceService = {
  async getTasks(
    filters?: ComplianceFilters
  ): Promise<ComplianceTask[]> {
    await delay();

    return clone(sortByDueDate(applyFilters(tasks, filters)));
  },

  async getTaskById(
    id: string
  ): Promise<ComplianceTask | undefined> {
    await delay();

    return clone(tasks.find((task) => task.id === id));
  },

  async createTask(
    task: Omit<ComplianceTask, "id">
  ): Promise<ComplianceTask> {
    await delay();

    const newTask: ComplianceTask = {
      ...task,
      id: crypto.randomUUID(),
    };

    tasks.unshift(newTask);

    return clone(newTask);
  },

  async updateTask(
    updatedTask: ComplianceTask
  ): Promise<ComplianceTask> {
    await delay();

    tasks = tasks.map((task) =>
      task.id === updatedTask.id ? updatedTask : task
    );

    return clone(updatedTask);
  },

  async deleteTask(id: string): Promise<void> {
    await delay();

    tasks = tasks.filter((task) => task.id !== id);
  },

  async getDashboardStats(): Promise<ComplianceDashboardStats> {
    await delay();

    return {
      total: tasks.length,
      pending: tasks.filter(
        (x) => x.status === "Pending"
      ).length,
      inProgress: tasks.filter(
        (x) => x.status === "In Progress"
      ).length,
      completed: tasks.filter(
        (x) => x.status === "Completed"
      ).length,
      overdue: tasks.filter(
        (x) => x.status === "Overdue"
      ).length,
    };
  },

  async getCalendarEvents(): Promise<
    ComplianceCalendarEvent[]
  > {
    await delay();

    return clone(
      tasks.map((task) => ({
        id: task.id,
        title: task.title,
        dueDate: task.dueDate,
        priority: task.priority,
        status: task.status,
      }))
    );
  },

  async getUpcomingTasks(
    limit = 5
  ): Promise<ComplianceTask[]> {
    await delay();

    return clone(sortByDueDate(tasks).slice(0, limit));
  },

  async getOverdueTasks(): Promise<ComplianceTask[]> {
    await delay();

    return clone(
      tasks.filter((task) => task.status === "Overdue")
    );
  },

  async getAssignedUsers(): Promise<string[]> {
    await delay();

    return [...new Set(tasks.map((task) => task.assignedTo))].sort();
  },

  async getClients(): Promise<
    { id: string; name: string }[]
  > {
    await delay();

    return [...new Map(
      tasks.map((task) => [
        task.clientId,
        {
          id: task.clientId,
          name: task.clientName,
        },
      ])
    ).values()];
  },
};