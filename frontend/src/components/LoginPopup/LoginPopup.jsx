import React, { useState } from "react";
import  './LoginPopup.css'
import { assets } from "../../assets/assets";

const LoginPopup = ({setShowLogin}) => {

    const [currState, setCurrState] = useState("Sign Up")

  return(
    <div className="login-popup">
        <form className="login-popup-container">
            <div className="login-popup-title">
                <h2>{currState}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
            <div className="login-popup-inputs">
                {currState==="Login"?<></>:<input type="text" placeholder="Masukan Nama Kamu" required />}
                <input type="email" placeholder="Masukan Email Kamu" required/>
                <input type="password" placeholder="Masukan Password Kamu" required/>
            </div>
            <button>{currState==="Sign Up"?"Create account":"Login"}</button>
            <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>Dengan melanjutkan, saya menyetujui Ketentuan Penggunaan dan Kebijakan Privasi.</p>
            </div>
            {currState==="Login"
            ?<p>Buat akun baru? <span onClick={()=>setCurrState("Sign Up")}>Klik Disini</span></p>
            :<p>Sudah memiliki akun? <span onClick={()=>setCurrState("Login")}>Login Disini</span></p>
            }
        </form>
    </div>
  )
};

export default LoginPopup;
