import { counter } from "../type/type"


const Counter = ({counter, setCounter}:counter) => {
  

    const handleIncrement = (): void => {
      setCounter(counter + 1)
    }

    const handleDecrement = () :void => {
      setCounter(counter - 1)
    }

    const handleReset = () => {
      setCounter(0)
    }

    return (
    <>
      <p> UseState Counter </p>
      <h1> {counter} </h1>
      <hr />
      <button onClick={handleIncrement}>++</button>
      <button onClick={handleDecrement}>--</button>
      <button onClick={handleReset}>Reset</button>
    </>
  )
}

export default Counter
