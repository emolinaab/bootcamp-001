import { render, screen,fireEvent } from '@testing-library/react';
import {Form,SignIn} from './component/Form';



beforeEach(() =>{
  render(<Form/>);
})

test('info', () => {
 
   const title = screen.getByText(/User/i);
   expect(title).toBeInTheDocument()
});
test('input', () => {
  const labelIn = screen.getByRole('button', { name: /Login/i })
  expect(labelIn).toBeInTheDocument()
});
let user="",password=""
test('user is empty',()=>{
  user = ''
  password = ''
  const  result =SignIn(user,password)
  expect(result).toBe("all fields are required")
});

test('user data is missing',()=>{
  user = 'admin'
  password = ''
  const  result =SignIn(user,password)
  expect(result).toBe("all fields are required")
});

test('user data is missing 2',()=>{
  user = ''
  password = '1234567'
  const  result =SignIn(user,password)
  expect(result).toBe("all fields are required")
});

test('the user is incorrect',()=>{
  user = 'sdbsdsdf'
  password = 'hshdbdb'
  const  result =SignIn(user,password)
  expect(result).toBe("the user is incorrect")
});

test('the user is correct',()=>{
  user = 'admin'
  password = '1234567'
  const  result =SignIn(user,password)
  expect(result).toBe("the user is correct")
});

