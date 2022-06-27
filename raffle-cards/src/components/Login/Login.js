import React from "react"
import "./Login.css"
import wave from '../images/wave.png'
import Logo from '../images/logo.png'
import bg from '../images/bg.svg'


export default function Login() {
    return (
        <div>
            <body>
                <img class="wave" src={wave}></img>
                    <div class="container">
                        <div class="img">
                            <img src={bg}></img>
                        </div>
                        <div class="login-content">
                            <form action="index.html">
                                <img src={Logo}></img>
                                    <h2 class="title">Welcome</h2>
                                    <div class="input-div one">
                                        <div class="i">
                                            <i class="fas fa-user"></i>
                                        </div>
                                        <div class="div">
                                            {/* <h5>Username</h5> */}
                                            <input placeholder="Username" type="text" class="input"></input>
                                        </div>
                                    </div>
                                    <div class="input-div pass">
                                        <div class="i">
                                            <i class="fas fa-lock"></i>
                                        </div>
                                        <div class="div">
                                            {/* <h5>Password</h5> */}
                                            <input placeholder="Password" type="password" class="input"></input>
                                        </div>
                                    </div>
                                    <input type="submit" class="btn" value="Login"></input>
                                    </form>
                                </div>
                        </div>
                    </body>
                </div>
                )
}
