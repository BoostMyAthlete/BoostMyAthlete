import React, { useState } from 'react'

const SearchAthlete = ({handleCountry, handleAge}) => {
  return (  <div>
             <h3>Sports</h3>   
            <select class="input" id="sports">
            <option value="triathlon">Triathlon</option>
            </select>
            <h3>Country</h3>
            <select id="country" class="input" onChange={handleCountry}>
            <option value="">-</option>
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
        <h3>Age</h3>
        <select id="age" class="input" onChange={handleAge}>
          <option value="0">-</option>
          <option value="18"> &lt;18</option>
          <option value="18,22">18-22</option>
          <option value="23,27">23-27</option>
          <option value="28,32">28-32</option>
          <option value="32">&gt; 32</option>
        </select>
        <br />
        </div>
  )
}

export default SearchAthlete