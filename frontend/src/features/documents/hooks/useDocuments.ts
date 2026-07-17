import { useEffect, useState } from "react";

import { documentService } from "../services/mockDocument.service";
import { Document } from "../types/document";

export function useDocuments(clientId?: string | null) {
  const [documents, setDocuments] =
    useState<Document[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    let active = true;

    async function loadDocuments() {
      try {
        setLoading(true);

        const data =
          await documentService.getDocuments();

        const filteredDocuments = clientId
          ? data.filter((document) => document.clientId === clientId)
          : data;

        if (active) {
          setDocuments(filteredDocuments);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadDocuments();

    return () => {
      active = false;
    };
  }, [clientId]);

  return {
    documents,
    loading,
  };
}