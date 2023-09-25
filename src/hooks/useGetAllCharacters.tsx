import { CharacterResponse } from "@/types";
import { useEffect, useState } from "react";

const useGetAllCharacters = ({ url }: { url: string }) => {
  const [data, setData] = useState<CharacterResponse | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);

        if (response.ok) {
          const responseData: CharacterResponse = await response.json();
          setData(responseData);
        } else {
          setError(true);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useGetAllCharacters;
