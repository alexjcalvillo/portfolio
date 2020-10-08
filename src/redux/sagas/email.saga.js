import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* sendEmail(action) {
  try {
    yield console.log(action.payload);
  } catch (err) {
    alert("I don't think so chief.");
  }
}

function* emailSaga() {
  yield takeLatest('SEND_EMAIL', sendEmail);
}

export default emailSaga;
