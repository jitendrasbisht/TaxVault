import { useState } from "react";

import { PageHeader } from "@/components/ui/PageHeader";

import {
  AboutSettings,
  APIKeysSettings,
  AuditLogsSettings,
  BackupRecoverySettings,
  BrandingSettings,
  DataRetentionSettings,
  DatabaseSettings,
  EmailTemplatesSettings,
  IntegrationSettings,
  LicensingSettings,
  NotificationsSettings,
  OrganizationSettings,
  PreferencesSettings,
  RolesSettings,
  SecuritySettings,
  SessionManagementSettings,
  SettingsSidebar,
  SystemHealthSettings,
  type SettingsSection,
  UsersSettings,
} from "@/features/settings";

export default function Settings() {
  const [selected, setSelected] =
    useState<SettingsSection>("organization");

  return (
    <div className="space-y-8">

      <PageHeader
        title="Settings"
        description="Manage your organization and platform configuration."
      />

      <div className="grid gap-8 xl:grid-cols-[280px_1fr]">

        <SettingsSidebar
          selected={selected}
          onChange={setSelected}
        />

        <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">

          {selected === "organization" && (
            <OrganizationSettings />
          )}

          {selected === "users" && (
            <UsersSettings />
          )}

          {selected === "roles" && (
            <RolesSettings />
          )}

          {selected === "notifications" && (
            <NotificationsSettings />
          )}

          {selected === "security" && (
            <SecuritySettings />
          )}

          {selected === "branding" && (
            <BrandingSettings />
          )}

          {selected === "preferences" && (
            <PreferencesSettings />
          )}

          {selected === "audit" && (
            <AuditLogsSettings />
          )}

          {selected === "backup" && (
            <BackupRecoverySettings />
          )}

          {selected === "integrations" && (
            <IntegrationSettings />
          )}

          {selected === "emailTemplates" && (
            <EmailTemplatesSettings />
          )}

          {selected === "apiKeys" && (
            <APIKeysSettings />
          )}

          {selected === "licensing" && (
            <LicensingSettings />
          )}

          {selected === "dataRetention" && (
            <DataRetentionSettings />
          )}

          {selected === "systemHealth" && (
            <SystemHealthSettings />
          )}

          {selected === "sessions" && (
            <SessionManagementSettings />
          )}

          {selected === "database" && (
            <DatabaseSettings />
          )}

          {selected === "about" && (
            <AboutSettings />
          )}

        </section>

      </div>

    </div>
  );
}