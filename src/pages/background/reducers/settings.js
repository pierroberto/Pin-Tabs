
const defaultState = {
  button: false,
  expireDate: 8640000000 // 1 day
}

const settings = (state=defaultState,action) => {
  console.log('inside reduce settings', 'state', state,'action', action);
  switch (action.type) {
    case 'TOGGLE-BUTTON':
      return {
        ...state,
        button: action.toggleButton
      }
    case 'UPDATE-DATE':
    return {
      ...state,
      expireDate: action.expireDate
    }

  }
  return state
}

export default settings;
