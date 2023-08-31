import React from 'react'
import { Link } from 'react-router-dom'
import "./style.css"

function Login() {
  return (
    <div>
        <div class="container">
    <h2 class="login-title">Log in</h2>

    <form class="login-form">
      <div>
        <label for="name">Name </label>
        <input
               id="name"
               type="text"
               placeholder="Eren Buruk"
               name="name"
               required
               />
      </div>

      <div>
        <label for="email">Email </label>
        <input
               id="email"
               type="email"
               placeholder="me@example.com"
               name="email"
               required
               />
      </div>

      <div>
        <label for="password">Password </label>
        <input
               id="password"
               type="password"
               placeholder="password"
               name="password"
               required
               />
      </div>

      <Link to={'/show-all'}><button class="btn btn--form" type="submit" value="Log in">
        Log in
      </button></Link>
    </form>
</div>
    </div>
  )
}

export default Login