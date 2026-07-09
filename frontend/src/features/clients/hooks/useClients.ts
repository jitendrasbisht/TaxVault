import { useEffect, useState } from "react";

import { clientService } from "../services/mockClient.service";
import { Client } from "../types/client";

export function useClients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    async function loadClients() {
      try {
        const data = await clientService.getClients();

        if (active) {
          setClients(data);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadClients();

    return () => {
      active = false;
    };
  }, []);

  return {
    clients,
    loading,
  };
}