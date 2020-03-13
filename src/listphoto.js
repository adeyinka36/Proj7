import React from 'react';


const ListPhoto =(props)=>{
  return(
      <li>
          <img src={`${props.picsSource}`} alt=""/>     
      </li>
  )
}


export default ListPhoto