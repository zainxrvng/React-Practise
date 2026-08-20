import { useState, useEffect } from "react"
const LifeCycleLogger = () => {

const [count, setCount] = useState(0)

  useEffect(() => {
     console.log("component did mount")

    return () => {
      console.log("Component unmount")
    }

  }, [])

  useEffect(() => {
    if (count > 0) {
      console.log("Componenet is updated....", count)
    }
  }, [count])
  return (
    <div className='logger-container'>
      <h2>LifeCycleLogger (function Component)</h2>
      <p>{count}</p>
      <button className="secondary-btn" onClick={() => {
        setCount((prev) => prev + 1)
      }}>Update</button>
    </div>
  )
}

export default LifeCycleLogger
