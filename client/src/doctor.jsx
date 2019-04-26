import React from 'react';

const Doctor = (props) => {
  return (
    <div className="doctor" key={props.id}>
      <div>{props.firstName} {props.middleName} {props.lastName}</div>
      <div>Specialty: {props.specialty}</div>
      <div>{props.specialty2 ? `Second Speciality: ${props.specialty2}` : "" }</div>
      <div>Rating: {props.rating}</div>
      <button id={props.id} onClick={() => props.selectDoctor()}>Select</button>
    </div>

  )
}

export default Doctor;