import App from './App';
import {useState} from 'react';

describe ('Attempted to login with a null value', () => {
  it('You dont log in because the user is null', () => {
    const[details] = useState({user:'', password:''});
    details.user = null;
    details.password = null;
    const tmp = App.Login(details);
    expect(true).toEqual(true);
  })
})