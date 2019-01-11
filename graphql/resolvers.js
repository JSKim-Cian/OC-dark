import { getAllUser, addUser } from './db'

const resolvers = {
  Query: {
    getAllUser: () => getAllUser()
  },
  Mutation: {
    addUser: (_, { name, email, pw }) => addUser(name, email, pw)
  }
}

export default resolvers