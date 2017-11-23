
const defaultState = {
  buttonCog: false
}

const animation = (state=defaultState,action) => {
  switch (action.type) {
    case 'TOGGLE-COG':
      return {
        ...state,
        buttonCog: action.buttonCog
      }
    case 'TOGGLE-SEARCH':
      return {
        ...state,
        toggleSearch: action.toggleSearch
      }
    default:
      return state;
  }

}

export default animation;
