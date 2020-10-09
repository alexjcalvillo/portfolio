import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* sendEmail(action) {
  try {
    yield console.log(action.payload);
    yield axios({
      method: 'POST',
      url: 'api/nodemailer/mail',
      data: {
        email: action.payload,
      },
    });
    yield put({
      type: 'SET_EMAIL_STATUS',
      payload: { email: action.payload },
    });
  } catch (err) {
    alert(`I don't think so chief. ${err}`);
  }
}

function* emailSaga() {
  yield takeLatest('SEND_EMAIL', sendEmail);
}

export default emailSaga;
