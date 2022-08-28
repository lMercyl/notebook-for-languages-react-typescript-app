import styles from './Button.module.scss';

interface ButtonProps {
  onClickButton?: () => void;
  children?: React.ReactNode;
  side?: boolean;
  img?: boolean;
  disabled?: boolean;
}

const ActiveButton = (props: ButtonProps) => {
  return <Button {...props} side />;
};

const Button = ({ onClickButton, children, side, disabled, img }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClickButton}
      className={
        styles.button +
        (side ? ' ' + styles.side : '') +
        (disabled ? ' ' + styles.disabled : '') +
        (img ? ' ' + styles.imgButton : '')
      }
      disabled={disabled}>
      {children}
    </button>
  );
};

export { ActiveButton, Button };
