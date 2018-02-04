import { put, takeEvery } from 'redux-saga/effects'
import { IAction } from 'typed-redux-reducers'

function* fetchUser(action: IAction) {
    yield put({type: 'USER_FETCH_FAILED'})
}

function* mySaga() {
  yield takeEvery('USER_FETCH_REQUESTED', fetchUser)
}

export default mySaga