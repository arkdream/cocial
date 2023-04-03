import React from "react";
import { MemoryRouterProvider } from "next-router-mock/MemoryRouterProvider";

export interface MockRouterProps {
  url: string;
}
export function MockRouter({
  url,
  children,
}: React.PropsWithChildren<MockRouterProps>) {
  return <MemoryRouterProvider url={url}>{children}</MemoryRouterProvider>;
}
