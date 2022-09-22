import {verify} from './App';
import '@testing-library/jest-dom/extend-expect';

const details = {
  user: '',
  password: ''
}

describe ('Calling the verify method without parameters', () => {
  it('The logic is not executed and returns false', () => {
    expect(verify()).toEqual(false);
  })
})

describe ('Attempted to login with empty values', () => {
  it('You dont log in because the user is empty', () => {
    details.password = '1234';
    expect(verify(details)).toEqual(false);
  })

  it('You dont log in because the password is empty', () => {
    details.user = 'admin';
    details.password = '';
    expect(verify(details)).toEqual(false);
  })
})

describe ('Attempted to login with a null value', () => {
  it('You dont log in because the user is null', () => {
    details.user = null;
    details.password = '1234';
    expect(verify(details)).toEqual(false);
  })

  it('You dont log in because the password is null', () => {
    details.user = 'admin';
    details.password = null;
    expect(verify(details)).toEqual(false);
  })
})

describe ('Attempted to login with a undefined value', () => {
  it('You dont log in because the user is undefined', () => {
    details.user = undefined;
    details.password = '1234';
    expect(verify(details)).toEqual(false);
  })

  it('You dont log in because the password is undefined', () => {
    details.user = 'admin';
    details.password = undefined;
    expect(verify(details)).toEqual(false);
  })
})

describe ('Attempted to login with a valid values', () => {
  it('Signed in with the correct username and password', () => {
    details.user = 'admin';
    details.password = '1234';
    expect(verify(details)).toEqual(true);
  })

  it('Not logged in with correct username and wrong password', () => {
    details.user = 'admin';
    details.password = '4321';
    expect(verify(details)).toEqual(false);
  })

  it('Not logged in with wrong username and correct password', () => {
    details.user = 'user';
    details.password = '1234';
    expect(verify(details)).toEqual(false);
  })
})