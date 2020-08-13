import React from 'react';
import SharkTank from '../components/SharkTank/SharkTank';
import './App.scss';
import studentsData from '../helpers/data/studentsData';

class App extends React.Component {
  state = {
    livingStudents: [],
  }

  componentDidMount() {
    const livingStudents = studentsData.livingStudents();
    this.setState({ livingStudents });
  }

  render() {
    const { livingStudents } = this.state;
    return (
      <div className="App">
        <h2>SHARK ATTACK</h2>
        <SharkTank livingStudents={livingStudents}/>
      </div>
    );
  }
}

export default App;
