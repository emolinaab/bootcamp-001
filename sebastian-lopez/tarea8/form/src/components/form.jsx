import { useState } from "react"

function Login(){
    const [loginData,setLoginData] = useState({email:"",password:""})

    function handleSubmit(){
        let message = handleLogIn(loginData)
        alert(message)
    }
    return(
        <form>
            <div>
                <label>Email</label>
                <input 
                    className="field"
                    type="text" 
                    onChange={e=>setLoginData({email:e.target.value,password:document.querySelector("input[type='password']").value})}
                />
            </div>
            <div>
                <label>Password</label>
                <input 
                className="field"
                type="password"
                onChange={e=>setLoginData({email:document.querySelector("input[type='text']").value,password:e.target.value})}
                />
            </div>
            <input 
                type="submit"
                onClick={e=>{
                    e.preventDefault()
                    handleSubmit()
                }}
            />
        </form>
    )
}

export function handleLogIn(loginData){
    
    let message = loginData.email == "" || loginData.password == "" ? 
        "All data is required!" : 
        !loginData.email.includes("@") || loginData.email.length < 5 ? 
            "Not a valid email!":
            loginData.password.length < 8 ?
            "Password must be at least 8 characters!":
            "Logged in!"

    if(message == "Logged in!")document.querySelectorAll(".field").forEach(i => i.value = "")
    return message
}
export default Login