import { useQuery } from "react-query";

import { Country } from "../interfaces";
import { apiClient } from "../services";

export const useApiData = (searchedQuery?: string) => {
  const endpoint = searchedQuery ? `/name/${searchedQuery}` : "/all";

  return useQuery<Country[], Error>({
    queryKey: ["countries", searchedQuery],
    queryFn: () => apiClient.get<Country[]>(endpoint).then((res) => res.data),
  });
};
