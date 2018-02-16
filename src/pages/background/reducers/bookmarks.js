const defaultState = {
  tabs: [],
  chronology: [],
  addFromButton: false,
  search: "",
  searchResult: []
};

const bookmark = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        tabs: [{ tab: action.urlList, expiry: action.expiry }, ...state.tabs]
      };
    case "ADD-FROM-BUTTON":
      return {
        ...state,
        addFromButton: action.addFromButton
      };
    case "REFRESH":
      return {
        ...state,
        tabs: [{ tab: action.urlList, expiry: action.expiry }, ...state.tabs]
      };
    case "DELETE-ALL":
      return {
        ...state,
        tabs: []
      };
    case "DELETE-ONE":
      return {
        ...state,
        tabs: [
          ...state.tabs.filter(element => element.tab[0].url !== action.url)
        ],
        addFromButton: false
      };
    case "EXPIRY":
      return {
        ...state,
        tabs: [
          ...state.tabs.filter(element => element.tab[0].url !== action.url)
        ],
        chronology: [
          ...state.tabs.filter(element => element.tab[0].url === action.url),
          ...state.chronology
        ]
      };
    case "SEARCH":
      return {
        ...state,
        searchResult: [
          ...state.tabs.filter(
            element =>
              element.tab[0].title
                .toLowerCase()
                .indexOf(action.textSearched.toLowerCase()) !== -1
          ),
          ...state.chronology.filter(
            element =>
              element.tab[0].title
                .toLowerCase()
                .indexOf(action.textSearched.toLowerCase()) !== -1
          )
        ],
        search: action.textSearched
      };
    case "EMPTY-SEARCH":
      return {
        ...state,
        searchResult: [],
        search: ""
      };
  }
  return state;
};

export default bookmark;
