const shortid = require('shortid')

const initializeUsers = () => ([
  { id: shortid.generate(), username: 'Quartz', password: 'qwe'},
  { id: shortid.generate(), username: 'Tommy', password: 'qwe' },
])

let users = initializeUsers()

const find = () => {
  return Promise.resolve(users)
}

const findById = id => {
  const user = users.find(d => d.id === id)
  return Promise.resolve(user)
}

const insert = ({ username, password }) => {
  const newUser = { id: shortid.generate(), username, password}
  users.push(newUser)
  return Promise.resolve(newUser)
}

const resetDB = () => { 
  users = initializeUsers()
}

module.exports = {
  find,
  findById,
  insert,
  resetDB, 
}