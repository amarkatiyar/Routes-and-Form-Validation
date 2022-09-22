import React,{useContext } from 'react'
// import ButtonContext from './Context/ButtonContext';
import {useNavigate} from 'react-router-dom'
import { Button } from '@mui/material';

function Child3() {
    const navigate = useNavigate()
    // const value = useContext(ButtonContext);
  return (
    <div>
      <Button onClick={()=>navigate('buttondemo')}>Click me</Button>
        {/* {value} */}
        </div>
  )
}

export default Child3;