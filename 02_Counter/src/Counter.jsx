import { useState } from 'react'

function Counter() {

  let [counter, b] = useState(10)

  // b = setCounter

  let addValue = function () {
    if(counter<20)
    {
      b(counter + 1)
    }
  }

  let removeValue = function () {
    if(counter>0)
    {
      b(counter - 1)
    }
  }

  return (
    <>
      <h1>Nishant Kushwaha</h1>
      <div id="counter">
        <h2>Counter: {counter}</h2>
        <button onClick={addValue}>Add</button>
        <button onClick={removeValue}>Remove</button>
      </div>

    </>
  )
}

export default Counter



// import { useState } from 'react'

// function Counter() {

//   let [counter, b] = useState(10)

//   return (
//     <>
//       <h1>Nishant Kushwaha</h1>
//       <div id="counter">
//         <h2>Counter: {counter}</h2>
//         <button onClick={() => b(counter+1)}>Add</button>
//         <button onClick={() => b(counter-1)}>Remove</button>
//       </div>

//     </>
//   )
// }

// export default Counter
