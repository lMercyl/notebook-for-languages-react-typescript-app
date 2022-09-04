import './Support.scss';

interface SupportProps {
  text: string;
  title: string;
}

const Support = ({ text, title }: SupportProps) => {
  return (
    <div className="support">
      <p>
        <span>{title}@Notebook-for-languages ~ $</span>
        {text}
        <span className="cursor"></span>
      </p>
    </div>
  );
};

export default Support;
