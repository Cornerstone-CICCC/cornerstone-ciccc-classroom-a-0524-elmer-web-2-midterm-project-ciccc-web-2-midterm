"use client";
import { Text } from "@chakra-ui/react";
import { useBreakpoint } from "./hooks/useBreakpoint";
import { TITLE } from "../constants";

export const Title = () => {
  const { breakpoint } = useBreakpoint();
  return (
    <Text fontSize={breakpoint === "base" ? "x-large" : "xxx-large"}>
      {TITLE}
    </Text>
  );
};
