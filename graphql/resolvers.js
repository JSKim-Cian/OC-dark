import { getAllUser, addUser, getComu } from './db'

const resolvers = {
  Query: {
    getAllUser: () => getAllUser(),
    getComu: () => getComu()
  },
  Mutation: {
    addUser: (_, { name, email, pw }) => addUser(name, email, pw)
  }
}

export default resolvers