import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <Container className="mt-4 pt-5 pb-5">
      <Row className="align-items-center justify-content-center">
        <Col lg={3} className="d-flex align-items-center justify-content-center">
          <span className="privacy">Artem Ivanov</span>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
