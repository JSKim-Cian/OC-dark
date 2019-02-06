const user = [
  {
    id: 1,
    name: 'James',
    email: 'James@gmail.com',
    pw: '$2a$12$Al61rlwAkaV2j8V5MGtHoOrcfJHE12bh7AXzXoTS5RXT7OWdL7XAi'
  },
  {
    id: 2,
    name: 'Chris',
    email: 'Chris@gmail.com',
    pw: '$2a$12$Al61rlwAkaV2j8V5MGtHoOrcfJHE12bh7AXzXoTS5RXT7OWdL7XAi'
  },
  {
    id: 3,
    name: 'Kely',
    email: 'kely@gmail.com',
    pw: "$2b$12$lruN0cnnJjhETgLv3IbT6uNsnRi.BB3KYthcIXBbv5O.DZNZdQSAW"
  },
  {
    id: 4,
    name: 'Mac',
    email: 'Mac@gmail.com',
    pw: '$2a$12$Al61rlwAkaV2j8V5MGtHoOrcfJHE12bh7AXzXoTS5RXT7OWdL7XAi'
  }
]

const own_comu = [
  {
    id: 1,
    title: '놀러오세요, 겨울의 숲 2기',
    mainGenre: '일상',
    smallGenre: '힐링, 개그',
    type: 2
  },
  {
    id: 2,
    title: '라온하제 3기',
    mainGenre: '일상',
    smallGenre: '힐링/학원',
    type: 3
  },
  {
    id: 3,
    title: '우리들은 인간이 싫어',
    mainGenre: '일상',
    smallGenre: '시리어스',
    type: 3
  },
  {
    id: 4,
    title: '기억의 잔재',
    mainGenre: '판타지',
    smallGenre: '시리 천악',
    type: 3
  }
]

import { token, encryptor } from '../utils'

export const getAllUser = () => user;

export const getComu = () => own_comu;

// online hash.js emulator
// http://www.xorbin.com/tools/sha256-hash-calculator

// online bcrypt emulator (use 12 rounds)
// https://www.dailycred.com/article/bcrypt-calculator

export const addUser = async (name, email, pw) => {
  const newUser = {
    id: `${user.length + 1}`,
    name,
    email,
    pw: await encryptor.encrypt({ digest: pw })
  }
  user.push(newUser)
  return newUser
}

export const loginUser = async (email, pw) => {
  const result = user.filter(account => account.email === email)
  if (result.length !== 0) {
    const user = result[0]
    if (user) {
      const password = await encryptor.verify({ digest: pw }, user.pw)
      if (password) {
        const accessToken = token.generateAccessJwt(user.name) // user.name은 not null이어야함.
        const refreshToken = token.generateRefreshJwt(user.name)

        return [{ user, token: { accessToken, refreshToken } }]
      }
    }
  }
  return null
}
