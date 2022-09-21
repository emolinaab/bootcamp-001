export default function signIn (user, password) {
  console.log('User: ' + user);
  console.log('Password: ' + password);
  if (user !== undefined && password !== undefined &&
    user !== null && password !== null && 
    user === 'admin' && password === '1234') {
    console.log('Entro');
    return true;
  } else {
    console.log('Error to Sign in');
    return false;
  }
}