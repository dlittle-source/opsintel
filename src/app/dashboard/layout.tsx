import { ReactNode } from "react";

import ExecutiveWorkspaceLayout from "@/components/layout/ExecutiveWorkspaceLayout";

type Props = {
  children: ReactNode;
};

export default function DashboardLayout({
  children,
}: Props) {
  return (
    <ExecutiveWorkspaceLayout>
      {children}
    </ExecutiveWorkspaceLayout>
  );
}