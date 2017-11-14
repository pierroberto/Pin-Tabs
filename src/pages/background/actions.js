
//BOOKMARKS ACTIONS

export const refreshBookmark = (data, time) => ({
  type: 'REFRESH',
  urlList: data,
  expiry: time
})

export const deleteAllBookmark = () => ({
  type: 'DELETE-ALL',
})

export const deleteOneBookmark = (url) => ({
  type: 'DELETE-ONE',
  url: url
})

export const addBookmark = (url) => ({
  type: 'ADD',
  urlList: url,
  expiry: new Date().getTime()
})

export const addFromButton = (flag) => ({
  type: 'DELETE-ONE',
  addFromButton: flag
})

//SETTINGS actions

export const toggleButton = (flag) => ({
  type: 'TOGGLE-BUTTON',
  toggleButton: flag
})

export const expireDate = (date) => ({
  type: 'UPDATE-DATE',
  expireDate: date
})
