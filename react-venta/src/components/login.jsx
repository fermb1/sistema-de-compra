import "./components-style.css";

export default function Login(){
    return(
            <aside className="login-section">
                <input type="email" name="" id="login-email-input" value="email" className="login-input"/>
                <p></p>
                <input type="text" name="" id="login-password-input" value="password" className="login-input"/>
                <button className="login-button">login</button>
                <button className="login-sing-up-button">Don't have an account? <a href="">Sing up</a></button>
            </aside>

    )
}