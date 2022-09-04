import { Row } from 'react-bootstrap';
import './Reading.scss';
import React from 'react';
import { useAppDispatch } from '../../hooks/selectorHook';
import { useSelector } from 'react-redux';
import { selectText } from '../../redux/text/selector';
import axios from 'axios';
import { setText } from '../../redux/text/slice';
import { formatText } from '../../utils/formatText';
import { shuffle } from 'lodash';

const Reading = () => {
  return <></>;
};

export default Reading;
