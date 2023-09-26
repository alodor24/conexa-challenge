import { EndpointEnum } from "@/constants";
import { Character } from "@/types";
import { useEffect, useState } from "react";

const useGetMultipleCharacters = ({
  character1,
  character2,
}: {
  character1: number;
  character2: number;
}) => {
  const [data, setData] = useState<Character[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/${EndpointEnum.CHARACTER}/${character1},${character2}`
        );

        if (response.ok) {
          const responseData: Character[] = await response.json();
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

    if (character1 > 0 && character2 > 0) {
      fetchData();
    }
  }, [character1, character2]);

  return { data, loading, error };
};

export default useGetMultipleCharacters;
