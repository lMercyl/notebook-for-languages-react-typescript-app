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
          <h1 className="header-title-mobile">{'<Notebook />'}</h1>
        </Col>
        <Col lg={6} className="footer-navigator">
          <nav>
            <ul className="footer-navigator d-flex align-items-center justify-content-center">
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
        <Col lg={1} className="user-button d-flex justify-content-end">
          <Button img={true}>
            <img width={45} height={45} src={user} alt="user" />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
