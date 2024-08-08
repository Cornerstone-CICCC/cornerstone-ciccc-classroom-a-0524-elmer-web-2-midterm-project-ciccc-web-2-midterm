import { useBreakpointValue } from "@chakra-ui/react";

export type Breakpoint = "base" | "md" | "lg" | undefined;

export const useBreakpoint = () => {
  const breakpoint: Breakpoint = useBreakpointValue(
    { base: "base", md: "md", lg: "lg" },
    { fallback: "lg" }
  );

  return { breakpoint };
};
