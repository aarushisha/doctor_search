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
    console.log(event.target.id);
    fetch(`/id/:${event.target.id}`)
    .then(data => data.json())
    .then(selectDoctor => this.setState({selectDoctor: selectDoctor}))
  }

  render() {
    return (
      <div>        
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