import type { Notification } from "../types/notification";
import { mockNotifications } from "../data/mockNotifications";

class MockNotificationService {
  async getAll(): Promise<Notification[]> {
    return Promise.resolve([...mockNotifications]);
  }

  async markAsRead(id: string): Promise<Notification[]> {
    const notification = mockNotifications.find((item) => item.id === id);

    if (notification) {
      notification.status = "read";
    }

    return Promise.resolve([...mockNotifications]);
  }

  async markAllAsRead(): Promise<Notification[]> {
    mockNotifications.forEach((notification) => {
      notification.status = "read";
    });

    return Promise.resolve([...mockNotifications]);
  }
}

export const mockNotificationService = new MockNotificationService();
