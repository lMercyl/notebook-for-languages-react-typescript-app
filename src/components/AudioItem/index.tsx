import React from 'react';
import styles from './AudioItem.module.scss';
import play from '../../assets/images/play.svg';
import stop from '../../assets/images/stop.svg';
import { Button } from '../Button';
import { Row, Col } from 'react-bootstrap';
import TextField from '../TextField';
import joji from '../../assets/images/sounds/joji.png';
import jojiSound from '../../assets/sounds/joji-777.mp3';

type AudioItemProps = {
  children?: React.ReactNode;
};

const AudioItem = ({ children }: AudioItemProps) => {
  const [playSound, setPlaySound] = React.useState<boolean>(false);
  const [sound, setSound] = React.useState<HTMLAudioElement>();

  React.useEffect(() => {
    const newSound = new Audio(jojiSound);
    setSound(newSound);
  }, []);

  React.useEffect(() => {
    if (sound !== undefined) {
      if (!playSound) {
        sound.pause();
        sound.currentTime = 0;
      } else {
        sound.play();
      }
    }
  }, [playSound]);

  return (
    <>
      <Row className={styles.item}>
        <Col lg={4} className="d-flex align-items-center">
          <Button onClickButton={() => setPlaySound(!playSound)} img={true}>
            <img width={50} height={50} src={!playSound ? play : stop} alt="arrow" />
          </Button>
          <div className={styles.contain}>
            <img width={50} height={50} src={joji} alt={joji} />
            <span>{children}</span>
          </div>
        </Col>
        <Col lg={8}>
          <TextField placeholder="translation" />
        </Col>
      </Row>
    </>
  );
};

export default AudioItem;
