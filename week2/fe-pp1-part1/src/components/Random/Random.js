import React from 'react'
import './Random.css'
const Random = (props) => {
  let result = 0

  const randomNum = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  result = randomNum(props.min, props.max)

  return (
    <div className='wrapper'>
      <p>Random value between {props.min} and {props.max} ={'>'} {result}</p>
    </div>
  )
}

export default Random
