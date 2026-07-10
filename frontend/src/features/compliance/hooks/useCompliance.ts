import { useCallback, useEffect, useState } from "react";

import { complianceService } from "../services/complianceService";
import { ComplianceFilters, ComplianceTask } from "../types";

interface UseComplianceResult {
  tasks: ComplianceTask[];
  loading: boolean;
  error: string | null;

  refresh: () => Promise<void>;

  createTask: (
    task: Omit<ComplianceTask, "id">
  ) => Promise<ComplianceTask>;

  updateTask: (
    task: ComplianceTask
  ) => Promise<ComplianceTask>;

  deleteTask: (id: string) => Promise<void>;

  getTaskById: (
    id: string
  ) => Promise<ComplianceTask | undefined>;
}

export function useCompliance(
  filters?: ComplianceFilters
): UseComplianceResult {
  const [tasks, setTasks] = useState<ComplianceTask[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadTasks = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await complianceService.getTasks(filters);

      setTasks(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load compliance tasks.");
    } finally {
      setLoading(false);
    }
  }, [filters]);

  useEffect(() => {
    void loadTasks();
  }, [loadTasks]);

  const createTask = async (
    task: Omit<ComplianceTask, "id">
  ) => {
    const created = await complianceService.createTask(task);

    await loadTasks();

    return created;
  };

  const updateTask = async (
    task: ComplianceTask
  ) => {
    const updated = await complianceService.updateTask(task);

    await loadTasks();

    return updated;
  };

  const deleteTask = async (id: string) => {
    await complianceService.deleteTask(id);

    await loadTasks();
  };

  const getTaskById = async (id: string) => {
    return complianceService.getTaskById(id);
  };

  return {
    tasks,
    loading,
    error,

    refresh: loadTasks,

    createTask,
    updateTask,
    deleteTask,
    getTaskById,
  };
}