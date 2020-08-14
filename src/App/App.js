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

  // eatAStudent(studentId) {
  //   studentsData.followTheLight(studentId);
  //   const students = studentsData
  // }

  render() {
    const { livingStudents, deadStudents } = this.state;

    return (
      <div className="App">
        <h2>SHARK ATTACK</h2>
        <SharkTank livingStudents={livingStudents} />
        <Graveyard deadStudents={deadStudents} />
      </div>
    );
  }
}

export default App;
