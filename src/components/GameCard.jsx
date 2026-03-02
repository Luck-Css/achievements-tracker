import React from 'react'

function GameCard() {
    const games = ["Resident evil requiem", "Resident evil 4 remake", "Resident evil 2 remake"];

  return (
    <div className='grid font-rovian text-xl text-zinc-800 place-items-center'>
       <h2>Choose a game:</h2> 
        <select className='place-items-center'>
            <option value="Resident evil requiem">Resident evil requiem</option>
            <option value="Resident evil 4 remake">Resident evil 4 remake</option>
            <option value="Resident evil 2 remake">Resident evil 2 remake</option>
        </select>
    </div>
  )
}

export default GameCard
