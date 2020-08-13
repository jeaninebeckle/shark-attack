import PropTypes from 'prop-types';

const studentShape = PropTypes.shape({
  studentId: PropTypes.string.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  isDead: PropTypes.bool.isRequired,
});

export default { studentShape };
