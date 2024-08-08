import { useForm } from "react-hook-form";
import { useRouter, useSearchParams } from "next/navigation";
import { KEY_MOVIE_NAME } from "@/middleware";

type Inputs = { movieName: string };

export const useSearchMovies = () => {
  const searchParams = useSearchParams();
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    defaultValues: { movieName: searchParams.get(KEY_MOVIE_NAME) ?? "" },
  });

  const router = useRouter();
  const addQueryStringByMovieName = handleSubmit(({ movieName }) => {
    router.replace(`?movie-name=${movieName}`);
  });

  const removeMovieNameQueryString = () => {
    router.replace("/");
  };

  return {
    addQueryStringByMovieName,
    register,
    errors,
    removeMovieNameQueryString,
    isSubmitting,
  };
};
