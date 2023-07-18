import React, { useState } from 'react'

export const Counter = () => {
  const [numCounter, setNumCounter] = useState(0)
  const handleClick = (bAction) => {
    if (bAction) {
      setNumCounter(numCounter + 1)
    } else {
      setNumCounter(numCounter - 1)
    }
  }
  return (
    <section style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center', textAlign: 'center', margin: '0 auto', width: '300px', height: '50px' }}>
      <button onClick={() => handleClick(false)}>{'<<'}</button><h1 style={{ padding: '2rem' }}>counter:{`${numCounter}`}</h1><button onClick={() => handleClick(true)}>{'>>'}</button>
    </section>
  )
}
