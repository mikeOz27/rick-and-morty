import { useState } from "react";
import { getCharactersList } from "../services/api";

export const useSearch = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  const search = async (filter, page, status, gender) => {
    await getCharactersList(
      page,
      filter,
      status,
      gender,
      setCharacters,
      setPages,
      setLoading
    );
  };

  return { characters, loading, page, setPage, pages, search };
};
