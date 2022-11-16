import React from 'react';
import styled from 'styled-components';
import Card from './Card.jsx';

const ContainerCards= styled.div`
  display:grid;
  grid-template-columns:repeat(3,minmax(350px,250px));
  padding:1em;
  justify-content:center;
  margin-top:3em;
  grid-row-gap:1.3em;
  `

export default function Cards({cities, onClose}) {
  if(cities) 
  return(
  <>
  <ContainerCards>
  {cities.map((city)=><Card 
  max={city.main.temp_max}
  min={city.main.temp_min}
  name={city.name}
  img={city.weather[0].icon}
  onClose={()=>onClose(city.id)}
  id={city.id}
  key={city.id}
  />)
  }
  </ContainerCards>
  </>
  )
};
