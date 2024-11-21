import "./navbar.css";
import { useState } from "react";
import Logout from "./logout"; // Importación correcta
import Login from "./login";  // Importación correcta

export default function Navbars() {
    const [signin, setSignin] = useState(false);

    return (
        <div>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.css"
                integrity="sha512-6p+GTq7fjTHD/sdFPWHaFoALKeWOU9f9MPBoPnvJEWBkGS4PKVVbCpMps6IXnTiXghFbxlgDE8QRHc3MU91lJg=="
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
            />
            
            <div className="title-buy">
                <h3 className="title-name">E-commerce</h3>
                {signin ? <Logout /> : <Login />}
                <button className="log-button" onClick={() => setSignin(!signin)}>
                    {signin ? "log out" : "log in"}
                </button>
                <button className="button-create">
                    <i className="ri-file-add-fill"></i>
                </button>
                
            </div>
        </div>
    );
}
