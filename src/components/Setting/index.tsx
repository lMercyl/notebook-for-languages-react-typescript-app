import './Setting.scss';

type SettingProps = {
  onClickHide: () => void;
  onClickDeleteWord: () => void;
};

const Setting = ({ onClickHide, onClickDeleteWord }: SettingProps) => {
  return (
    <ul>
      <li>
        <button onClick={onClickHide} className="button-setting">
          hide translation
        </button>
      </li>
      <li>
        <button onClick={onClickDeleteWord} className="button-setting">
          delete words
        </button>
      </li>
    </ul>
  );
};

export default Setting;
