import { useEffect, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { EmptyState } from "@/components/ui/EmptyState";
import { Skeleton } from "@/components/ui/Skeleton";

import ClientContactCard from "../components/ClientContactCard";
import ClientHeader from "../components/ClientHeader";
import ClientOverviewCard from "../components/ClientOverviewCard";
import ClientTaxCard from "../components/ClientTaxCard";

import { clientService } from "../services/mockClient.service";

import { Client } from "../types/client";

export function ClientDetailsPage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [client, setClient] =
    useState<Client | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function loadClient() {
      if (!id) {
        navigate("/clients");
        return;
      }

      setLoading(true);

      const data =
        await clientService.getClientById(
          id,
        );

      setClient(data ?? null);

      setLoading(false);
    }

    loadClient();
  }, [id, navigate]);

  if (loading) {
    return (
      <Skeleton className="h-[700px] w-full rounded-xl" />
    );
  }

  if (!client) {
    return (
      <EmptyState
        title="Client Not Found"
        description="The requested client could not be found."
      />
    );
  }

  return (
    <div className="space-y-6">

      <ClientHeader client={client} />

      <div className="grid gap-6 xl:grid-cols-3">

        <div className="space-y-6 xl:col-span-2">

          <ClientOverviewCard
            client={client}
          />

          <ClientContactCard
            client={client}
          />

        </div>

        <div>

          <ClientTaxCard
            client={client}
          />

        </div>

      </div>

    </div>
  );
}

export default ClientDetailsPage;