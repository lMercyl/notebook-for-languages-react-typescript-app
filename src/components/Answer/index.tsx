import styles from './Answer.module.scss';

type AnswerProps = {
  message: string | undefined;
  answer: string;
  status: boolean;
};

const Answer = ({ message, answer, status }: AnswerProps) => {
  return (
    <div className={status ? styles.true : styles.false}>
      <p>Answer: {message}</p>
      <p>Your answer: {answer}</p>
    </div>
  );
};

export default Answer;
