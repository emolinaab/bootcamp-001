import React, {useState} from 'react';
export function LoginForm({Login}){
    const [details, setDetails] = useState({username: "", password: ""});
    const submitHandler = e =>{
        e.preventDefault();
        Login(details);
    }
    return(
        <form onSubmit={submitHandler}>
            <div id='form-container'>
                    <h1>Sing In</h1>
                    <div>
                    <label htmlFor="username">Username: </label>
                    </div>
                    <input className='control' placeholder= "example@gmail.com" type="text" username="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
                    <div>
                    <label htmlFor="password">Password: </label>
                    </div>
                    <input className='control' placeholder='********' type="password" password="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                    <input className='boton' type="submit" value="SIGN IN"/>
                </div>
               
        </form>
    );
}