import React, {useState} from "react";

const Layout = ()=>{
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
    <button role="registerOrLoginBtn" onClick={()=>{
        setForm("register-or-login-form");
    }}>Login/Register</button>
   <form id="register-or-login-form" data-testid="register-or-login-form" onSubmit={(e)=>{
                e.preventDefault();
                setForm("login-form");
            }} style={shownForm === "register-or-login-form" ? {display: "block"}: {display: "none"}} >
            <div id="close-register-login" className="close-form">X</div>
            <div id="register-login-errors" className="form-errors errors"></div>
            <label htmlFor="username-register">Register or Login</label>
            <input type="email" id="username-register-or-login" name="username" />
            <input type="submit" data-testid="register-or-login-submit" />
    </form>
    <form id="login-form" data-testid="login-form" onSubmit={(e)=>{

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