import { addUser, loginUser, getComu, getMyInfo, upload } from '../db'
import { token } from '../utils'

const resolvers = {
  Query: {
    getComu: () => getComu(),
    getMyInfo: (_, { userId }) => getMyInfo(userId),
    uploads: () => db.get('uploads').value()
  },
  Mutation: {
    addUser: (_, { username, email, pw }) => addUser(username, email, pw),
    loginUser: (_, { email, pw }) => loginUser(email, pw),
    reissuanceToken: (_, { refreshToken }) => token.reissuanceToken(refreshToken),
    singleUpload: async (_, { img }) => await upload.processUpload(img),
    multipleUpload: (_, { files }) => Promise.all(files.map(upload.processUpload))
  }
}

export default resolvers
