import { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

type Pokemon = {
  name: string;
  id: number;
};

type UsePokemonResult = {
  data: Pokemon[] | null;
  error: { message: string } | null;
  loading: boolean;
};

const usePokemon = (method = 'GET', body = null, dependencies: unknown[] = []): UsePokemonResult => {
  const [data, setData] = useState<Pokemon[] | null>(null);
  const [error, setError] = useState<{ message: string } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance({
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
  }, dependencies); // Re-run the effect if dependencies change

  return { data, error, loading };
};

export default usePokemon;