import create from 'zustand';

interface WishListStore {
  wishList: number[];
  add: (id: number) => void;
  remove: (id: number) => void;
}

const useWishListStore = create<WishListStore>((set) => ({
  wishList: [],
  add: (id) => set((state) => ({ wishList: [...state.wishList, id] })),
  remove: (id) => set((state) => ({ wishList: [...state.wishList.filter((item) => item !== id)] })),
}));

export default useWishListStore;
