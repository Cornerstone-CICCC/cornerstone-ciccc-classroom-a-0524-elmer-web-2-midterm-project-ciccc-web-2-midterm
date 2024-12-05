"use client";
import { FormErrorMessage, FormControl, Input, Button } from "@chakra-ui/react";
import { useSearchMovies } from "./useSearchMovies";

export const SearchMovies = () => {
  const {
    addQueryStringByMovieName,
    register,
    errors,
    removeMovieNameQueryString,
    isSubmitting,
  } = useSearchMovies();

  return (
    <form
      onSubmit={addQueryStringByMovieName}
      style={{ display: "flex", justifyContent: "center", gap: "20px" }}
    >
      <FormControl isInvalid={errors.movieName !== undefined} w="70%">
        <Input
          id="movieName"
          {...register("movieName", {
            required: "This is required",
            minLength: { value: 4, message: "Minimum length should be 4" },
          })}
          placeholder="Search movies"
        />
        <FormErrorMessage justifyContent="center">
          {errors.movieName?.message}
        </FormErrorMessage>
      </FormControl>
      <Button isLoading={isSubmitting} colorScheme="teal" type="submit">
        Submit
      </Button>
      <Button
        onClick={removeMovieNameQueryString}
        colorScheme="gray"
        type="reset"
      >
        Reset
      </Button>
    </form>
  );
};
