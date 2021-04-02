import React, {useState} from "react";

const Layout = ()=>{
    const [shownForm, setForm] = useState("");

       //have multiple forms and change display if they are true}
    return <div>
    <button role="registerOrLoginBtn" onClick={()=>{
        setForm("register-login-form");
    }}>Login/Register</button>
    <form id="register-login-form" data-testid="register-login-form" style={shownForm === "register-or-login-form" ? {display: "block"}: {display: "none"} } >
    <label htmlFor="test"></label>
    <input type="text" id="test"/>
    </form>

    </div>


}

export default Layout;