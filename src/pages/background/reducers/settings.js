
const defaultState = {
  button: false,
  buttonHystory: true,
  expireDate: 86400000 // 1 day

}

const settings = (state=defaultState,action) => {
  switch (action.type) {
    case 'TOGGLE-BUTTON':
      return {
        ...state,
        button: action.toggleButton
      }
    case 'TOGGLE-BUTTON-HISTORY':
      return {
        ...state,
        buttonHistory: action.toggleButtonHistory
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
