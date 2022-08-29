import './ActionList.scss';

type SettingProps = {
  children?: React.ReactNode;
};

const ActionList = ({ children }: SettingProps) => {
  return <ul>{children}</ul>;
};

export default ActionList;
