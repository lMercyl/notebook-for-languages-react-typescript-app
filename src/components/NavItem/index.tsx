import styles from './NavItem.module.scss';
import { Link } from 'react-router-dom';
import bad from '../../assets/images/red.svg';
import blue from '../../assets/images/blue.svg';
import yellow from '../../assets/images/yellow.svg';
import expect from '../../assets/images/expect.svg';

interface NavItemProps {
  right: number;
  all: number;
  to?: string;
  children?: React.ReactNode;
}

const NavItem = ({ right, all, children, to }: NavItemProps) => {
  return (
    <li className="d-flex align-items-center">
      {all !== 0 && Math.floor((right / all) * 100) < 50 ? (
        <img width={25} height={25} src={bad} alt="bad" />
      ) : all !== 0 && Math.floor((right / all) * 100) < 80 ? (
        <img width={25} height={25} src={yellow} alt="yellow" />
      ) : all !== 0 ? (
        <img width={25} height={25} src={blue} alt="blue" />
      ) : (
        <img width={25} height={25} src={expect} alt="expects" />
      )}
      <Link to={`/notebook-for-languages-react-typescript-app/${to}`}>{children}</Link>
      {all !== 0 && (
        <span>
          {Math.floor((right / all) * 100) < 50
            ? 'bad'
            : Math.floor((right / all) * 100) < 80
            ? 'middle'
            : 'good'}{' '}
          {right + '/' + all}
        </span>
      )}
    </li>
  );
};

export default NavItem;
