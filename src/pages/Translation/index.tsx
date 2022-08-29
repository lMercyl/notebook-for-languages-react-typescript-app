import React from 'react';
import './Translation.scss';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ActiveButton, Button } from '../../components/Button';
import Error from '../../components/Error';
import { useSelector } from 'react-redux';
import { selectAnswer } from '../../redux/answer/selector';
import { selectResult } from '../../redux/result/selector';
import { selectVocabulary } from '../../redux/vocabulary/selector';
import { selectWords } from '../../redux/words/selector';
import { removeSource, removeTranslation, setWords } from '../../redux/words/slice';
import { setAnswer, setSource, setTranslate } from '../../redux/answer/slice';
import { addRight, addError, setResult } from '../../redux/result/slice';
import { shuffle } from '../../utils/suffle';
import { useAppDispatch } from '../../hooks/selectorHook';

const Translation = () => {
  const [err, setErr] = React.useState<boolean>(false);

  const { list } = useSelector(selectVocabulary);
  const result = useSelector(selectResult);
  const { source, translate } = useSelector(selectAnswer);
  const { sources, translations } = useSelector(selectWords);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(
      setWords({
        sources: shuffle(list.map((item) => item.source)),
        translations: shuffle(list.map((item) => item.translate)),
      }),
    );
    dispatch(setResult({ right: 0, error: 0, all: list.length * 2 }));
  }, []);

  const onClickAnswer = () => {
    if (source === '' || translate === '') {
      setErr(true);
    } else {
      if (list.find((item) => item.source === source && item.translate === translate)) {
        dispatch(addRight());
      } else {
        dispatch(addError());
      }
      dispatch(setAnswer({ source: '', translate: '' }));
      dispatch(removeSource(source));
      dispatch(removeTranslation(translate));
    }
  };

  const onClickComplete = () => {
    const data = {
      right: result.right,
      error: result.error,
      all: result.all,
    };
    localStorage.setItem('result', JSON.stringify(data));
  };

  return (
    <>
      {err && (
        <Row>
          <Error message="Fill out the answer below" />
        </Row>
      )}
      <Row className="justify-content-center mt-5 mb-5">
        <span className="translation mb-5">
          {source !== '' ? source : '<Word>'} - {translate !== '' ? translate : '<Translation>'}
        </span>
        {sources.length !== 0 ? (
          <ActiveButton onClickButton={onClickAnswer} side>
            reply
          </ActiveButton>
        ) : (
          <Link
            onClick={onClickComplete}
            className="submit"
            to="/notebook-for-languages-react-typescript-app">
            complete
          </Link>
        )}
      </Row>
      <Row>
        <p className="title-list mb-3">The words</p>
      </Row>
      <Row>
        {sources.length !== 0 ? (
          sources.map((word, index) => (
            <Button onClickButton={() => dispatch(setSource(word))} key={index} item={true}>
              {word}
            </Button>
          ))
        ) : (
          <span className="item">word is empty</span>
        )}
      </Row>
      <Row>
        <span className="title-list mb-3 mt-5">Translations</span>
      </Row>
      <Row>
        {translations.length !== 0 ? (
          translations.map((word, index) => (
            <Button onClickButton={() => dispatch(setTranslate(word))} key={index} item={true}>
              {word}
            </Button>
          ))
        ) : (
          <span className="item">translation is empty</span>
        )}
      </Row>
    </>
  );
};

export default Translation;
