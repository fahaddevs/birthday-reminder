import { useState } from 'react'
import data from './data'
import List from './List'
import './App.css'

function App() {

  const [people, setPeople] = useState(data);

  return (
    <div className="App flex justify-center items-center h-screen">
      <div className='bg-slate-800 rounded-md shadow-md w-1/4 p-5 text-white'>
        <h2 className='text-2xl mb-4 text-center'>Total Listed {people.length}</h2>
        <List people={people} />

        <button type="button" onClick={() => setPeople([])} className='w-full bg-white text-black mt-5 rounded-md p-2 font-medium'>Clear All</button>
      </div>
    </div>
  )
}

export default App
