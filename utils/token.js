/**
 * 토큰과 관련된 작업을 처리하는 곳
 */

import jwt from 'jsonwebtoken'
const JWT_SECRET = 'vWsBwvuJ4phW89bh'

// Access token generator
const generateAccessJwt = (user) => {
  const accessToken = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: 86400 * 1,
    issuer: 'ownCharater',
    subject: user.username
  })

  jwt.verify(accessToken, JWT_SECRET, (err, data) => {
    console.log('accessToken verification:', err, data)
  })

  return accessToken
}

// Refresh token generator
const generateRefreshJwt = (user) => {
  const refreshToken = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, {
    algorithm: 'HS256',
    expiresIn: 86400 * 3,
    issuer: 'ownCharater',
    subject: user.username
  })

  jwt.verify(refreshToken, JWT_SECRET, (err, data) => {
    console.log('refreshToken verification:', err, data)
  })

  return refreshToken
}

// Token reissue function
const reissuanceToken = async (refreshToken) => {
  const loginState = await jwt.verify(refreshToken, JWT_SECRET, (err, data) => {
    if (!err) {
      return data
    } else {
      return false
    }
  })

  if (loginState) {
		return { id: loginState.id, username: loginState.username, accessToken: await generateAccessJwt(loginState), refreshToken }
  }
}

export default {
  generateAccessJwt,
  generateRefreshJwt,
  reissuanceToken
}
