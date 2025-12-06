import React, {useState} from "react"

export default function LoginPage(){

    const [alert, setAlert] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    const handleEmail = (e) =>{
        setEmail(e.target.value);
    }
    const handleForm = (e) =>{
        e.preventDefault();

        if(email == "waleed@mail.com" && password == '1234' ){
            setAlert("Login Successful!!!")
        }
        else{
            setAlert("Login Failed")
        }

    }

    return(
        <div>
            <h1>Logggg Innnn</h1>

            <form onSubmit={handleForm}>

            <div>
                <label>Email: </label>
                <input type="email" placeholder="Email" value={email} onChange={handleEmail} />
            </div>

            <div>
                <label>Password: </label>
                <input type="password" placeholder="Password" value={password} onChange={handlePassword} />
            </div>

            <button type="submit">
                Login
            </button>
            </form>

            <p>{alert}</p>

        </div>
    )
}