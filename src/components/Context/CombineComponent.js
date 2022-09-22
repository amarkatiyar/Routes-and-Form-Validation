import React from 'react'
import ReducerExample from '../ReducerExample'
import ReducerExample2 from '../ReducerExample2'
import ComponentC from './ComponentC'
import ComponentF from './ComponentF'

export const userContext = React.createContext()
export const channelContext = React.createContext()
function CombineComponent() {
    return (
        <>
            <userContext.Provider value={'amar'}>
                <channelContext.Provider value={'codeevolution'}>
                    <ComponentF />
                    <ComponentC />
                </channelContext.Provider>
            </userContext.Provider>
            <ReducerExample />
            <ReducerExample2 />
        </>
    )
}

export default CombineComponent