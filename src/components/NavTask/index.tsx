import { Link } from 'react-router-dom';
import styles from './NavTask.module.scss';
import expect from '../../assets/images/expect.svg';
import bad from '../../assets/images/red.svg';
import yellow from '../../assets/images/yellow.svg';
import blue from '../../assets/images/blue.svg';
import { Row, Col } from 'react-bootstrap';

type NavTaskProps = {
  right: number;
  error?: number;
  all: number;
};

const NavTask = ({ right, all }: NavTaskProps) => {
  return (
    <Row className="mt-3">
      <Col lg={12}>
        <nav>
          <ul className={styles.nav}>
            <li className="d-flex align-items-center">
              {all !== 0 && Math.floor((right / all) * 100) < 50 ? (
                <img width={25} height={25} src={bad} alt="bad" />
              ) : Math.floor((right / all) * 100) < 80 ? (
                <img width={25} height={25} src={yellow} alt="yellow" />
              ) : (
                <img width={25} height={25} src={blue} alt="blue" />
              )}
              {all === 0 && <img width={25} height={25} src={expect} alt="expects" />}
              <Link to="translation">Translation</Link>
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
            <li className="d-flex align-items-center">
              <img width={25} height={25} src={expect} alt="expects" />
              <Link to="/">Speed (in developing)</Link>
            </li>
            <li className="d-flex align-items-center">
              <img width={25} height={25} src={expect} alt="expects" />
              <Link to="/">Speech (in developing)</Link>
            </li>
          </ul>
        </nav>
      </Col>
    </Row>
  );
};

export default NavTask;
