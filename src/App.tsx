import { useState } from "react"
import Counter from "./components/Counter"
import CounterReducer from "./components/CounterReducer"
import { counter } from "./type/type"
import Users from "./components/Users"

function App() {

  const [counter, setCounter]= useState(10)

  return (
    <>
      <CounterReducer />
      <hr />
      <Counter counter={counter} setCounter={setCounter} />
      <hr />
      <Users />
      <hr />
    </>
  )
}

export default App
