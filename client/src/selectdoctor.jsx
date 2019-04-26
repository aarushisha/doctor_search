import React from 'react';

const SelectDoctor = (props) => {
  return (
    <div className="selectDoctor" key={props.id}>
      <div>{props.firstName} {props.middleName} {props.lastName}</div>
      <div>Specialty: {props.specialty}</div>
      <div>{props.specialty2 ? `Second Speciality: ${props.specialty2}` : "" }</div>
      <div>Rating: {props.rating}</div>
      <div className="address"> Address
      <div>{props.address1}</div>
      <div>{props.address2}</div>
      <div>{props.city} {props.state}, {props.zip}</div>
      <div>Phone {props.phone}</div>
      </div>
    </div>

  )
}

export default SelectDoctor;