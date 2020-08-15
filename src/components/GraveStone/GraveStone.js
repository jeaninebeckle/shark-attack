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
      <div>
      <div className="card">
          <div className="card-body">
          <h3 className="card-text">{student.firstName}</h3>
        </div>
        </div>
      </div>
    );
  }
}

export default GraveStone;
