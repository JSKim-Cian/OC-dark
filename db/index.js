import { token, encryptor } from '../utils'
import { users, own_comu, characters } from './db'
export { default as upload } from './upload'
import { createReadStream } from 'fs'

export const getComu = () => own_comu;

// online hash.js emulator
// http://www.xorbin.com/tools/sha256-hash-calculator

// online bcrypt emulator (use 12 rounds)
// https://www.dailycred.com/article/bcrypt-calculator

export const addUser = async (username, email, pw) => {
  const newUser = {
    id: `${users.length + 1}`,
    username,
    email,
    pw: await encryptor.encrypt({ digest: pw })
  }
  users.push(newUser)
  return newUser
}

export const loginUser = async (email, pw) => {
  const result = users.filter(user => user.email === email)
  if (result.length !== 0) {
    const user = result[0]
    if (user) {
      const password = await encryptor.verify({ digest: pw }, user.pw)
      if (password) {
        const accessToken = token.generateAccessJwt(user)
        const refreshToken = token.generateRefreshJwt(user)

        return [{ user, token: { accessToken, refreshToken } }]
      }
    }
  }
  return null
}

export const getMyInfo = (userId) => {
  const URL = require('url');

  // const fd = new FormData()
  const user = users.filter(user => user.id === userId)
  const character = characters.filter(character => {
    let imgFile = []
    if (character.userid === userId) {
      for (let img of character.characterLink) {
        imgFile.push(createReadStream(img))
      }
      console.log(imgFile, 'imgFileimgFile')
      character.characterLink = imgFile
      return character
    }
  })

  if (user.length !== 0 && character.length !== 0) {
    const userInfo = user[0]
    const characterInfo = character

    return { user: userInfo, characters: characterInfo }
  }
  return null
}
