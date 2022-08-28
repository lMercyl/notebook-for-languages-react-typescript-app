import { Row, Col } from 'react-bootstrap';
import styles from './SoundCard.module.scss';
import { useParams } from 'react-router-dom';
import React from 'react';
import when from '../../assets/sounds/eminem-when-i-gone.mp3';
import lost from '../../assets/sounds/eminem-lost-yourself.mp3';
import rapgod from '../../assets/sounds/eminem-rap-god.mp3';
import joji from '../../assets/sounds/joji-777.mp3';
import tyler from '../../assets/sounds/tyler-erthquake.mp3';

type SoundCardProps = {
  id: number | undefined;
  name: string | undefined;
  track: string | undefined;
  img: string | undefined;
  sound?: string;
  text?: string;
};

const SoundCard = ({ id, name, track, img, sound, text }: SoundCardProps) => {
  return (
    <>
      <Row className={styles.card}>
        <Col lg={6} className="d-flex align-items-center justify-content-center flex-column">
          <img width={300} height={300} src={img} alt={name} />
          <p>
            {name} - {track}
          </p>
        </Col>
        <Col lg={6} className="mb-5 mt-3">
          <audio
            controls
            src={
              id === 1
                ? when
                : id === 2
                ? tyler
                : id === 3
                ? lost
                : id === 4
                ? joji
                : id === 5
                ? rapgod
                : ''
            }
          />
        </Col>
      </Row>
    </>
  );
};

export default SoundCard;
