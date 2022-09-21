import signIn from "./components/Signin";

describe ('Attempted to login with a null value', () => {
  it('You dont log in because the user is null', () => {
    const tmp = signIn(null, '1234');
    expect(tmp).toEqual(false);
  })

  it('You dont log in because the password is null', () => {
    const tmp = signIn('admin', null);
    expect(tmp).toEqual(false);
  })
})

describe ('Attempted to login with a undefined value', () => {
  it('You dont log in because the user is undefined', () => {
    const tmp = signIn(undefined, '1234');
    expect(tmp).toEqual(false);
  })

  it('You dont log in because the password is undefined', () => {
    const tmp = signIn('admin', undefined);
    expect(tmp).toEqual(false);
  })
})

describe ('Attempted to login with a valid values', () => {
  it('Works', () => {
    const tmp = signIn('admin', '1234');
    expect(tmp).toEqual(true);
  })
})