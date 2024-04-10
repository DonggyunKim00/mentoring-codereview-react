import { useState, useEffect, useContext } from 'react';
import { WishListContext } from '@src/store/wishList';

/**
 * 전역변수 wishList에 전시회의 id 값 추가, 삭제 토글 기능
 */
export const useWishItemToggle = () => {
  const { wishList, setWishList } = useContext(WishListContext);

  const toggleFn = (itemId: number) => {
    if (wishList.find((item) => item === itemId) === undefined) {
      setWishList((prev) => [...prev, itemId]);
    } else {
      setWishList((prev) => [...prev.filter((item) => item !== itemId)]);
    }
  };

  return { toggleFn };
};

/**
 * 전달받은 전시회 id가 wishList에 존재하는지 불리언값 리턴
 * @param itemId 각 전시회의 id 값
 * @returns isWish : booelan
 */
export const useIsWish = (itemId: number) => {
  const { wishList } = useContext(WishListContext);
  const [isWish, setIsWish] = useState<boolean>(false);

  useEffect(() => {
    if (wishList && wishList.find((item) => item === itemId)) setIsWish(true);
    else setIsWish(false);
  }, [wishList]);

  return { isWish };
};
