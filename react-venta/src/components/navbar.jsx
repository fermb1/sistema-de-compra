import "./navbar.css"
import { useState } from "react";

export default function Navbars(){
    return(
        <div>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.5.0/remixicon.css" integrity="sha512-6p+GTq7fjTHD/sdFPWHaFoALKeWOU9f9MPBoPnvJEWBkGS4PKVVbCpMps6IXnTiXghFbxlgDE8QRHc3MU91lJg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
            <div className="title-buy">
                <h1 className="title-name">sistema de compra</h1>
                <button className="button-create">create<i class="ri-file-add-fill"></i></button>
                
            </div>
        </div>
    )


}