import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])
  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        console.log('Jokes fetched successfully:', response.data);
        setJokes(response.data.jokes);
      }).catch((error) => {
        console.error('Error fetching jokes:', error);
      });
  }, [])

  return (
    <>
      <h1>Tejas and Full Stack</h1>
      <h3>Jokes Length : {jokes.length ? jokes.length : 0}</h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {jokes.length > 0 ? jokes.map((joke) => {
          return (
            <div key={joke.id} style={{ border: '3px solid white', padding: '10px', borderRadius: '5px' }}>
              <div>
                {joke.setup}
              </div>
              <div> {joke.punchline}</div>
            </div>
          )
        }) : <li>No jokes available</li>}
      </div >
    </>
  )

}

export default App
