import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from '../LiveStudent/LiveStudent';
import studentShape from '../../helpers/propTypes/studentShape';
import './SharkTank.scss';

class SharkTank extends React.Component {
  static propTypes = {
    livingStudents: PropTypes.arrayOf(studentShape.studentShape),
    eatAStudent: PropTypes.func,
  }

  render() {
    const { livingStudents, eatAStudent } = this.props;

    const livingStudentCards = livingStudents.map((student) => (
      <LiveStudent key={student.id} student={student} eatAStudent={eatAStudent}/>
    ));

    return (
      <div className="students">
        <h2>Dinner Menu</h2>
        <div className="container">
        <div className="row">
          { livingStudentCards }
          </div>
        </div>
      </div>
    );
  }
}

export default SharkTank;
