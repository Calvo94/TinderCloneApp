  import * as types from '../actions/types';

  const INITIAL_STATE = {
    isLoading: false,
    data: [],
    error: false
  };

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.RECV_DATA:
			return Object.assign({}, state, { isLoading: false, data: action.data, error: false });
		default:
			return state;
	}
};
