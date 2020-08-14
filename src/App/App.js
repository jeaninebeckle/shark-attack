import React from 'react';
import SharkTank from '../components/SharkTank/SharkTank';
import Graveyard from '../components/Graveyard/Graveyard';
import './App.scss';
import studentsData from '../helpers/data/studentsData';

class App extends React.Component {
  state = {
    livingStudents: [],
    deadStudents: [],
  }

  componentDidMount() {
    const livingStudents = studentsData.livingStudents();
    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ livingStudents, deadStudents });
  }

  eatAStudent = (studentId) => {
    studentsData.followTheLight(studentId);
    const livingStudents = studentsData.livingStudents();
    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ livingStudents, deadStudents });
  }

  eatStudentEvent = (e) => {
    e.preventDefault();
    const { student, eatAStudent } = this.props;
    eatAStudent(student.studentId);
  }

  render() {
    const { livingStudents, deadStudents } = this.state;

    return (
      <div className="App">
        <h2>SHARK ATTACK</h2>
        <button type="button" className="btn btn-danger" onClick={this.eatStudentEvent}>Shark Attack</button>
        <SharkTank livingStudents={livingStudents} eatAStudent={this.eatAStudent} />
        <Graveyard deadStudents={deadStudents} />
      </div>
    );
  }
}

export default App;
