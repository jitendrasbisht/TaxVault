import {
  useCallback,
  useEffect,
  useState,
} from "react";

import { requestService } from "../services/mockRequest.service";
import {
  CreateRequestDto,
  UpdateRequestDto,
} from "../services/mockRequest.service";
import { DocumentRequest } from "../types/request";

export function useRequests(
  clientId?: string | null,
) {
  const [requests, setRequests] =
    useState<DocumentRequest[]>([]);

  const [loading, setLoading] =
    useState(true);

  const refresh = useCallback(async () => {
    setLoading(true);

    try {
      const data =
        await requestService.getRequests();

      setRequests(
        clientId
          ? data.filter(
              (request) =>
                request.clientId === clientId,
            )
          : data,
      );
    } finally {
      setLoading(false);
    }
  }, [clientId]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  async function createRequest(
    payload: CreateRequestDto,
  ) {
    await requestService.createRequest(
      payload,
    );

    await refresh();
  }

  async function updateRequest(
    id: string,
    payload: UpdateRequestDto,
  ) {
    await requestService.updateRequest(
      id,
      payload,
    );

    await refresh();
  }

  async function deleteRequest(
    id: string,
  ) {
    await requestService.deleteRequest(
      id,
    );

    await refresh();
  }

  return {
    requests,
    loading,
    refresh,
    createRequest,
    updateRequest,
    deleteRequest,
  };
}

