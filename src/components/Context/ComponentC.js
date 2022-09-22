import React,{useContext} from 'react'
import { userContext,channelContext } from './CombineComponent';

function ComponentC() {
    const value = useContext(userContext);
    const channelvalue= useContext(channelContext)
  return (
    <div>ComponentC {value} and {channelvalue}</div>
  )
}

export default ComponentC