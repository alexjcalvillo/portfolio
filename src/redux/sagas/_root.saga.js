import { all } from 'redux-saga/effects';
import emailSaga from './email.saga';

export default function* rootSaga() {
  try {
    yield all([emailSaga()]);
  } catch (err) {
    alert('Something did not work there.');
  }
}
