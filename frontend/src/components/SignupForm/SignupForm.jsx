import React, {useState} from "react";
import {useForm} from "react-hook-form"



function SignupForm() {

const { register, handleSubmit } = useForm();
const [data, setData] = useState("");
  return (
    <form>

       <label htmlFor="email">E-mail</label> <br />
        <input className="input" placeholder="Insert email: example@example.com" type="email" id="email" /> <br />
        <label htmlFor="username">Username</label> <br />
        <input className="input" placeholder="Insert your username" type="text" id="username" /> <br />

         <label htmlFor="password">Password</label> <br />
        <input className="input" placeholder="Insert your password" type="password" id="password" /> <br />
        <label htmlFor="selector">Profile</label>
        <br/>
        <select className="input" id="selector">
          <option value="Sponsor">Sponsor</option>
          <option value="Athlete">Athlete</option>
        </select>
        <br/>
        <br />
  
        <button className="btn-form" type="submit">Submit</button>
      </form>

  )
 
}

export default SignupForm;
