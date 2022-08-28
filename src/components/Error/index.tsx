import styles from './Error.module.scss';

type ErrorProps = {
  message?: string;
};

const Error = ({ message }: ErrorProps) => {
  return <p className={styles.error}>Error: {message}</p>;
};

export default Error;
