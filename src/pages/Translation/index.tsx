import React from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Error from '../../components/Error';
import './Translation.scss';

interface Item {
  source: string;
  translate: string;
}

interface Result {
  right: number;
  error: number;
  all: number;
}

const shuffle = (arr: Array<any>) => {
  let j, temp;
  for (let i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
  }
  return arr;
};

const Translation = () => {
  const [list, setList] = React.useState<Array<Item>>(() => {
    const data = localStorage.getItem('list');
    if (typeof data === 'string') {
      return JSON.parse(data).list.length === 0 ? [] : JSON.parse(data).list;
    }
  });
  const [word, setWord] = React.useState<Array<string>>(
    shuffle(list.map((item: Item) => item.source)),
  );
  const [translate, setTranslate] = React.useState<Array<string>>(
    shuffle(list.map((item: Item) => item.translate)),
  );
  const [answer, setAnswer] = React.useState<Item>({ source: '', translate: '' });
  const [resultArr, setResultArr] = React.useState<Array<Item>>([]);
  const [result, setResult] = React.useState<Result>({
    right: 0,
    error: 0,
    all: word.length + translate.length,
  });
  const [err, setErr] = React.useState<boolean>(false);

  const onClickAnswer = () => {
    if (answer.source === '' || answer.translate === '') {
      setErr(true);
    } else {
      setErr(false);
      if (
        list.find(
          (item: Item) => item.source === answer.source && item.translate === answer.translate,
        )
      ) {
        setResult({ ...result, right: result.right + 2 });
      } else {
        setResult({ ...result, error: result.error + 2 });
      }
      setResultArr([...resultArr, answer]);
      setAnswer({ source: '', translate: '' });
      setWord(word.filter((item: string) => item !== answer.source));
      setTranslate(translate.filter((item: string) => item !== answer.translate));
    }
  };

  console.log(result);

  const onClickComplete = () => {
    const data = {
      result: result,
    };
    localStorage.setItem('result', JSON.stringify(data));
  };

  return (
    <>
      {err && (
        <Row>
          <Error message="Error: Fill out the answer below" />
        </Row>
      )}
      <Row className="justify-content-center mt-5 mb-5">
        <p className="translation mb-5">
          {answer.source === '' ? '<Word>' : answer.source} -{' '}
          {answer.translate === '' ? '<Translation>' : <em>{answer.translate}</em>}
        </p>
        <button
          onClick={word.length !== 0 && translate.length !== 0 ? onClickAnswer : onClickComplete}
          className="submit">
          {word.length === 0 && translate.length === 0 ? (
            <Link to="/notebook-for-languages-react-typescript-app">Complete</Link>
          ) : (
            'Reply'
          )}
        </button>
      </Row>
      <Row>
        <p className="title-list mb-3">The words</p>
      </Row>
      <Row>
        {word.length !== 0 ? (
          word.map((item: string) => (
            <button onClick={() => setAnswer({ ...answer, source: item })} className="item">
              {item}
            </button>
          ))
        ) : (
          <p className="item">word is empty</p>
        )}
      </Row>
      <Row>
        <p className="title-list mb-3 mt-5">Translations</p>
      </Row>
      <Row>
        {translate.length !== 0 ? (
          translate.map((item: string) => (
            <button
              onClick={() => setAnswer({ ...answer, translate: item })}
              className="item translate">
              {item}
            </button>
          ))
        ) : (
          <p className="item">translation is empty</p>
        )}
      </Row>
    </>
  );
};

export default Translation;
