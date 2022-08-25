import { Container, Row, Col } from 'react-bootstrap';
import './Header.scss';

const Header = () => {
  return (
    <Container>
      <Row className="pt-5 pb-5 align-items-center justify-content-center">
        <Col lg={6}>
          <h1 className="header-title">Notebook for languages</h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
