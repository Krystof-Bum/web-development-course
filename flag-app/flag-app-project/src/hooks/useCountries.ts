import { useEffect, useState } from "react";

import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Country } from "../interfaces";

export const useCountries = (searchedQuery?: string) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const endpoint = searchedQuery ? `/name/${searchedQuery}` : "/all";

    setLoading(true);
    setError("");

    apiClient
      .get<Country[]>(endpoint, { signal: controller.signal })
      .then((res) => {
        setCountries(res.data);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [searchedQuery]);

  return { countries, error, isLoading };
};
