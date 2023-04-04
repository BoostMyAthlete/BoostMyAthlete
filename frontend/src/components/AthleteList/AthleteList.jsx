import axios from 'axios';
import { useState } from 'react';
import AthleteCard from './../AthleteCard/AthleteCard';
import SearchAthlete from '@components/SearchAthlete/SearchAthlete';

const AthleteList = () => {
    const [persons, setPersons] =useState([]);
    const [country, setCountry] = useState('')
    const [age, setAge] = useState('')

    const options = {
      method: 'GET',
      url: 'https://api.triathlon.org/v1/athletes',
      params: {per_page: '1000', validated: 'true'},
      headers: {accept: 'application/json', apikey: '2649776ef9ece4c391003b521cbfce7a'}
    };
    const getPersons = () => {
    axios
      .request(options)
      .then((response) => {
        const totalData = response.data.data;
        const filterCountry =  country === ""  ? totalData : totalData.filter((athlete) => athlete.athlete_country_name === country);
        const filterAge = age[0] === 0 ? filterCountry : filterCountry.filter((athlete) => age.length===1 && age[0] === 18 ? athlete.athlete_age < age[0] : (age.length===1 && age[0] === 32 ? athlete.athlete_age > 32 : athlete.athlete_age >= age[0] && athlete.athlete_age <= age[1] ))
        const filterImg = filterAge.filter((athlete) => athlete.athlete_profile_image !== null);
        
        
        console.log(filterImg)
        setPersons(filterImg)
      });
    };



    const handleCountry = (event) => {
      const selectedCountry = event.target.value;
      setCountry(selectedCountry);
      console.log('Selected country:', selectedCountry);
    }
    const handleAge =(event)=>{
      const selectedAge = event.target.value;
      const ageRange = selectedAge.split(",");
      const numberAgeRange = ageRange.map(age => parseInt(age));
      setAge(numberAgeRange);
      console.log('Selected age:', numberAgeRange);
    }
      return (
        <>
        <SearchAthlete handleCountry={handleCountry}  handleAge={handleAge} />
            <div>
                <button onClick={getPersons}>Get Athlete List</button>
                <div className="row">          
      {
      persons
        ? persons.map((athlete) => (
            <div key={athlete.athlete_id} className="col-lg-3 col-md-6 col-sm-12">
              <AthleteCard athlete={athlete} />
            </div>
          ))
        : null}

            </div>
            </div>
        
        </>

   )};
   export default AthleteList

   // if age.length === 1 && age === 18 return athlete.athlete_age < 18
// else if age.length === 1 && age === 32 return athlete.athlete_age > 32
// else return age[0] <= athlete.athlete_age <= age[1]
// if age.length === 1 return age else return index[0] < age < index[1]