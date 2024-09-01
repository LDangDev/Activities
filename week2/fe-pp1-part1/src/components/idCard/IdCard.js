import React from 'react';
import './IdCard.css';
const IdCard = (props) => {
  return (
    <div className="id_card">
      <img className="profile-pic" src={props.picture} alt="picture_profile" />
      <div className="profile-info">
      <p><span className='bold-field'>First name:</span> {props.firstName}</p>
        <p><span className='bold-field'>Last name:</span> {props.lastName}</p>
        <p><span className='bold-field'>Gender:</span> {props.gender}</p>
        <p><span className='bold-field'>Height:</span> {props.height}</p>
        <p><span className='bold-field'>Birth:</span> {props.birth.toDateString()}</p>
      </div>
    </div>
  );
};

export default IdCard;
