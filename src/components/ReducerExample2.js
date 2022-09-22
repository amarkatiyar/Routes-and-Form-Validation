import React, { useReducer } from 'react'
function ReducerExample2() {

    // const initialState = 0;
    const initialState ={
        firstCounter: 0,
        secondCounter: 10
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'increment':
                return {...state, firstCounter: state.firstCounter + action.value}
            case 'decrement':
                return {...state, firstCounter: state.firstCounter - action.value}
                case 'increment2':
                    return {...state, firstCounter: state.firstCounter + action.value}
                case 'decrement2':
                    return {...state, firstCounter: state.firstCounter - action.value}
            case 'reset':
                return initialState
            default:
                return state
        }
    }

    const [count, dispatch] = useReducer(reducer,initialState)

    return (
        <>
             <div>value = {count.firstCounter}</div>
             <button onClick={()=>dispatch({type:'increment', value:1})}>Increment</button>
             <button onClick={()=>dispatch({type:'decrement',value:2})}>decrement</button>
             <button onClick={()=>dispatch({type:'increment2', value:5})}>Increment5</button>
             <button onClick={()=>dispatch({type:'decrement2',value:5})}>decrement5</button>
             <button onClick={()=>dispatch({type:'reset'})}>Reset</button>
        </>
    )
}

export default ReducerExample2