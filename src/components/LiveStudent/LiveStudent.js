import React from 'react';
// import PropTypes from 'prop-types';
import studentShape from '../../helpers/propTypes/studentShape';
import './LiveStudent.scss';

class LiveStudent extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
      <div>
        <div className="card">
        <img className="card-img-top" src={student.imgUrl} alt="student" />
          <div className="card-body">
          <h3 className="card-text">{student.firstName} {student.lastName} </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default LiveStudent;
