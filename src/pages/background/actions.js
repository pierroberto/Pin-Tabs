export const addBookmark = (link) => ({
  type: 'ADD',
  link: link
})
export const refreshBookmark = (data) => ({
  type: 'REFRESH',
  urlList: data
})
export const deleteAllBookmark = () => ({
  type: 'DELETE-ALL',
})
