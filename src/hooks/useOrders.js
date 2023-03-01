import { useContext } from 'react';
import AppStateContext from '../contexts/AppStateContext';

const useOrders = () => {
  const { orders } = useContext(AppStateContext);

  return orders;
};

export default useOrders;
