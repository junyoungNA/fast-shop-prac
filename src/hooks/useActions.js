import { useContext } from 'react';
import AppStateContext from '../contexts/AppStateContext';

const useActions = () => {
  const { addToOrder, remove, removeAll } = useContext(AppStateContext);

  return { addToOrder, remove, removeAll };
};

export default useActions;
