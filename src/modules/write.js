import { createAction, handleActions } from 'redux-actions';

const INITIALIZE = 'write/INITIALIZE';
const CHANGE_FILED = 'write/CHANGE_FIELD';

export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FILED, ({ key, value }) => ({
  key,
  value,
}));

const initialState = {
  title: '',
  body: '',
  tags: [],
};

const write = handleActions(
  {
    [INITIALIZE]: (state) => initialState,
    [CHANGE_FILED]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value,
    }),
  },
  initialState,
);

export default write;
