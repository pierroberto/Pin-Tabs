export const add = (data) => {
  console.log('inside actions..', data)
  return ({
    type: 'ADD',
    counter: data
  })
}
