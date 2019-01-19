import { getAllUser, addUser, loginUser, getComu } from './db'

const resolvers = {
  Query: {
    getComu: () => getComu(),
    getAllUser: () => getAllUser()
  },
  Mutation: {
    addUser: (_, { name, email, pw }) => addUser(name, email, pw),
    loginUser: (_, { email, pw }) => loginUser(email, pw)
  }
}

export default resolvers