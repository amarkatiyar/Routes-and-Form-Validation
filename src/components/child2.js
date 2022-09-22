import React, { useState } from 'react'
import Child3 from './child3';
// import { Button } from 'antd';
import ButtonContext from './Context/ButtonContext';
function Child2() {

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [email, setEmail] = useState()
  const [errors, setErrors] = useState()
  const [errors2, setErrors2] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      email: email,
      password: password
    }


    console.log("hello", data)
    // const ThemeContext = React.createContext(data);
  }

  const handleEmail = (e) => {
    const emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailpattern.test(e.target.value)) {
      setErrors2("Invalid email address.")
    }
    else {
      setTimeout(() => {
        setErrors2();
      }, 500);
    }
    setEmail(e.target.value)
  }

  const handleChange = (e) => {
    const passwordRegex = /(?=.*[0-9])/;
    if (e.target.value.length < 8) {
      setErrors("Password must be 8 characters long.")
    } else if (!passwordRegex.test(e.target.value)) {
      setErrors("Invalid password. Must contain one number.")
    }
    else {
      setTimeout(() => {
        setErrors();
      }, 500);
    }
    setPassword(e.target.value)
  }

  return (
    <div>
      <Child3 />
      <form onSubmit={handleSubmit}>

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Enter your email"
          required
          onChange={(e) => handleEmail(e)}
          value={email}
        />
        {(
          <div className="input-feedback">{errors2}</div>
        )}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          required
          value={password}
          onChange={(e) => handleChange(e)}
        />
        {(
          <div className="input-feedback">{errors}</div>
        )}
        <button type="submit" disabled={isSubmitting}>
          Login
        </button>

      </form>

    </div>
  )
}

export default Child2