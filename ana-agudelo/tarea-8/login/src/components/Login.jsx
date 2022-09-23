import React,{useState} from 'react';

export function Login({Loginreturn}){
    const [userData, setUser] = useState("");
    const [PassData, setPass] = useState("");
    var result="";

    const submitResult = e => {
        result = SignIn(userData, PassData);
        Loginreturn(result);
        Clear();
    }
    const Clear = () => {
        document.getElementById("iduser").value="";
        document.getElementById("idpassword").value="";
    }
    return (
        <form className="login" onSubmit={submitResult}>
            <h1>LOGIN</h1>
            <label className="username">User Name:</label><br/>
            <input type="text" id="iduser" autocomplete="off"  onChange={ (e)=>setUser(e.target.value)}/><br/>
            <label className="password">Password:</label><br/>
            <input type="password" id="idpassword"  onChange={ (e)=>setPass(e.target.value)}/><br/>
            <input type="submit" value="Login" />
        </form>
    );
}

export function SignIn(userData, PassData){
    var result="";
    if(userData.length===0 || PassData.length===0){
        result = "Complete the rest of the fields";
        return result;
    }else{
        if(userData==="admin" && PassData==="1234"){
            result = "You are inside";
            return result;

        }else if(userData==="admin113" && PassData==="123456"){
            result = "You are inside";
            return result;
        }
        else if(userData==="usuario" && PassData==="contrasenia"){
            result = "You are inside";
            return result;
        }else{
            result = "The data are wrong";
            return result;
        }
    }
}
