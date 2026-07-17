import { useEffect, useState } from "react";

import type { Notification } from "../types/notification";
import { mockNotificationService } from "../services/mockNotification.service";

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void loadNotifications();
  }, []);

  async function loadNotifications() {
    const data = await mockNotificationService.getAll();
    setNotifications(data);
    setLoading(false);
  }

  async function markAsRead(id: string) {
    const data = await mockNotificationService.markAsRead(id);
    setNotifications(data);
  }

  async function markAllAsRead() {
    const data = await mockNotificationService.markAllAsRead();
    setNotifications(data);
  }

  return {
    notifications,
    loading,
    markAsRead,
    markAllAsRead,
  };
}
