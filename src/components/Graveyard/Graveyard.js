import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from '../GraveStone/GraveStone';
import studentShape from '../../helpers/propTypes/studentShape';

class Graveyard extends React.Component {
  static propTypes = {
    deadStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { deadStudents } = this.props;

    const deadStudentCards = deadStudents.map((student) => (
      <GraveStone key={student.studentId} student={student}/>
    ));

    return (
      <div>
        <h2>R.I.P.</h2>
        <div className="card-columns">
          { deadStudentCards }
        </div>
      </div>
    );
  }
}

export default Graveyard;
