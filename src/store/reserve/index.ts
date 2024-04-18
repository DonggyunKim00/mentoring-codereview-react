import { create } from 'zustand';

interface ReserveStore {
  success: boolean;
  reserve: () => void;
  init: () => void;
}

const useReserveStore = create<ReserveStore>((set) => ({
  success: false,
  reserve: () => set(() => ({ success: true })),
  init: () => set(() => ({ success: false })),
}));

export default useReserveStore;
