import './Speech.scss';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Button from '../../components/Button';
import TextField from '../../components/TextField';
import SoundCard from '../../components/SoundCard';
import Answer from '../../components/Answer';
import Error from '../../components/Error';
import { Link, useParams } from 'react-router-dom';

type Answer = {
  message: string | undefined;
  answer: string;
  status: boolean;
};

type SoundCardType = {
  id: number;
  name: string;
  track: string;
  img: string;
  sound: string;
  text: string;
};

const data = [
  {
    id: 1,
    name: 'eminem',
    track: 'when i am gone',
    img: 'https://sun9-52.userapi.com/impg/Wc82SFZeihukvoC2wQ8ufgoFLr31Q3YapFfqTA/bRjRnr1elmY.jpg?size=300x300&quality=96&sign=cea4fbdca8a1fc1fff138b2a822467a0&type=album',
    sound: '../../assets/sounds/when-i-gone.mp3',
    text: "it's my life my own words i guess",
  },
  {
    id: 5,
    name: 'eminem',
    track: 'rap god',
    img: 'https://sun9-52.userapi.com/impg/Wc82SFZeihukvoC2wQ8ufgoFLr31Q3YapFfqTA/bRjRnr1elmY.jpg?size=300x300&quality=96&sign=cea4fbdca8a1fc1fff138b2a822467a0&type=album',
    sound: '../../assets/sounds/eminem-rap-god.mp3',
    text: "uh sama lamaa duma lamaa you assuming i'm a human what i gotta do to get it through to you i'm superhuman innovative and I'm made of rubber so that anything you say is ricocheting off of me and it'll glue to you i'm devastating more than ever demonstrating how to give a motherfucking audience a feeling like it's levitating never fading and I know the haters are forever waiting for the day that they can say I fell off they'd be celebrating cause I know the way to get 'em motivated i make elevating music you make elevator",
  },
  {
    id: 3,
    name: 'eminem',
    track: 'lost yourself',
    img: 'https://sun9-52.userapi.com/impg/Wc82SFZeihukvoC2wQ8ufgoFLr31Q3YapFfqTA/bRjRnr1elmY.jpg?size=300x300&quality=96&sign=cea4fbdca8a1fc1fff138b2a822467a0&type=album',
    sound:
      'https://soundcloud.com/qvo1l3zjecxd/eminem-lost-yourself/s-ynX0Two6WPU?in=qvo1l3zjecxd/sets/1a-1/s-B08ueBxYA9j&si=3ca0bf7d17fc404eb30a08f72c0375c3&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing',
    text: 'his palms are sweaty knees weak arms are heavy',
  },
  {
    id: 4,
    name: 'joji',
    track: '777',
    img: 'https://sun9-59.userapi.com/impg/SeI-QfYCvZBNIHASUAGxCYN6M3ZJXggChkGfUg/EwCz2XLu-fw.jpg?size=1000x1000&quality=96&sign=1a7ba53e0a38220a46b620de47ada416&type=album',
    sound: '../../assets/sounds/joji-777.mp3',
    text: "cause i'll be gone til the next when the sun's up",
  },
  {
    id: 2,
    name: 'tyler',
    track: 'earthquake',
    img: 'https://sun9-20.userapi.com/impg/596FQysDKt9WQcA32M9O0B7393Hf6GWfKwwKHg/0pJ_tf2VKjE.jpg?size=274x274&quality=96&sign=eaf977d3c39764f0cbc569181cfb9267&type=album',
    sound: '../../assets/sounds/tyler-erthquake.mp3',
    text: "we ain't gotta ball don't give a fuck bout nun Beamin like fuck my lungs, huh just might call my lawyer",
  },
];

interface Result {
  right: number;
  error: number;
  all: number;
}

const Speech = () => {
  const { id } = useParams();
  const [result, setResult] = React.useState<Result>({ right: 0, error: 0, all: data.length + 1 });
  const [card, setCard] = React.useState(
    data.find((item: SoundCardType) => item.id === Number(id)),
  );
  const [answer, setAnswer] = React.useState<Answer>({
    message: card?.text.toLowerCase(),
    answer: '',
    status: false,
  });
  const [err, setErr] = React.useState<boolean>(false);
  const [submit, setSubmit] = React.useState<boolean>(false);

  const onChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer({ ...answer, answer: event.target.value.toLowerCase() });
  };

  const onClickAnswer = () => {
    if (answer.answer !== '') {
      setSubmit(true);
      setErr(false);
      setAnswer({ ...answer, status: answer.message === answer.answer });
      setResult({
        ...result,
        right: answer.status ? result.right + 1 : result.right,
        error: !answer.status ? result.error + 1 : result.error,
      });
    } else {
      setErr(true);
    }
  };

  React.useEffect(() => {
    const resultChoose = {
      result: result,
    };
    localStorage.setItem('resultChoose', JSON.stringify(resultChoose));
  });

  return (
    <>
      <SoundCard id={card?.id} name={card?.name} track={card?.track} img={card?.img} />
      {err && <Error message="Fill in the field below" />}
      {submit && (
        <Row>
          <Answer message={answer.message} answer={answer.answer} status={answer.status} />
        </Row>
      )}
      <Row className="justify-content-center">
        <Col lg={8} className="mb-5 mt-5">
          <TextField
            onChangeInput={onChangeAnswer}
            placeholder="words"
            disabled={submit ? true : false}
          />
        </Col>
        <Col lg={6} className="d-flex">
          {submit ? (
            <Link
              className="button-next"
              to={
                Number(id) === data.length + 2
                  ? `/notebook-for-languages-react-typescript-app`
                  : `/notebook-for-languages-react-typescript-app/speech/${Number(id) + 1}`
              }>
              next
            </Link>
          ) : (
            <Button onClickButton={onClickAnswer} text="reply" />
          )}
        </Col>
      </Row>
    </>
  );
};

export default Speech;
