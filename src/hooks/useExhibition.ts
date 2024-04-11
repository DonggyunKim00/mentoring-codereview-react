import { ExhibitionItemType } from '../types/exhibition';
import { useState, useEffect } from 'react';
import { getApiExhibitionList, getDetailExhibition } from '@src/apis';
import { useNavigate } from 'react-router-dom';

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

export const useExhibitionItem = (id: number) => {
  const navigate = useNavigate();

  const [item, setItem] = useState<ExhibitionItemType>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const promise = async () => {
      setIsLoading(true);
      try {
        const res = await getDetailExhibition({ id });
        if (res) setItem(res);
      } catch (error) {
        console.error(error);
        navigate('/404');
      }
      setIsLoading(false);
    };
    promise();
  }, []);

  return { item, isLoading };
};
