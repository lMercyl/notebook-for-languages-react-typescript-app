import styles from './TextField.module.scss';

type TextFieldProps = {
  value?: string;
  name?: string;
  placeholder?: string;
  onChangeInput?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  reference?: React.LegacyRef<HTMLInputElement> | undefined;
};

const TextField = ({
  reference,
  name,
  onChangeInput,
  placeholder,
  value,
  disabled,
}: TextFieldProps) => {
  return (
    <input
      ref={reference}
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
