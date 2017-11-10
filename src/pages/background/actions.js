export const refreshBookmark = (data) => ({
  type: 'REFRESH',
  urlList: data
})
export const deleteAllBookmark = () => ({
  type: 'DELETE-ALL',
})
export const deleteOneBookmark = (url) => ({
  type: 'DELETE-ONE',
  url: url
})
