// src/app/(admin)/admin/layout.tsx

import type { ReactNode } from "react";

import AdminShell from "@/features/admin/components/admin-shell";

export default function AdminLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <AdminShell>{children}</AdminShell>;
}