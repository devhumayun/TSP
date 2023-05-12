import { useReducer } from "react"
import { counterReducerAction, counterReducerState } from "../type/type"

const initialState = {
    count: 0
}

const counterReducer = (state : counterReducerState, {type,payload}: counterReducerAction) => {
    switch (type) {
        case "inc":
            return{
                count: state.count + 1
            }
        case "dec":
            return{
                count: state.count - 1
            }
        case "reset":
            return{
                count: 0
            }
            
    
        default:
            return state
    }
}

const CounterReducer = () => {
    const [ state, dispatch ] = useReducer(counterReducer, initialState)
    return (
    <>
      <p> Counter Reducer </p>
      <h1> {state.count} </h1>
      <hr />
      <button onClick={() => dispatch({ type: "inc"})}> ++ </button>
      <button onClick={() => dispatch({ type: "dec"})}> -- </button>
      <button onClick={() => dispatch({ type: "reset"})}>  Rest </button>
    </>
  )
}

export default CounterReducer
