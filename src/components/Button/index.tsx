import styles from './Button.module.scss';

interface ButtonProps {
  onClickButton?: () => void;
  onMouseOverButton?: () => void;
  onMouseLeaveButton?: () => void;
  children?: React.ReactNode;
  side?: boolean;
  img?: boolean;
  disabled?: boolean;
  item?: boolean;
  player?: boolean;
  pause?: boolean;
}

const ActiveButton = (props: ButtonProps) => {
  return <Button {...props} side />;
};

const Button = ({
  onMouseLeaveButton,
  onMouseOverButton,
  onClickButton,
  children,
  side,
  disabled,
  img,
  item,
  player,
  pause,
}: ButtonProps) => {
  return (
    <button
      onMouseLeave={onMouseLeaveButton}
      onMouseOver={onMouseOverButton}
      type="button"
      onClick={onClickButton}
      className={
        styles.button +
        (side ? ' ' + styles.side : '') +
        (disabled ? ' ' + styles.disabled : '') +
        (img ? ' ' + styles.imgButton : '') +
        (item ? ' ' + styles.item : '') +
        (player ? ' ' + styles.player : '') +
        (pause ? ' ' + styles.pause : '')
      }
      disabled={disabled}>
      {children}
    </button>
  );
};

export { ActiveButton, Button };
