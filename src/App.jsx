import Time from "./Timeline"
import { useState } from "react"
import './App.css'
import { useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  const [year, setYear] = useState("")
  const [event, setEvent] = useState('')


  // used get request 
  useEffect(() => {
    fetch("http://localhost:3001/event")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
  }, [])


  const handleClick = () => {
    let newObj = {}
    newObj.year = year
    newObj.event = event
    setData([...data, newObj])
    setYear('')
    setEvent('')

    //used post request
    fetch("http://localhost:3001/event", {
      method: "post",
      body: JSON.stringify({ year, event })
    })

  }
  return (
    <div className="container">
      <h1>Welcome to My Time-Line </h1>
      <br />
      {data.map(event => {
        return (<Time key={event.year} year={event.year} event={event.event} />)
      })}
      <label htmlFor="Years"></label>
      <input value={year} type='number' onChange={e => setYear(e.target.value)} />
      
      <label htmlFor="Events"></label>
      <input value={event} type='text' onChange={e => setEvent(e.target.value)} />
      <br />
      <button onClick={handleClick}>Sumbit</button>
    </div>
  )
}

export default App
