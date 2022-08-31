import React from 'react';
import './Speed.scss';
import { range, shuffle } from 'lodash';
import { Row, Col } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks/selectorHook';
import { selectAnswer } from '../../redux/answer/selector';
import { selectResult } from '../../redux/result/selector';
import { selectVocabulary } from '../../redux/vocabulary/selector';
import { selectPositions } from '../../redux/positions/selector';
import { setAnswer, setSource, setTranslate } from '../../redux/answer/slice';
import { addError, addRight, setAll, setResult, setSpeed } from '../../redux/result/slice';
import { setPosition, setVariant } from '../../redux/positions/slice';
import { shuffleArr } from '../../utils/suffle';
import { Item } from '../../redux/vocabulary/types';
import { latest } from 'immer/dist/internal';

const Speed = () => {
  const { size } = useParams();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { list } = useSelector(selectVocabulary);
  const { source, translate } = useSelector(selectAnswer);
  const result = useSelector(selectResult);
  const { position, variant } = useSelector(selectPositions);

  const [seconds, setSeconds] = React.useState<number>(5);
  const [count, setCount] = React.useState<number>();
  const [changeTask, setChangeTask] = React.useState<boolean>(false);

  const timeRef = React.useRef<any>();

  const onClickVariant = (text: string) => {
    if (text === translate) {
      dispatch(addRight('speed'));
    } else {
      dispatch(addError('speed'));
    }
    clearInterval(timeRef.current);
    setSeconds(5);
    if (count !== undefined) {
      setCount(count + 1);
    }
  };

  React.useEffect(() => {
    setCount(0);
    dispatch(setPosition(shuffle(range(0, list.length))));
    dispatch(setSpeed({ right: 0, error: 0 }));
    return () => {
      clearInterval(timeRef.current);
      localStorage.setItem('result', JSON.stringify(result));
    };
  }, []);

  React.useEffect(() => {
    if (seconds === 0 && count !== undefined) {
      clearInterval(timeRef.current);
      setSeconds(5);
      setCount(count + 1);
    }
  }, [seconds]);

  React.useEffect(() => {
    if (count !== undefined) {
      setChangeTask(true);
      timeRef.current = setInterval(() => setSeconds((second) => second - 1), 1000);
      if (count !== list.length) {
        dispatch(
          setAnswer({
            source: list[position[count]]?.source,
            translate: list[position[count]]?.translate,
          }),
        );
      } else {
        navigate('/notebook-for-languages-react-typescript-app');
      }
    }
  }, [count]);

  React.useEffect(() => {
    setChangeTask(false);
    const tmp = shuffle(
      list.map((item) => item.translate).filter((item: string) => item !== translate),
    ).splice(0, Number(size) - 1);
    tmp.push(translate);
    dispatch(setVariant(shuffle(tmp)));
  }, [changeTask]);

  return (
    <>
      <Row className="pt-3 pb-3 mb-5">
        <span className="speed">
          {'{"'}
          {source}
          {'"}'}
        </span>
      </Row>
      <Row>
        <span className="speed">{seconds}</span>
      </Row>
      <Row className="mt-5 justify-content-center">
        {variant.map((item: any) => (
          <Col lg={2} className="d-flex justify-content-center">
            <button onClick={() => onClickVariant(item)} className="variant">
              {item}
            </button>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Speed;
