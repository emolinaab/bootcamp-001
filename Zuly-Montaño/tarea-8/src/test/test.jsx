import {verifyLogin} from '../App';


const validUser = {
  user: 'zuly12@gmail.com',
  password: '1234567'
}

test('The username and password are undefined', () => {
  const details = {
  }
  const result = verifyLogin(details, validUser);
  expect(result).toBe('you must complete all the fields');
})

test('The username is undefined', () => {
  const details = {
    password: '12345'
  }
  const result = verifyLogin(details, validUser);
  expect(result).toBe('You need to complete all the fields');
})

test('The password is undefined', () => {
  const details = {
    username: 'zuly12@gmail.com'
  }
  const result = verifyLogin(details, validUser);
  expect(result).toBe('You need to complete all the fields');
})

test('The username and password are empty', () => {
  const details = {
    username: '',
    password: ''
  }
  const result = verifyLogin(details, validUser);
  expect(result).toBe('You need to complete all the fields');
})

test('The username is empty', () => {
  const details = {
    username: '',
    password: '1234567'
  }
  const result = verifyLogin(details, validUser);
  expect(result).toBe('You need to complete all the fields');
})

test('The password is empty', () => {
  const details = {
    username: 'zuly12@gmail.com',
    password: ''
  }
  const result = verifyLogin(details, validUser);
  expect(result).toBe('You need to complete all the fields');
})

test('The username and password are incorrect', () => {
  const details = {
    username: 'zully23@gmail.com',
    password: '12345'
  }
  const result = verifyLogin(details, validUser);
  expect(result).toBe('User name or password incorrect');
})

test('The username is incorrect', () => {
  const details = {
    username: 'zully23@gmail.com',
    password: '1234567'
  }
  const result = verifyLogin(details, validUser);
  expect(result).toBe('Incorrect username');
})

test('The password is incorrect', () => {
  const details = {
    username: 'zuly12@gmail.com',
    password: '12345'
  }
  const result = verifyLogin(details, validUser);
  expect(result).toBe('Password is incorrect ');
})

test('Username and password are ok', () => {
  const details = {
    username: 'zuly12@gmail.com',
    password: '1234567'
  }
  const result = verifyLogin(details, validUser);
  expect(result).toBe('Logged');
})