import styles from './TextField.module.scss';

type TextFieldProps = {
  value?: string;
  placeholder?: string;
  onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const TextField = ({ onChangeInput, placeholder, value, disabled }: TextFieldProps) => {
  return (
    <input
      value={value}
      onChange={onChangeInput}
      className={styles.input}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default TextField;
