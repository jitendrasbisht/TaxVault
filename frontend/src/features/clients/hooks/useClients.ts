import { useEffect, useState } from "react";
import { Client } from "../types/client";
import { clientService } from "../services/mockClient.service";

export function useClients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function loadClients() {
      try {
        const data = await clientService.getClients();

        if (mounted) {
          setClients(data);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadClients();

    return () => {
      mounted = false;
    };
  }, []);

  return {
    clients,
    loading,
  };
}