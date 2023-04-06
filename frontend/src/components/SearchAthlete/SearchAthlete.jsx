import React, { useState } from "react";
import "./searchathlete.css";

const SearchAthlete = ({ handleCountry, handleAge }) => {
  return (
    <form className="form">
      <h3 className="title">Search your Athlete</h3>
      <fieldset>
        <ul>
          <li>
            <label htmlFor="sports">Sports</label>
            <select class="input" id="sports" required>
              <option value="">-- Select One --</option>
              <option value="triathlon">Triathlon</option>
            </select>
          </li>
          <li>
            <label htmlFor="country">Country</label>
            <select
              class="input"
              id="country"
              onChange={handleCountry}
              required
            >
              <option value="">-- Select One --</option>
              <option value="Portugal">Portugal</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Belgium">Belgium</option>
              <option value="Brazil">Brazil</option>
              <option value="Canada">Canada</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="France">France</option>
              <option value="Great Britain">Great Britain</option>
              <option value="Hungary">Hungary</option>
              <option value="Israel">Israel</option>
              <option value="Japan">Japan</option>
              <option value="Lithuania">Lithuania</option>
              <option value="Netherlands">Netherlands</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Poland">Poland</option>
              <option value="Spain">Spain</option>
              <option value="Slovenia">Slovenia</option>
              <option value="United States">United States</option>
            </select>
          </li>
          <li>
            <label htmlFor="age">Age</label>
            <select class="input" id="age" onChange={handleAge} required>
              <option value="0">-- Select One --</option>
              <option value="18"> &lt;18</option>
              <option value="18,22">18-22</option>
              <option value="23,27">23-27</option>
              <option value="28,32">28-32</option>
              <option value="32">&gt; 32</option>
            </select>
          </li>
        </ul>
      </fieldset>
      <br />
    </form>
  );
};

export default SearchAthlete;
