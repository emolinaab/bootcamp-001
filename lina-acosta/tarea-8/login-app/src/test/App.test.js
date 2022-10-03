import {verifyLogin} from '../App';


const userAdmitted = {
  user: 'admin',
  password: '123456'
}

test('The username and password are undefined', () => {
  const details = {
  }
  const result = verifyLogin(details, userAdmitted);
  expect(result).toBe('You need to complete all the fields');
})

test('The username is undefined', () => {
  const details = {
    password: '123'
  }
  const result = verifyLogin(details, userAdmitted);
  expect(result).toBe('You need to complete all the fields');
})

test('The password is undefined', () => {
  const details = {
    username: 'admin'
  }
  const result = verifyLogin(details, userAdmitted);
  expect(result).toBe('You need to complete all the fields');
})

test('The username and password are empty', () => {
  const details = {
    username: '',
    password: ''
  }
  const result = verifyLogin(details, userAdmitted);
  expect(result).toBe('You need to complete all the fields');
})

test('The username is empty', () => {
  const details = {
    username: '',
    password: 'password'
  }
  const result = verifyLogin(details, userAdmitted);
  expect(result).toBe('You need to complete all the fields');
})

test('The username is empty', () => {
  const details = {
    username: 'user',
    password: ''
  }
  const result = verifyLogin(details, userAdmitted);
  expect(result).toBe('You need to complete all the fields');
})

test('The username and password are incorrect', () => {
  const details = {
    username: 'user',
    password: 'password'
  }
  const result = verifyLogin(details, userAdmitted);
  expect(result).toBe('User name or password invalid');
})

test('The username is incorrect', () => {
  const details = {
    username: 'user',
    password: '123456'
  }
  const result = verifyLogin(details, userAdmitted);
  expect(result).toBe('User name or password invalid');
})

test('The password is incorrect', () => {
  const details = {
    username: 'admin',
    password: 'password'
  }
  const result = verifyLogin(details, userAdmitted);
  expect(result).toBe('User name or password invalid');
})

test('Username and password are ok', () => {
  const details = {
    username: 'admin',
    password: '123456'
  }
  const result = verifyLogin(details, userAdmitted);
  expect(result).toBe('Logged in');
})