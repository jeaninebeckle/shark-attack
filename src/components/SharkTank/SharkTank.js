import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/propTypes/studentShape';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentShape.studentShape),
  }

  render() {
    const { livingStudents } = this.props;

    const livingStudentCards = livingStudents.map((student) => (
      <LiveStudent key={student.studentId} student={student}/>
    ));

    return (
      <div>
        <h2>Live Students</h2>
        <div className="card-columns">
          { livingStudentCards }
          <button type="button" className="btn btn-danger">Shark Attack</button>
        </div>
      </div>
    );
  }
}

export default SharkTank;
