import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { AxiosRequestConfig } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  dependencies?: any
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      console.log("useData effect", isLoading);
      
      if (isLoading) return;

      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          ...requestConfig,
        })
        .then((response) => {
          setData(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          if (error instanceof CanceledError) return;
          setError(error.message);
          setLoading(false);
        });

        console.log("useData effect", isLoading);
        

      // return () => controller.abort();
    },
    dependencies ? [...dependencies] : []
  );
  return { data, error, isLoading };
};

export default useData;
