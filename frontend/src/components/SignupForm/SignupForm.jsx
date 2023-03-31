import React, {useState} from "react";
import {useForm } from 'react-hook-form';


function SignupForm() {

const { register, handleSubmit } = useForm();
const [data, setData] = useState("");
  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>

      <label htmlFor="email">E-mail</label> <br />
      
      <input {...register("email")} placeholder="E-mail" /> <br />

      <label htmlFor="profile">Profile</label> <br />
      <select {...register("category", { required: true })}>
        <option value="">Select...</option>
        <option value="A">Athlete</option>
        <option value="B">Sponsor</option>
      </select>
      <br />

      <label htmlFor="username">Username</label> <br />
      <input {...register("username")} placeholder="Username" />
      <br />

      <label htmlFor="password">Password</label> <br />
      <input {...register("password")}  type="password"placeholder="Password" />
      <br />

      <p>{data}</p>
      <button type="submit">Submit</button>
    </form>
  );
 
}

export default SignupForm;


