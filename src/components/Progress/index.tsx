import './Progress.scss';
import { Col, Row } from 'react-bootstrap';

const Progress = () => {
  return (
    <>
      <Row className="mb-2 align-items-center justify-content-between">
        <Col lg={1} xs={1} className="d-flex">
          <span className="progress-text">Progress</span>
        </Col>
        <Col lg={1} xs={1} className="d-flex justify-content-end">
          <span className="progress-text">70%</span>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <div className="progress-container">
            <div className="progress-line"></div>
          </div>
          s
        </Col>
      </Row>
    </>
  );
};

export default Progress;
