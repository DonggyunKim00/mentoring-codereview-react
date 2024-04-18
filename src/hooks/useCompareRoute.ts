import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * 현재 위치한 pathname와 비교될 pathname을 비교하여 불리언값 리턴
 * @param targetPathname 현재 위치한 경로와 비교될 pathname
 * @returns isSameRoute : boolean
 */
export const useCompareRoute = (targetPathname: string) => {
  const currentLocation = useLocation();

  const [isSameRoute, setIsSameRoute] = useState<boolean>(false);

  useEffect(() => {
    if (currentLocation.pathname === targetPathname) setIsSameRoute(true);
    else setIsSameRoute(false);
  }, [currentLocation]);

  return { isSameRoute };
};
