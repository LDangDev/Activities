import React from 'react'
import './Greetings.css'

const Greetings = (props) => {
    let greetings = ''
    switch(props.lang){
        case 'de':
            greetings = `Hallo ${props.children}`
            break
        case 'fr':
            greetings = `Bonjour ${props.children}`
            break
        default:
            greetings = 'Hello There!'
    }
    
  return (
    <div className='greet-container'>
      <p>{greetings}</p>
    </div>
  )
}

export default Greetings
