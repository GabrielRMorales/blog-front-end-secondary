import React, {useState} from "react";

const Layout = (props)=>{
    const [shownForm, setForm] = useState("");

    //style={shownForm === "login-form" ? {display: "block"}: {display: "none"}}
       //have multiple forms and change display if they are true}
       /* shownForm === "login-form" ? <form id="login-form" data-testid="login-form" >
            <div id="close-login-form" className="close-form">X</div>
            <div id="login-errors" className="form-errors errors"></div>
            <label htmlFor="username-login">Email:</label>
            <input type="email" id="username-login" name="username" />
            <label htmlFor="password-login">Password:</label>
            <input type="password" id="password-login" name="password"  />
            <input type="submit" />
        </form> : null */
    return <div>
    {props.user ? <button role="logout-button" onClick={async ()=>{
        try {
            let data = await fetch("http://localhost:3000/logout");
            data = await data.json();
            if (localStorage.getItem("token")){
                localStorage.removeItem("token");
            }
            props.onSubmit({
                authenticationCode: 0,
                currentUserId: null
            })
        } catch (err){
            console.log(err);
        }
    }}>Logout</button> :
    <button role="registerOrLoginBtn" onClick={()=>{
        setForm("register-or-login-form");
    }}>Login/Register</button>}
    
   <form id="register-or-login-form" data-testid="register-or-login-form" onSubmit={(e)=>{
                e.preventDefault();
                //depending registered's value, setForm as login or register
                setForm("login-form");
            }} style={shownForm === "register-or-login-form" ? {display: "block"}: {display: "none"}} >
            <div id="close-register-login" className="close-form">X</div>
            <div id="register-login-errors" className="form-errors errors"></div>
            <label htmlFor="username-register">Register or Login</label>
            <input type="email" id="username-register-or-login" name="username" />
            <input type="submit" data-testid="register-or-login-submit" />
    </form>
    <form id="login-form" data-testid="login-form" onSubmit={async (e)=>{
        e.preventDefault();
        setForm("");
       let fetchedData;
       
       try {
        fetchedData = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: document.getElementById("username-login").value,
            password: document.getElementById("password-login").value
             })
        });
        fetchedData = await fetchedData.json();
        
        props.onSubmit({
            authenticationCode: fetchedData.authenticationCode,
            currentUserId: fetchedData.user._id
        });

        
    } catch(e){
        console.log(e)
    }
      
    }} style={shownForm === "login-form" ? {display: "block"}: {display: "none"}}>
            <div id="close-login-form" className="close-form">X</div>
            <div id="login-errors" className="form-errors errors"></div>
            <label htmlFor="username-login">Email:</label>
            <input type="email" id="username-login" name="username" />
            <label htmlFor="password-login">Password:</label>
            <input type="password" id="password-login" name="password"  />
            <input type="submit" data-testid="login-submit" />
        </form>
    </div> 

}

export default Layout;