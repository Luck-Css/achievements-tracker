import React from 'react'

function GameCard() {
    const games = ["Resident evil requiem", "Resident evil 4 remake", "Resident evil 2 remake"];

    function selectGame() {
      alert("Funciona")
    }

  return (
    <div className='grid text-xl text-zinc-800 place-items-center'>
      <label for="game-select">Choose a Game:</label>
       <div className=''>
        <select name="gameSelector" id="game-select" className='block w-full px-4 py-2.5 bg-neutral-secondary-medium border border-default-medium text-heading rounded-2xl focus:ring-brand focus:border-brand shadow-xs placeholder:text-body'>
          <option value="Resident-evil4-re">Resident evil 4 Remake</option>
          <option value="Resident-evil2-re">Resident evil 2 Remake</option>
          <option value="Resident-requiem">Resident evil 9 Requiem</option>

        </select>
        

       </div>
    </div>
  )
}

export default GameCard
