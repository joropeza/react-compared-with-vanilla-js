import randomWord from 'random-words';

//ACTION CONSTANTS

const WORDS_REQUEST = 'WORDS_REQUEST';
const WORDS_REQUEST_SUCCESS = 'WORDS_REQUEST_SUCCESS';
const WORDS_REQUEST_FAILURE = 'WORDS_REQUEST_FAILURE';

//ACTION HANDLERS

const initialState = 'Hello';

export default function concepts(state = initialState, action) {
  switch (action.type) {
    case WORDS_REQUEST:
      return state;
    case WORDS_REQUEST_SUCCESS:
      return action.data;
    case WORDS_REQUEST_FAILURE:
      return 'Sorry, an error has occurred';
  default:
    return state;
  }
}

//ACTION CREATORS

function wordsRequest() {
  return {
    type: WORDS_REQUEST
  };
}

function wordsRequestSuccess(data) {
  return {
    type: WORDS_REQUEST_SUCCESS,
    data
  };
}

function wordsRequestFailure(err) {
  return {
    type: WORDS_REQUEST_FAILURE,
    data: err
  };
}

//THUNKS

export function wordsRequestAsync() {
  return dispatch => {
    dispatch(wordsRequest());
    let word = randomWord();
    // if randomWord() returned a promise, we would chain here and dispatch either
    // success or failure based on the result
    dispatch(wordsRequestSuccess(word));
  };
}