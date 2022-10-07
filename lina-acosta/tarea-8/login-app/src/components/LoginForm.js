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
                <div className='form-group'>
                    <div>
                    <label htmlFor="username">Username: </label>
                    </div>
                    <input type="text" username="username" id="username" onChange={e => setDetails({...details, username: e.target.value})} value={details.username}/>
                </div>
                <div className='form-group'>
                    <div>
                    <label htmlFor="password">Password: </label>
                    </div>
                    <input type="password" password="password" id="password" onChange={e => setDetails({...details, password: e.target.value})} value={details.password}/>
                </div>
                <input type="submit" value="SIGN IN"/>
            </div>
        </form>
    );
}
