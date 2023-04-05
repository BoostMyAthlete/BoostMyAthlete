import React, {useState} from "react";
import {useForm } from 'react-hook-form';
import '../../App.css'



function ContactForm() {

const { register, handleSubmit } = useForm();
const [data, setData] = useState("");
  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>


      <label htmlFor="name">Username</label> <br />
      <input className="input" {...register("name")} placeholder="Name" />
      <br />

      <label htmlFor="email">E-mail</label> <br />
      <input className="input"{...register("email")} placeholder="E-mail" /> <br />


      <label htmlFor="phone">Phone</label> <br />
      <input className="input" {...register("phone")}  type="phone"placeholder="Phone" />
      <br />

      <label htmlFor="budget">Budget</label> <br />
      <input className="input"{...register("budget")}  type="number" step="0.01" placeholder="0.00€" />
      <br />
      
      <label htmlFor="goals">Goals</label> <br />
      <textarea className="input" rows="5" cols="30" {...register("Goals")} placeholder="Goals" />

    
     
      
      <p>{data}</p>
      <button className="btn-form" type="submit">Send Enquiry</button>

     
    </form>
  );
 
}

export default ContactForm;
