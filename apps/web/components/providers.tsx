"use client";
import React, { ReactNode } from "react";
import { SessionProvider } from "@/hooks/SessionProvider";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface ProvidersProps {
  children: ReactNode;
}

const queryClient = new QueryClient();

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem
        disableTransitionOnChange
      >
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        <Toaster />
      </ThemeProvider>
    </SessionProvider>
  );
};

export default Providers;
