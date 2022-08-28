import styles from './NavTask.module.scss';
import { Row, Col } from 'react-bootstrap';

type NavTaskProps = {
  children?: React.ReactNode;
};

const NavTask = ({ children }: NavTaskProps) => {
  return (
    <nav>
      <ul className={styles.nav}>{children}</ul>
    </nav>
  );
};

export default NavTask;
