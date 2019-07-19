import React from 'react';
import styled from 'styled-components';
import '../../components/StarWars.css';
const Cards = styled.div `
  width: 250px;
  height: 350px;
  background: linear-gradient(180deg, #0aa 50%, #03dd 100%);
  box-shadow: inset 5px 5px 5px rgba(255, 255, 255, .4), inset -5px -5px 5px rgba(1, 1, 1, .4);
  border-radius: 8px;
  padding-top: -65px;
  
   `;

const DataCard = (props)=> {
    console.log(props)
    return(
        <Cards>
            <div>
            <h2>
        {props.pullImg.name}
        </h2>
        <h3>Height: {props.pullImg.height}</h3>
        <h3>Mass: {props.pullImg.mass}</h3>
        <h3>Gender: {props.pullImg.gender}</h3>
        </div>
        </Cards>
    );
}
export default DataCard;