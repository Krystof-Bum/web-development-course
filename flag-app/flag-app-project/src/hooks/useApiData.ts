import { useQuery } from "react-query";

import { Country } from "../interfaces";
import { apiClient } from "../services";

export const useApiData = (searchedQuery?: string, filteredQuery?: string) => {
  const endpoint = searchedQuery
    ? `/name/${searchedQuery}`
    : filteredQuery
    ? `/region/${filteredQuery}`
    : "/all";

  return useQuery<Country[], Error>({
    queryKey: ["countries", searchedQuery, filteredQuery],
    queryFn: () => apiClient.get<Country[]>(endpoint).then((res) => res.data),
  });
};
