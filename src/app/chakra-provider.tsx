"use client";
import theme from "@/theme";
import { ChakraProvider as ChakraProviderBase } from "@chakra-ui/react";

export function ChakraProvider({ children }: { children: React.ReactNode }) {
  return <ChakraProviderBase theme={theme}>{children}</ChakraProviderBase>;
}
