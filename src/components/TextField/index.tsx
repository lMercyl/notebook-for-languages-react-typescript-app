import styles from './TextField.module.scss';

type TextFieldProps = {
  value?: string;
  name?: string;
  placeholder?: string;
  onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const TextField = ({ name, onChangeInput, placeholder, value, disabled }: TextFieldProps) => {
  return (
    <input
      name={name}
      value={value}
      onChange={onChangeInput}
      className={styles.input}
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default TextField;
