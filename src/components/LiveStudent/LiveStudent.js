/* eslint-disable react/style-prop-object */
import React from 'react';
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
        <span className="fa-stack fa-5x">
          <i className="fas fa-fish fa-stack-1x"></i>
            <span className="fa-stack-1x fa-stack-text fa-inverse">{student.firstName}</span>
          </span>
      </div>
    );
  }
}

export default LiveStudent;
