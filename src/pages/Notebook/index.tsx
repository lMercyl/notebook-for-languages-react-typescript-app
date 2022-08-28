import { Row, Col } from 'react-bootstrap';
import Button from '../../components/Button';
import Progress from '../../components/Progress';
import TextField from '../../components/TextField';
import Error from '../../components/Error';
import './Notebook.scss';
import axios from 'axios';
import React from 'react';
import Setting from '../../components/Setting';
import Delete from '../../components/Delete';
import imgSetting from '../../assets/images/setting.svg';
import NavTask from '../../components/NavTask';

interface Item {
  source: string;
  translate: string;
}

interface Result {
  right: number;
  error: number;
  all: number;
}

const Notebook = () => {
  const [text, setText] = React.useState<string>('');
  const [list, setList] = React.useState<Array<Item>>(() => {
    if (localStorage.getItem('list') !== null) {
      const data = localStorage.getItem('list');
      if (typeof data === 'string') {
        return JSON.parse(data).list.length === 0 ? [] : JSON.parse(data).list;
      }
    } else {
      return [];
    }
  });
  const [result, setResult] = React.useState<Result>(() => {
    if (localStorage.getItem('result') !== null) {
      const data = localStorage.getItem('result');
      if (typeof data === 'string') {
        return JSON.parse(data).result.all === 0
          ? { right: 0, error: 0, all: 0 }
          : JSON.parse(data).result;
      }
    } else {
      return { right: 0, error: 0, all: 0 };
    }
  });
  const [resultChoose, setResultChoose] = React.useState<Result>(() => {
    if (localStorage.getItem('resultChoose') !== null) {
      const data = localStorage.getItem('resultChoose');
      if (typeof data === 'string') {
        return JSON.parse(data).result.all === 0
          ? { right: 0, error: 0, all: 0 }
          : JSON.parse(data).result;
      }
    } else {
      return { right: 0, error: 0, all: 0 };
    }
  });
  const [error, setError] = React.useState<boolean>(false);
  const [setting, setSetting] = React.useState<boolean>(false);
  const [hide, setHide] = React.useState<boolean>(false);
  const [displayDelete, setDisplayDelete] = React.useState<boolean>(false);

  const onChangeWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value.toLowerCase());
  };

  const isExists = (text: string) => {
    return list.find((item: Item) => item.source === text);
  };

  const onClickButtonDelete = (deleteItem: Item) => {
    setList(list.filter((item: Item) => item !== deleteItem));
  };

  const onClickTranslate = async () => {
    if (text === '###') {
      setList([]);
    } else {
      if (!isExists(text)) {
        setError(false);
        const request = {
          q: text,
          source: 'en',
          target: 'ru',
        };
        try {
          const { data } = await axios.post(`https://libretranslate.de/translate`, request);
          setList([...list, { source: text, translate: data.translatedText }]);
        } catch (err) {
          setError(true);
          console.log(err);
        }
      } else {
        setError(true);
      }
    }
  };

  React.useEffect(() => {
    const data = {
      list: list,
    };
    return localStorage.setItem('list', JSON.stringify(data));
  });

  return (
    <>
      <Progress right={result.right} all={result.all} />
      <NavTask right={result.right} all={result.all} />
      {error && (
        <Row className="mt-3">
          <Col lg={12}>
            <Error message="The word has already been added or the wrong word has been written" />
          </Col>
        </Row>
      )}
      <Row className="mt-2 gy-4">
        <Col lg={5}>
          <TextField onChangeInput={onChangeWord} placeholder="word" />
        </Col>
        <Col lg={2}>
          <TextField placeholder="language" value="english" disabled={true} />
        </Col>
        <Col lg={5}>
          <Button onClickButton={onClickTranslate} text="translate" />
        </Col>
      </Row>
      <Row className="mt-5 mb-4 align-items-center justify-content-between">
        <Col lg={3}>
          <span className="title-list">
            Vocabulary
            <button onClick={() => setSetting(!setting)} className="button-setting img-button">
              <img width={25} height={25} src={imgSetting} alt="Setting icon" />
            </button>
          </span>
        </Col>
      </Row>
      {setting ? (
        <Row className="mb-4">
          <Col lg={4}>
            <Setting
              onClickHide={() => setHide(!hide)}
              onClickDeleteWord={() => setDisplayDelete(!displayDelete)}
            />
          </Col>
        </Row>
      ) : null}
      <Row>
        {list.length !== 0 ? (
          list.map((item: Item) => (
            <Col key={item.source} lg={4}>
              <ul className="vocabulary">
                <li className="d-flex align-items-center">
                  {item.source} -{' '}
                  <em className={hide ? 'hide-translate' : undefined}>{item.translate}</em>
                  {displayDelete ? (
                    <Delete item={item} onClickDelete={onClickButtonDelete} />
                  ) : null}
                </li>
              </ul>
            </Col>
          ))
        ) : (
          <Col lg={12} className="d-flex justify-content-center">
            <span className="empty">Vocabulary is empty</span>
          </Col>
        )}
      </Row>
    </>
  );
};

export default Notebook;
