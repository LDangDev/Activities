import React from 'react'
import visaImg from "./images/visa.png"
import masterImg from "./images/master.png"

const CreditCard = (props) => {
  const style = {
    backgroundColor: props.bgColor,
    color: props.color
  }
  let img_path
  switch (props.type) {
    case 'Visa':
      img_path = visaImg
      break
    default:
      img_path =  masterImg
  }

  let displayNumber = '•••• •••• •••• '
  const cardNumber = props.number.slice(-4)

  // console.log(img_path)

  return (
    <div className='card_container' style={style}>
      <img className='card_pic' src={img_path} alt="logo-picture" />
      <p className='card_number'>{displayNumber + cardNumber}</p>
      <div className='info'>
        <p>Expire day: {props.expirationMonth}/{props.expirationYear} <span>{props.bank}</span></p>
        <p className='name_owner'>{props.owner}</p>
      </div>
      
    </div>
  )
}

export default CreditCard
