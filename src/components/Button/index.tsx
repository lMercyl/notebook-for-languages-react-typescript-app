import styles from './Button.module.scss';

interface ButtonProps {
  onClickButton?: () => void;
  children?: React.ReactNode;
  side?: boolean;
}

const ActiveButton = (props: ButtonProps) => {
  return <Button {...props} side />;
};

const Button = ({ onClickButton, children, side }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClickButton}
      className={styles.button + (side === true ? ' ' + styles.side : '')}>
      {children}
    </button>
  );
};

export { ActiveButton, Button };
