import React, { useState } from 'react';
import axios from "axios";
import './App.css';
import Nav from '../components/Nav.jsx';
import Cards from '../components/Cards.jsx';
import { Route } from 'react-router-dom';
import About from "../components/About"
import Ciudad from '../components/Ciudad';

const apiKey="b75782c8233c25aed8b9790bcf6fa246";

function App() {

  const onSearch=(ciudad)=>{
  //     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
  //      .then(r => r.json())
  //      .then((recurso) => {
  //       if(recurso.main !== undefined){  setCities(oldCities => [...oldCities, recurso.main]);
  //   } else {
  //     alert("City not found");
  //   };
  // })

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`
    ).then((response)=>{
      // if(response !== null)
      {setCities(oldCities => [...oldCities, response.data ])}
      // else {
      //   alert(" jj")
      // }
    });
};   
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
// .then(r => r.json())
// .then((recurso) => {
//   if(recurso.main !== undefined){
function onClose(id) {
  setCities(oldCities => oldCities.filter(city => city.id !== id));
};

  const [cities,setCities]= useState([]);
  
  return (
    <div className="App">
     <div>
      <Route path='/'>
      <Nav onSearch={onSearch}></Nav>
      </Route>
     </div>
     <Route exact path='/about' component={About}
     ></Route>
     <Route exact path='/' 
     render={()=>
     <Cards cities={cities} onClose={onClose}/>}>   
     </Route>
     <Route
     path="/ciudad/:ciudadId"
     render={({match})=>(<Ciudad 
     ciudad={cities.filter((city)=>city.id===parseInt(match.params.ciudadId)
      )[0]}
      />
      )}
      />
      
    </div>
  );
}

export default App;

