import React, { useState, createContext, Dispatch, SetStateAction } from 'react';

interface ContextValueType {
  wishList: number[];
  setWishList: Dispatch<SetStateAction<number[]>>;
}

export const WishListContext = createContext<ContextValueType>({
  wishList: [],
  setWishList: () => {},
});

const WishListProvider = ({ ...props }) => {
  const [wishList, setWishList] = useState<number[]>([]);

  return (
    <WishListContext.Provider value={{ wishList, setWishList }}>
      {props.children}
    </WishListContext.Provider>
  );
};

export default WishListProvider;
