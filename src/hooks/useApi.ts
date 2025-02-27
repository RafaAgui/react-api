import { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

type Rickandmorty = {
  name: string;
  image: string;
  status: string;
  species: string;
  id: number;
  url: string;
};

type UseRickandmortyResult = {
  data: Rickandmorty[] | null;
  error: { message: string } | null;
  loading: boolean;
};

const useRickandmorty = (endpoint: string, method = 'GET', body = null, dependencies: unknown[] = []): UseRickandmortyResult => {
  const [data, setData] = useState<Rickandmorty[] | null>(null);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance({
          url: endpoint,
          method: method,
          data: body
        });
        setData(response.data.results);
      } catch (error) {
        setError({ message: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [body, endpoint, method, dependencies]); // Re-run the effect if dependencies change

  return { data, error, loading };
};

export default useRickandmorty;
