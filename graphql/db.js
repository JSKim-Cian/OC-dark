const user = [
  {
    id: 1,
    name: 'James',
    email: 'James@gmail.com',
    pw: 'test'
  },
  {
    id: 2,
    name: 'Chris',
    email: 'Chris@gmail.com',
    pw: 'test'
  },
  {
    id: 3,
    name: 'Kely',
    email: 'kely@gmail.com',
    pw: 'test'
  },
  {
    id: 4,
    name: 'Mac',
    email: 'Mac@gmail.com',
    pw: 'test'
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

export const getAllUser = () => user;

export const getComu = () => own_comu;

export const addUser = (name, email, pw) => {
  const newUser = {
    id: `${user.length + 1}`,
    name,
    email,
    pw
  }
  user.push(newUser)
  return newUser
}

export const loginUser = (email, pw) => {
  const result = user.filter(account => account.email === email && account.pw === pw)
  if (result) {
    return result[0]
  } else {
    return false
  }
}
