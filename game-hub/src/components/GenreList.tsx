import React from "react";
import useGenres from "../hooks/useGenres";

function GenreList() {
  const { genres, isLoading, error } = useGenres();
  return (
    <>
      <ul>
        {genres.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GenreList;
