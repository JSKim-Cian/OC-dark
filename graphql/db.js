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

export const getAllUser = () => user;

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