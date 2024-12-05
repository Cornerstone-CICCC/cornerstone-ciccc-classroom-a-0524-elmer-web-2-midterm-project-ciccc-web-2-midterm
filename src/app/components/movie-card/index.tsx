"use client";
import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useBreakpoint } from "../hooks/useBreakpoint";
import { getCardWidth, getFallbackText, getFlexWidth } from "./utils";

export const MovieCard = ({
  movies,
}: {
  movies: {
    id: number;
    title: string | undefined;
    name: string | undefined;
    overview: string | undefined;
    poster_path: string | null | undefined;
  }[];
}) => {
  const { breakpoint } = useBreakpoint();
  return (
    <Flex w={getFlexWidth(breakpoint)} flexWrap="wrap" gap="20px" margin="auto">
      {movies.map(({ id, title, name, overview, poster_path }) => {
        return (
          <Card w={getCardWidth(breakpoint)} key={id}>
            <CardBody>
              <Image
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="Green double couch with wooden legs"
                borderRadius="lg"
                fallback={<Box>No Image</Box>}
              />
              <Stack mt="6" spacing="3">
                <Heading size="md">
                  {title || name || getFallbackText("title")}
                </Heading>
                <Text>{overview || getFallbackText("overview")}</Text>
              </Stack>
            </CardBody>
          </Card>
        );
      })}
    </Flex>
  );
};
