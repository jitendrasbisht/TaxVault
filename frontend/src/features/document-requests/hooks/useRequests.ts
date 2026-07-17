import { useEffect, useState } from "react";

import { requestService } from "../services/mockRequest.service";
import { DocumentRequest } from "../types/request";

export function useRequests(
  clientId?: string | null,
) {
  const [requests, setRequests] =
    useState<DocumentRequest[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    let active = true;

    async function loadRequests() {
      try {
        setLoading(true);

        const data =
          await requestService.getRequests();

        const filteredRequests =
          clientId
            ? data.filter(
                (request) =>
                  request.clientId ===
                  clientId,
              )
            : data;

        if (active) {
          setRequests(
            filteredRequests,
          );
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadRequests();

    return () => {
      active = false;
    };
  }, [clientId]);

  return {
    requests,
    loading,
  };
}
