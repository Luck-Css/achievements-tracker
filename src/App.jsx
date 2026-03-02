import { useState } from 'react'
import './Index.css'
import GameCard from './components/GameCard'


function App() {


  return (
    <>
    <section className='grid bg-zinc-600 h-screen place-items-center  '>
      <h1 className='font-club text-8xl text-zinc-300'><span className='text-amber-300'>Achievements</span> Tracker</h1>
      <div className='bg-zinc-400/60 h-400 w-250 rounded-3xl flex flex-col p-10'>
      <GameCard />

      </div>

    </section>
    </>
  )
}

export default App
