import React from 'react';
import ReactDOM from 'react-dom';
import Doctor from './doctor.jsx';
import SelectDoctor from './selectdoctor.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      doctors: [],
      selectDoctor: [],
      relatedDoctors: []
    }
    this.getDoctors = this.getDoctors.bind(this);
    this.selectDoctor = this.selectDoctor.bind(this);
    this.filterDoctor = this.filterDoctor.bind(this);
  }

  componentDidMount() {
    this.getDoctors();

  }

  getDoctors() {
    fetch('/allDoctors')
    .then(data => data.json())
    .then(doctors => this.setState({doctors: doctors}));
  }


  selectDoctor() {
    fetch(`/id/:${event.target.id}`)
    .then(data => data.json())
    .then(selectDoctor => this.setState({selectDoctor: selectDoctor}))
  }

  filterDoctor() {
    var specialty = (document.getElementById('specialty').value);
    var rating = (document.getElementById('rating').value);
    fetch(`/spec/:${specialty}${rating}`)
    .then(data => data.json())
    .then(filteredDoctors => this.setState({doctors: filteredDoctors}))
    
  }

  render() {
    return (
      <div>
        <div>
        Specialty: <select id="specialty">
  <option value="Anesthesiology">Anesthesiology</option>
  <option value="Emergency Medicine">Emergency Medicine</option>
  <option value="Family Medicine">Family Medicine</option>
  <option value="General Practice">General Practice</option>
  <option value="Hospitalist">Hospitalist</option>
  <option value="Internal Medicine">Internal Medicine</option>
  <option value="Neurological Surgery">Neurological Surgery</option>
  <option value="Neuromusculoskeletal Medicine">Neuromusculoskeletal Medicine</option>
  <option value="Obstetrics & Gynecology">Obstetrics & Gynecology</option>
  <option value="Ophthalmology">Ophthalmology</option>
  <option value="Orthopaedic Surgery">Orthopaedic Surgery</option>
  <option value="Otolaryngology">Otolaryngology</option>
  <option value="Pain Medicine">Pain Medicine</option>
  <option value="Pathology">Pathology</option>
  <option value="Pediatrics">Pediatrics</option>
  <option value="Plastic Surgery">Plastic Surgery</option>
  <option value="Psychiatry & Neurology">Psychiatry & Neurology</option>
  <option value="Radiology">Radiology</option>
  <option value="Surgery">Surgery</option>
  <option value="Thoracic Surgery (Cardiothoracic Vascular Surgery)">Thoracic Surgery (Cardiothoracic Vascular Surgery)</option>
  <option value="audi">Urology</option>
</select>
        Rating: <select id="rating">
  <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3</option>
  <option value="4">4</option>
  <option value="5">5</option>
</select>
<button onClick={() => this.filterDoctor()}>Filter</button> 
<button onClick={() => this.getDoctors()}>Reset</button> 
</div>
<br></br> 
<div id="no doctor">{this.state.doctors.length === 0 ? "No Doctors Found" : ""}</div>   
        <span id="selectDoctor">
        {this.state.selectDoctor.map(selectDoctor => <SelectDoctor 
        firstName={selectDoctor.first_name}  middleName={selectDoctor.middle_name} lastName={selectDoctor.last_name} specialty={selectDoctor.specialty} specialty2={selectDoctor.specialty2} rating={selectDoctor.score}
        address1={selectDoctor.address1} address2={selectDoctor.address2} city={selectDoctor.city} state={selectDoctor.state} zip={selectDoctor.zip} phone={selectDoctor.Phone}/>)}
        </span>
        <span id="doctorList">
        {this.state.doctors.map(doctor => <Doctor firstName={doctor.first_name} middleName={doctor.middle_name} lastName={doctor.last_name} specialty={doctor.specialty} specialty2={doctor.specialty2} rating={doctor.score} selectDoctor={this.selectDoctor} id={doctor.id}/>)}
        </span>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));