import { Box } from "@chakra-ui/react";
import { MovieCard } from "./components/movie-card";
import { Title } from "./components/title";
import { SearchMovies } from "./components/search-movies";
import { headers } from "next/headers";
import { KEY_MOVIE_NAME } from "@/middleware";
import { ComponentProps } from "react";

export default async function Page() {
  const movieNameSearched = headers().get(KEY_MOVIE_NAME);
  const moviesSearched: ComponentProps<typeof MovieCard>["movies"] =
    movieNameSearched !== null ? await fetchMovies(movieNameSearched) : [];

  return (
    <Box pb="20px">
      <Box textAlign="center" mb="20px">
        <Title />
        <SearchMovies />
      </Box>
      <MovieCard movies={moviesSearched} />
    </Box>
  );
}

const fetchMovies = async (movieNameSearched: string) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/multi?query=${movieNameSearched}&include_adult=false&language=en-US&page=1`,
      GET_OPTIONS
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = await response.json();
    return json.results;
  } catch (error) {
    console.error("error:" + error);
  }
};

const GET_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_API_TOKEN}`,
  },
};
