import './Progress.scss';
import { Col, Row } from 'react-bootstrap';

interface ProgressProps {
  right: number;
  error?: number;
  all: number;
}

const Progress = ({ right, all }: ProgressProps) => {
  return (
    <>
      <Row className="mb-2 align-items-center justify-content-between">
        <Col lg={1} xs={1} className="d-flex">
          <span className="progress-text">Progress</span>
        </Col>
        <Col lg={1} xs={1} className="d-flex justify-content-end">
          <span className="progress-text">{all === 0 ? 0 : Math.floor((right / all) * 100)}%</span>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <div className="progress-container">
            <div
              style={{ width: `${Math.floor((right / all) * 100)}%` }}
              className={
                Math.floor((right / all) * 100) < 50
                  ? 'progress-line red'
                  : Math.floor((right / all) * 100) < 80
                  ? 'progress-line yellow'
                  : 'progress-line'
              }></div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Progress;
