import React,{useState} from 'react';

export function Login({Loginreturn}){
    const [usu, setUsu] = useState("");
    const [usup, setUsup] = useState("");
    var result="";

    const submitResult = e => {
        result = SignIn(usu, usup);
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
            <input type="text" id="iduser" autocomplete="off"  onChange={ (e)=>setUsu(e.target.value)}/><br/>
            <label className="password">Password:</label><br/>
            <input type="password" id="idpassword"  onChange={ (e)=>setUsup(e.target.value)}/><br/>
            <input type="submit" value="Login" />
        </form>
    );
}

export function SignIn(usu, usup){
    var result="";
    if(usu.length===0 || usup.length===0){
        result = "Complete the rest of the fields";
        return result;
    }else{
        if(usu==="admin" && usup==="1234"){
            result = "You are inside";
            return result;

        }else if(usu==="admin113" && usup==="123456"){
            result = "You are inside";
            return result;
        }
        else if(usu==="usuario" && usup==="contrasenia"){
            result = "You are inside";
            return result;
        }else{
            result = "The data are wrong";
            return result;
        }
    }
}
