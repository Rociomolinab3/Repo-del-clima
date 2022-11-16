import React from 'react';
import './Card.module.css';
import styled from "styled-components";
import {Link} from "react-router-dom";
import style from "./Card.module.css"


const CompButton=styled.button`
  &:hover{
    background-color:#dc2f2f;
    transition:1s;
  }
`
const CompWords=styled.div`
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
color:white;

`

export default function Card ({min, max,
   name, img, onClose, id}) {
    return (
   <div className={style.styleCard}>
   <CompButton onClick={()=>onClose(id)} className={style.styleOnClose}>X</CompButton>
   <CompWords>
    <Link to={`/ciudad/${id}`}>
   <h2> City:  {name}</h2>
   </Link>
   <p></p>
   <p>Max: {max}°</p>
   <p>Min: {min}°</p>
   </CompWords>
   <img src={`https://openweathermap.org/img/wn/${img}@2x.png`} alt="icon"/>

  </div>
    );
};


