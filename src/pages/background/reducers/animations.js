
const defaultState = {
  buttonCog: false
}

const animation = (state=defaultState,action) => {
  switch (action.type) {
    case 'TOGGLE-COG':
    console.log('cog');
      return {
        ...state,
        buttonCog: action.buttonCog
      }
    default:
      return state;
  }
}

export default animation;
