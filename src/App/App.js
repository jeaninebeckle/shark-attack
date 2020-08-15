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

  eatStudentEvent = (e) => {
    e.preventDefault();
    console.warn('made it here');
    studentsData.sharkAttack();
    const livingStudents = studentsData.livingStudents();
    const deadStudents = studentsData.dearlyBeloved();
    this.setState({ livingStudents, deadStudents });
  }

  render() {
    const { livingStudents, deadStudents } = this.state;

    return (
      <div className="App">
        <h2>Just when you thought it was safe to go back in the water...</h2>
        <button className="button" onClick={this.eatStudentEvent}>Shark Attack</button>
        <SharkTank livingStudents={livingStudents} eatAStudent={this.eatAStudent} />
        <Graveyard deadStudents={deadStudents} />
      </div>
    );
  }
}

export default App;
