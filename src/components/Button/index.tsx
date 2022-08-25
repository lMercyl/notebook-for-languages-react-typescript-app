import styles from './Button.module.scss';

type ButtonProps = {
  onClickButton?: () => void;
  text: string;
};

const Button = ({ onClickButton, text }: ButtonProps) => {
  return (
    <button onClick={onClickButton} className={styles.button}>
      {text}
    </button>
  );
};

export default Button;
