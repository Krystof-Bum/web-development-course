import { useEffect, useState } from "react";
import { Country } from "../components/interfaces/Country";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useCountries = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<Country[]>("/all", { signal: controller.signal })
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
  }, []);

  return { countries, error, isLoading };
};

export default useCountries;
