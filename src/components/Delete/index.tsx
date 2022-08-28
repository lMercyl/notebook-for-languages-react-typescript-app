import { removeItem } from '../../redux/vocabulary/slice';
import styles from './Delete.module.scss';
import { useAppDispatch } from '../../hooks/selectorHook';
import { Item } from '../../redux/vocabulary/types';

interface ItemProps {
  item: Item;
}

const Delete = ({ item }: ItemProps) => {
  const dispatch = useAppDispatch();

  return (
    <button onClick={() => dispatch(removeItem(item))} className={styles.delete}>
      delete
    </button>
  );
};

export default Delete;
