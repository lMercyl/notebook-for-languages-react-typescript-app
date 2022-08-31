import { Container, Row, Col } from 'react-bootstrap';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';

import './Header.scss';
import user from '../../assets/images/user.svg';

const Header = () => {
  return (
    <Container>
      <Row className="pt-5 pb-5 align-items-center justify-content-between">
        <Col lg={4}>
          <h1 className="header-title">{'<Notebook lg="en" />'}</h1>
        </Col>
        <Col lg={6} className="d-flex align-items-center justify-content-center">
          <nav>
            <ul className="footer-navigator">
              <li>
                <Link to="/notebook-for-languages-react-typescript-app">Vk.com</Link>
              </li>
              <li>
                <Link to="/notebook-for-languages-react-typescript-app">Telegram</Link>
              </li>
              <li>
                <Link to="/notebook-for-languages-react-typescript-app">Github</Link>
              </li>
            </ul>
          </nav>
        </Col>
        <Col lg={1} className="d-flex justify-content-end">
          <Button img={true}>
            <img width={45} height={45} src={user} alt="user" />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
