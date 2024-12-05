import { Breakpoint } from "../hooks/useBreakpoint";

export const getFlexWidth = (breakpoint: Breakpoint) => {
  if (breakpoint === "lg") return "940px";
  if (breakpoint === "md") return "640px";
};

export const getCardWidth = (breakpoint: Breakpoint) => {
  if (breakpoint === "lg") return "300px";
  if (breakpoint === "md") return "200px";
};

export const getFallbackText = (text: string) => {
  return `${text} was not found`;
};
