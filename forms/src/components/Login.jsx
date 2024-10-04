import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className='page'>
            <h3>LOGIN</h3>
            <form>
                <div className="input">
                <label htmlFor="UserName">UserName  </label><br />
                <input type="email" id="UserName" />
                </div>
                <div className="input">
                <label htmlFor="Password">Password  </label><br />
                <input type="Password" id="Password" />
                </div><br />
                <div className="btn">
                <button>Login</button>
                </div>
            </form>
    </div>
  )
}
