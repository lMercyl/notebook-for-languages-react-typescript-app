import styles from './Delete.module.scss';

interface Item {
  source: string;
  translate: string;
}

type DeleteProps = {
  item: Item;
  onClickDelete: (deleteItem: Item) => void;
};

const Delete = ({ onClickDelete, item }: DeleteProps) => {
  return (
    <button onClick={() => onClickDelete(item)} className={styles.delete}>
      delete
    </button>
  );
};

export default Delete;
