import { ExhibitionItemType } from '../types/exhibition';
import { useState, useEffect } from 'react';
import { getApiExhibitionList } from '@src/apis';

export const useExhibitionList = () => {
  const [list, setList] = useState<ExhibitionItemType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const promise = async () => {
      setIsLoading(true);
      const res = await getApiExhibitionList();
      if (res) {
        setIsLoading(false);
        setList(res);
      }
    };
    promise();
  }, []);

  return { list, isLoading };
};
