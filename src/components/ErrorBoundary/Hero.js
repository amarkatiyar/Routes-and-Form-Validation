import React from 'react'

function Hero({Heroname}) {
    if(Heroname==='joker'){
        throw new Error('not a hero')
    }
  return (
    <div>{Heroname}</div>
  )
}

export default Hero