import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <Container className="pt-5 pb-5">
      <Row className="mb-3 align-items-center justify-content-center">
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
      </Row>
      <Row className="align-items-center justify-content-center">
        <Col lg={3} className="d-flex align-items-center justify-content-center">
          <span className="privacy">Artem Ivanov</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
