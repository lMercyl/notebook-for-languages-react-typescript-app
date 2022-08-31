import React from 'react';
import './Notebook.scss';
import { Row, Col } from 'react-bootstrap';
import { Button } from '../../components/Button';
import Progress from '../../components/Progress';
import TextField from '../../components/TextField';
import Error from '../../components/Error';
import ActionList from '../../components/ActionList';
import Delete from '../../components/Delete';
import imgSetting from '../../assets/images/setting.svg';
import NavTask from '../../components/NavTask';
import VocItem from '../../components/VocItem';
import SettingItem from '../../components/SettingItem';
import NavItem from '../../components/NavItem';
import { useSelector } from 'react-redux';
import { selectVocabulary } from '../../redux/vocabulary/selector';
import { selectItem } from '../../redux/item/selector';
import { Item } from '../../redux/vocabulary/types';
import { useAppDispatch } from '../../hooks/selectorHook';
import { onChangeItem, setItem } from '../../redux/item/slice';
import { fetchItem } from '../../redux/item/asyncAction';
import { addItem } from '../../redux/vocabulary/slice';
import { selectResult } from '../../redux/result/selector';

interface userActions {
  disableButton: boolean;
  hideWord: boolean;
  hideSettings: boolean;
  error: boolean;
  delete: boolean;
}

const Notebook = () => {
  const dispatch = useAppDispatch();

  const result = useSelector(selectResult);
  const { list } = useSelector(selectVocabulary);
  const { source, translate } = useSelector(selectItem);
  const { translation, speed, reading, allTask } = useSelector(selectResult);

  const [userActions, setUserActions] = React.useState<userActions>({
    disableButton: false,
    hideWord: false,
    hideSettings: false,
    error: false,
    delete: false,
  });

  const timeRef = React.useRef<any>();

  const getTranslate = () => {
    try {
      dispatch(fetchItem({ text: source }));
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserActions({ ...userActions, disableButton: true });
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
    setUserActions({ ...userActions, disableButton: translate !== '' ? false : true });
  }, [translate]);

  React.useEffect(() => {
    const data = {
      list: list,
    };
    localStorage.setItem('list', JSON.stringify(data));
    localStorage.setItem('result', JSON.stringify(result));
  });

  return (
    <>
      <Progress right={translation?.right + speed?.right + reading?.right} all={allTask} />
      <Row className="mt-3">
        <Col lg={12}>
          <NavTask>
            <NavItem
              right={translation?.right}
              all={
                allTask !== 0 && (translation?.right !== 0 || translation?.error !== 0)
                  ? allTask / 2
                  : 0
              }
              to="translation">
              Translation
            </NavItem>
            <NavItem
              right={speed?.right}
              all={allTask !== 0 && (speed?.right !== 0 || speed?.error !== 0) ? allTask / 2 : 0}
              to="speed/4">
              Speed
            </NavItem>
            <NavItem
              right={reading?.right}
              all={allTask !== 0 && reading?.right !== 0 && reading?.error !== 0 ? allTask / 2 : 0}
              to="reading">
              Reading
            </NavItem>
          </NavTask>
        </Col>
      </Row>
      {userActions.error && (
        <Row className="mt-3">
          <Col lg={12}>
            <Error message="The word has already been added or the wrong word has been written" />
          </Col>
        </Row>
      )}
      <Row className="mt-2 gy-4">
        <Col lg={4}>
          <TextField
            reference={timeRef}
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
          <Button onClickButton={onClickAdd} disabled={userActions.disableButton ? true : false}>
            add
          </Button>
        </Col>
      </Row>
      <Row className="mt-5 mb-4 align-items-center justify-content-between">
        <Col lg={3} className="d-flex align-items-center">
          <span className="text">Vocabulary</span>
          <Button
            onClickButton={() =>
              setUserActions({ ...userActions, hideSettings: !userActions.hideSettings })
            }
            img={true}>
            <img width={25} height={25} src={imgSetting} alt="Setting icon" />
          </Button>
        </Col>
      </Row>
      {userActions.hideSettings && (
        <Row className="mb-4">
          <Col lg={4}>
            <ActionList>
              <SettingItem
                onClickButton={() =>
                  setUserActions({ ...userActions, hideWord: !userActions.hideWord })
                }>
                hide translation
              </SettingItem>
              <SettingItem
                onClickButton={() =>
                  setUserActions({ ...userActions, delete: !userActions.delete })
                }>
                delete words
              </SettingItem>
            </ActionList>
          </Col>
        </Row>
      )}
      <Row>
        {list.length !== 0 ? (
          list.map((item: Item, index) => (
            <Col key={index} lg={4}>
              <VocItem source={item.source} translate={item.translate} hide={userActions.hideWord}>
                {userActions.delete && <Delete item={item} />}
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
