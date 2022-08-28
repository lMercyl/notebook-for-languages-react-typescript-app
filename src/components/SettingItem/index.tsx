import styles from './SettingItem.module.scss';

interface SettingItemProps {
  onClickButton?: () => void;
  children?: React.ReactNode;
}

const SettingItem = ({ onClickButton, children }: SettingItemProps) => {
  return (
    <li>
      <button onClick={onClickButton} className={styles.item}>
        {children}
      </button>
    </li>
  );
};

export default SettingItem;
