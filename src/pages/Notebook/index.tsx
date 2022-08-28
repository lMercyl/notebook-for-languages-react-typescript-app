import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Button } from '../../components/Button';
import Progress from '../../components/Progress';
import TextField from '../../components/TextField';
import Error from '../../components/Error';
import './Notebook.scss';
import Setting from '../../components/Setting';
import Delete from '../../components/Delete';
import imgSetting from '../../assets/images/setting.svg';
import NavTask from '../../components/NavTask';
import VocItem from '../../components/VocItem';
import { useSelector } from 'react-redux';
import { selectVocabulary } from '../../redux/vocabulary/selector';
import { selectItem } from '../../redux/item/selector';
import { Item } from '../../redux/vocabulary/types';
import { useAppDispatch } from '../../hooks/selectorHook';
import { onChangeItem, setItem } from '../../redux/item/slice';
import { fetchItem } from '../../redux/item/asyncAction';
import { addItem } from '../../redux/vocabulary/slice';
import useDebounce from '../../hooks/useDebounce';

const Notebook = () => {
  const { list } = useSelector(selectVocabulary);
  const { source, translate } = useSelector(selectItem);
  const [hide, setHide] = React.useState<boolean>(false);
  const dispatch = useAppDispatch();
  const timeRef = React.useRef<any>();

  const getTranslate = () => {
    try {
      dispatch(fetchItem({ text: source }));
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHide(true);
    dispatch(onChangeItem(event.target.value));
  };

  const onClickAdd = () => {
    dispatch(addItem({ source: source, translate: translate }));
    dispatch(setItem({ source: '', translate: '' }));
  };

  React.useEffect(() => {
    clearInterval(timeRef.current);
    timeRef.current = setTimeout(getTranslate, 1000);
    return () => clearInterval(timeRef.current);
  }, [source]);

  React.useEffect(() => {
    translate !== '' ? setHide(false) : setHide(true);
  }, [translate]);

  React.useEffect(() => {
    const data = {
      list: list,
    };
    localStorage.setItem('list', JSON.stringify(data));
  });

  return (
    <>
      <Progress right={5} all={10} />
      <NavTask right={5} all={10} />
      {false && (
        <Row className="mt-3">
          <Col lg={12}>
            <Error message="The word has already been added or the wrong word has been written" />
          </Col>
        </Row>
      )}
      <Row className="mt-2 gy-4">
        <Col lg={4}>
          <TextField
            ref={timeRef}
            value={source}
            name="source"
            onChangeInput={onChangeWord}
            placeholder="word"
          />
        </Col>
        <Col lg={2}>
          <TextField placeholder="language" value="english" disabled={true} />
        </Col>
        <Col lg={4}>
          <TextField value={translate} placeholder="translation" disabled={true} />
        </Col>
        <Col lg={2}>
          <Button onClickButton={onClickAdd} disabled={hide ? true : false}>
            add
          </Button>
        </Col>
      </Row>
      <Row className="mt-5 mb-4 align-items-center justify-content-between">
        <Col lg={3}>
          <span className="text">
            Vocabulary
            <button className="button-setting img-button">
              <img width={25} height={25} src={imgSetting} alt="Setting icon" />
            </button>
          </span>
        </Col>
      </Row>
      {true && (
        <Row className="mb-4">
          <Col lg={4}>
            <Setting />
          </Col>
        </Row>
      )}
      <Row>
        {list.length !== 0 ? (
          list.map((item: Item, index) => (
            <Col key={index} lg={4}>
              <VocItem source={item.source} translate={item.translate} hide={false}>
                {true && <Delete item={item} />}
              </VocItem>
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
