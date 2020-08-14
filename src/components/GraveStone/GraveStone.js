import React from 'react';
import studentShape from '../../helpers/propTypes/studentShape';
import './GraveStone.scss';

class GraveStone extends React.Component {
  static propTypes = {
    student: studentShape.studentShape,
  }

  render() {
    const { student } = this.props;
    return (
      <div className="card">
        <img className="card-img-top" src={student.imgUrl} alt="student" />
          <div className="card-body">
          <h3 className="card-text">{student.firstName} {student.lastName} </h3>
        </div>
      </div>
    );
  }
}

export default GraveStone;
