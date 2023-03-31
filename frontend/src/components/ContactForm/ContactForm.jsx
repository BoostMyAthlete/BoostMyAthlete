import React, {useState} from "react";
import {useForm } from 'react-hook-form';


function ContactForm() {

const { register, handleSubmit } = useForm();
const [data, setData] = useState("");
  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>


      <label htmlFor="name">Username</label> <br />
      <input {...register("name")} placeholder="Name" />
      <br />

      <label htmlFor="email">E-mail</label> <br />
      <input {...register("email")} placeholder="E-mail" /> <br />


      <label htmlFor="phone">Phone</label> <br />
      <input {...register("phone")}  type="phone"placeholder="Phone" />
      <br />

      <label htmlFor="budget">Budget</label> <br />
      <input {...register("password")}  type="number"placeholder="Budget" />
      <br />
      
      <label htmlFor="goals">Goals</label> <br />
      <textarea {...register("Goals")} placeholder="Goals" />
      
      <p>{data}</p>
      <button type="submit">Send Enquiry</button>

     
    </form>
  );
 
}

export default ContactForm;
