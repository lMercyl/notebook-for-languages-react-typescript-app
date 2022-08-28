import './Setting.scss';

type SettingProps = {
  children?: React.ReactNode;
};

const Setting = ({ children }: SettingProps) => {
  return <ul>{children}</ul>;
};

export default Setting;
