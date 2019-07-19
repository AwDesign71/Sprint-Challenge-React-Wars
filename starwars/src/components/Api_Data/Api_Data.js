import React, {useState, useEffect} from 'react';
import axios from 'axios';
import DataCard from '../Api_Data/Api_card';

//States properties

// Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const SWData = ()=> {
    const[pullImg, setPullImg] = useState([]);
    const[getInformation, setgetInformation] = useState('')
    useEffect(()=>{
        axios.get(`https://swapi.co/api/people`)
        .then(response=> {
          //const images = response.data;  
          setPullImg(response.data.results);
      
          console.log(response.data)
         }).catch(error=>{
             console.log(error);
          })
      },[])
      return(
        <div> 
          {pullImg && pullImg.map((pullImg, index)=>{
            return(<DataCard pullImg={pullImg} key={index}/>)
            }
       
        )}
        </div>)
  }
  export default SWData;
  