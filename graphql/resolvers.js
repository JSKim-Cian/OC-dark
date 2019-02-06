import { getAllUser, addUser, loginUser, getComu } from './db'
import { token } from '../utils'

const resolvers = {
  Query: {
    getComu: () => getComu(),
    getAllUser: () => getAllUser()
  },
  Mutation: {
    addUser: (_, { name, email, pw }) => addUser(name, email, pw),
    loginUser: (_, { email, pw }) => loginUser(email, pw),
    reissuanceToken: (_, { refreshToken }) => token.reissuanceToken(refreshToken)
  }
}

export default resolvers
