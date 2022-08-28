import styles from './VocItem.module.scss';

interface Item {
  source?: string;
  translate?: string;
}

interface VocItemProps extends Item {
  hide?: boolean;
  children?: React.ReactNode;
}

const VocItem = ({ source, translate, hide, children }: VocItemProps) => {
  return (
    <div className={styles.item}>
      <p>
        {source} - <em className={hide ? styles.hide : styles.em}>{translate}</em>
      </p>
      {children}
    </div>
  );
};

export default VocItem;
