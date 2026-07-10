import { useEffect, useState } from "react";

import { documentService } from "../services/mockDocument.service";
import { Document } from "../types/document";

export function useDocuments() {
  const [documents, setDocuments] =
    useState<Document[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    let active = true;

    async function loadDocuments() {
      try {
        const data =
          await documentService.getDocuments();

        if (active) {
          setDocuments(data);
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
  }, []);

  return {
    documents,
    loading,
  };
}