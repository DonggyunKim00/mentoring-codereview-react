import PortalWrapper from '@components/common/Portal/PortalWrapper';
import React from 'react';
import SelectModal from './SelectModal';
import SuccessModal from './SuccessModal';
import useReserveStore from '@src/store/reserve';

const Modal = () => {
  const { success } = useReserveStore();
  return <PortalWrapper>{success ? <SuccessModal /> : <SelectModal />}</PortalWrapper>;
};

export default Modal;
