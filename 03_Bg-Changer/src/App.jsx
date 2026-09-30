import { useState } from "react"

function App() {

  let [color, setcolor] = useState("olive")

  return (
    <>
      <div className="outer" style={{ backgroundColor: color }}>

        <div className="inner">
          
          <button onClick={() => setcolor("red")} className="red">Red</button>
          <button onClick={() => setcolor("green")} className="green">Green</button>
          <button onClick={() => setcolor("yellow")} className="yellow">Yellow</button>
          <button onClick={() => setcolor("blue")} className="blue">Blue</button>
          <button onClick={() => setcolor("pink")} className="pink">Pink</button>
          <button onClick={() => setcolor("white")} className="white">White</button>
          <button onClick={() => setcolor("orange")} className="orange">Orange</button>
          <button onClick={() => setcolor("olive")} className="olive">Olive</button>
          <button onClick={() => setcolor("black")} className="black">Black</button>

        </div>

      </div >
    </>
  )
}

export default App
