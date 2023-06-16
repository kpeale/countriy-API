import {useState, useEffect} from 'react';
const url = 'https://restcountries.com/v3.1/all'; 
function App() {
  const [countries, setCountries] = useState([]);
  const [text, setText] = useState('');
  const [region, setRegion] = useState('');
  
 
  
  // const [value, setValue] = useState(setCountries)

  const fetchCountries = async () => {
    const response = await fetch(url);
    const countries = await response.json();
    setCountries(countries)
    
    
  };

  useEffect(() => {
 fetchCountries();
  
  }, [])

   
  

  const handleSubmit = (e) => {
    e.preventDefault();
    
        
    };

//    return countries.filter((country) => {
//   return searchParam.some((newItem) => {
//     return (
//       country[newCountry]
//        .toString()
//          .toLowerCase()
//             .indexOf(text.toLowerCase()) > -1
//     );
//   });
//  })
  

   
 

  return (
   <section className='section__country'>
   <div className="section__country-heading">
    <h1>Where in the world?</h1>
   </div>
   <div className="section__country-body">
    <form onSubmit={handleSubmit} className='section__country-form'>
      <input type="text" name='country' id='country' value={text} onChange={(e) => setText(e.target.value)}  placeholder='search for  a country'/>
      <div className='section__country-filter'>
        <select name="filterCount" id="filterCount" aria-label='Filter Countries By Region' value={region} onChange={(e) => setRegion(e.target.value)} >
          <option value="All">Filter By Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
        </select>
      </div>
    </form>
    
    {/* for the card section of the map */}

    <div className="section__country-cards">

      {countries.filter((country) => {
                     
        if(text === '') {
          return country
        }  if (country.name.common.toLowerCase().includes(text.toLowerCase())) {
          return country
        } 
      }).map((country, index) => {
        const {population, region, capital,name, flags, alt} = country;
        return (
          <div className="section__country-card" key={index}>
          <img src={flags.png}  alt={alt}  className='image'/>
        <p>{name.common}</p>
        <p>Population: {population}</p>
        <p>Region: {region}</p>
        <p>Capital: {capital}</p>
          </div>

        )
      })}
    </div>
   
 </div>
 </section>
  );
}

export default App;
