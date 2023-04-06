// import React, {useState} from "react";
// import {useForm} from "react-hook-form"

// function SignupForm() {

// const { register, handleSubmit } = useForm();
// const [data, setData] = useState("");
//   return (
//     <form>

//        <label htmlFor="email">E-mail</label> <br />
//         <input className="input" placeholder="Insert email: example@example.com" type="email" id="email" /> <br />
//         <label htmlFor="username">Username</label> <br />
//         <input className="input" placeholder="Insert your username" type="text" id="username" /> <br />

//          <label htmlFor="password">Password</label> <br />
//         <input className="input" placeholder="Insert your password" type="password" id="password" /> <br />
//         <label htmlFor="selector">Profile</label>
//         <br/>
//         <select className="input" id="selector">
//           <option value="Sponsor">Sponsor</option>
//           <option value="Athlete">Athlete</option>
//         </select>
//         <br/>
//         <br />

//         <button className="btn-form" type="submit">Submit</button>
//       </form>

//   )

// }

// export default SignupForm;

import "./signupform.css";
import React, { Component } from "react";

class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "signUp",
    };
  }

  changeView = (view) => {
    this.setState({
      currentView: view,
    });
  };

  currentView = () => {
    switch (this.state.currentView) {
      case "signUp":
        return (
          <form>
            <h2>Sign Up!</h2>
            <fieldset>
              <legend>Create Account</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required />
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
                <li>
                  <label htmlFor="profile">Profile:</label>
                  <select id="profile" required>
                    <option value="">-- Select One --</option>
                    <option value="sponsor">Sponsor</option>
                    <option value="athlete">Athlete</option>
                  </select>
                </li>
              </ul>
            </fieldset>
            <button>Submit</button>
            <button type="button" onClick={() => this.changeView("logIn")}>
              Have an Account?
            </button>
          </form>
        );
      case "logIn":
        return (
          <form>
            <h2>Welcome Back!</h2>
            <fieldset>
              <legend>Log In</legend>
              <ul>
                <li>
                  <label htmlFor="username">Username:</label>
                  <input type="text" id="username" required />
                </li>
                <li>
                  <label htmlFor="password">Password:</label>
                  <input type="password" id="password" required />
                </li>
                <li>
                  <i></i>
                  <a onClick={() => this.changeView("PWReset")} href="#">
                    Forgot Password?
                  </a>
                </li>
              </ul>
            </fieldset>
            <button>Login</button>
            <button type="button" onClick={() => this.changeView("signUp")}>
              Create an Account
            </button>
          </form>
        );
      case "PWReset":
        return (
          <form className="form">
            <h2>Reset Password</h2>
            <fieldset className="fieldset">
              <legend>Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
              </ul>
            </fieldset>
            <button>Send Reset Link</button>
            <button type="button" onClick={() => this.changeView("logIn")}>
              Go Back
            </button>
          </form>
        );
      default:
        return null;
    }
  };

  render() {
    return <section id="entry-page">{this.currentView()}</section>;
  }
}

export default SignUpForm;
