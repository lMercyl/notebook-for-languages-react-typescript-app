import styles from './Button.module.scss';

interface ButtonProps {
  onClickButton?: () => void;
  children?: React.ReactNode;
  side?: boolean;
  disabled?: boolean;
}

const ActiveButton = (props: ButtonProps) => {
  return <Button {...props} side />;
};

const Button = ({ onClickButton, children, side, disabled }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClickButton}
      className={
        styles.button + (side ? ' ' + styles.side : '') + (disabled ? ' ' + styles.disabled : '')
      }
      disabled={disabled}>
      {children}
    </button>
  );
};

export { ActiveButton, Button };
