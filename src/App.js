import React, {useState} from 'react';
import axios from 'axios';
import './App.css';

const App=() => {

const [pokemon, setPokemon]= useState("pikachu");
const [pokemonData, setPokemonData]= useState([]);
const [pokemonType, setPokemonType]= useState("");

const getPokemon= async ()=> {
  const toArray=[];
try{
 const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
 const res = await axios.get(url);
 toArray.push(res.data);
 setPokemonType(res.data.types[0].type.name);
 setPokemonData(toArray);
 console.log(res); 
}
catch(e){
console.log(e);
}
}

const handleChange=(e)=> {
  setPokemon(e.target.value.toLowerCase());

}
const handleSubmit =(e)=>{
  e.preventDefault();
  getPokemon();
}

//useEffect(() => {
  //getPokemon();
//}, [])

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          <input type='text' placeholder='Enter Character Name' onChange={handleChange}>
          
          </input>
        </label>
      </form>
      {pokemonData.map((data)=>{
       return(

    <div className='container'>
      <img  src={data.sprites["front_default"] }/>

  
  
  <div clasName="divTableCell">Type</div>
  <div clasName="divTableCell">{pokemonType}</div>
  
 
  <div clasName="divTableCell">Height</div>
  <div clasName="divTableCell">{""} {Math.round(data.height* 3.9)}</div>
  
  
  <div clasName="divTableCell">Weight</div>
  <div clasName="divTableCell">{""} {Math.round(data.weight/ 4.9)}lbs</div>
  
  
</div>

     
       )
      })}
      
    </div>
  );
  
}

export default App;
