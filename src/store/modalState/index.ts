import create from 'zustand';

interface ModalStateStore {
  modalState: boolean;
  open: () => void;
  close: () => void;
}

const useModalStateStore = create<ModalStateStore>((set) => ({
  modalState: false,
  open: () => set(() => ({ modalState: true })),
  close: () => set(() => ({ modalState: false })),
}));

export default useModalStateStore;
