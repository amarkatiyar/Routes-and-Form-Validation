import React,{useContext} from 'react'
import { channelContext, userContext } from '../Context/CombineComponent'
function ComponentF() {
    const value = useContext(userContext);
    const channelvalue= useContext(channelContext)
    return (
        <>
            <userContext.Provider>
            <div>
                user context value {value} and channel vlaue {channelvalue}
            </div>
            </userContext.Provider>
        </>
    )
}

export default ComponentF