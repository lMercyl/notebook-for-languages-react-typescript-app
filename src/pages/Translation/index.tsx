import React from 'react';
import './Translation.scss';
import { Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ActiveButton, Button } from '../../components/Button';
import Error from '../../components/Error';
import { useSelector } from 'react-redux';
import { selectAnswer } from '../../redux/answer/selector';
import { selectResult } from '../../redux/result/selector';
import { selectVocabulary } from '../../redux/vocabulary/selector';
import { selectWords } from '../../redux/words/selector';
import { removeSource, removeTranslation, setWords } from '../../redux/words/slice';
import { setAnswer, setSource, setTranslate } from '../../redux/answer/slice';
import { addRight, addError, setTranslation, setAll } from '../../redux/result/slice';
import { shuffle } from 'lodash';
import { useAppDispatch } from '../../hooks/selectorHook';
import Support from '../../components/Support';

const Translation = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const result = useSelector(selectResult);
  const { list } = useSelector(selectVocabulary);
  const { source, translate } = useSelector(selectAnswer);
  const { sources, translations } = useSelector(selectWords);

  const [err, setErr] = React.useState<boolean>(false);
  const [start, setStart] = React.useState<boolean>(false);
  const [count, setCount] = React.useState<number>(0);

  const onClickAnswer = () => {
    if (source === '' || translate === '') {
      setErr(true);
    } else {
      if (list.find((item) => item.source === source && item.translate === translate)) {
        dispatch(addRight('translation'));
      } else {
        dispatch(addError('translation'));
      }
      setCount((count) => count + 1);
      setErr(false);
      dispatch(setAnswer({ source: '', translate: '' }));
      dispatch(removeSource(source));
      dispatch(removeTranslation(translate));
    }
  };

  React.useEffect(() => {
    dispatch(
      setWords({
        sources: shuffle(list.map((item) => item.source)),
        translations: shuffle(list.map((item) => item.translate)),
      }),
    );
    dispatch(setAnswer({ source: '', translate: '' }));
    dispatch(setAll(list.length * 2));
    dispatch(setTranslation({ right: 0, error: 0 }));
  }, []);

  React.useEffect(() => {
    if (count === list.length) {
      localStorage.setItem('result', JSON.stringify(result));
      navigate('/notebook-for-languages-react-typescript-app');
    }
  }, [count]);

  return (
    <>
      {!start && (
        <>
          <Row>
            <Support
              title="translation"
              text="You have to match the translations of the words. Words will be in random order"
            />
          </Row>
          <ActiveButton onClickButton={() => setStart(true)} side>
            Continue
          </ActiveButton>
        </>
      )}
      {err && (
        <Row>
          <Error message="Fill out the answer below" />
        </Row>
      )}
      {start && (
        <>
          <Row className="justify-content-center mt-5 mb-5">
            <span className="translation mb-3">
              {source !== '' ? source : '<Word>'} - {translate !== '' ? translate : '<Translation>'}
            </span>
            <ActiveButton onClickButton={onClickAnswer} side>
              reply
            </ActiveButton>
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
      )}
    </>
  );
};

export default Translation;
