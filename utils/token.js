/**
 * 토큰과 관련된 작업을 처리하는 곳
 */

import jwt from 'jsonwebtoken'
const JWT_SECRET = 'vWsBwvuJ4phW89bh'

const generateAccessJwt = (name) => {
  const accessToken = jwt.sign({ username: name }, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: 86400 * 1,
    issuer: 'ownCharater',
    subject: name
  })

  jwt.verify(accessToken, JWT_SECRET, (err, data) => {
    console.log('accessToken verification:', err, data)
  })

  return accessToken
}

const generateRefreshJwt = (name) => {
  const refreshToken = jwt.sign({ username: name }, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: 86400 * 3,
    issuer: 'ownCharater',
    subject: name
  })

  jwt.verify(refreshToken, JWT_SECRET, (err, data) => {
    console.log('refreshToken verification:', err, data)
  })

  return refreshToken
}

const reissuanceToken = (refreshToken) => {
  const logState = jwt.verify(refreshToken, JWT_SECRET, (err, data) => {
    if (!err) {
      return data
    } else {
      return false
    }
  })

  if (logState) {
		return { username: logState.username, accessToken: generateAccessJwt(logState.username), refreshToken }
  }
}

export default {
  generateAccessJwt,
  generateRefreshJwt,
  reissuanceToken
}
