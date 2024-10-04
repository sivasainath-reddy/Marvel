import React from 'react'

export default function Signup() {
  return (
    <div className='page'>
            <h3>SIGN UP</h3>
            <form>
                <div className="input">
                <label htmlFor="UserName">UserName  </label><br />
                <input type="email" id="UserName" />
                </div>
                <div className="input">
                <label htmlFor="Password">Password  </label><br />
                <input type="Password" id="Password" />
                </div>
                <div className="input">
                <label htmlFor="Pwd">Conform Password  </label><br />
                <input type="Password" id="Pwd" />
                </div><br />
                <div className="btn">
                <button>Sign UP</button>
                </div>
            </form>
    </div>
  )
}
