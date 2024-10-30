// import PropTypes from 'prop-types';
import s from './Options.module.css';
// import clsx from 'clsx';

const Options = userResponse => {
  return (
    <div className={s.container}>
      <button className={s.btn}> Good</button>
      <button className={s.btn}>Neutral</button>
      <button className={s.btn}>Bad</button>
    </div>
  );
};

// Profile.propTypes = {
//   name: PropTypes.string.isRequired,
//   tag: PropTypes.string.isRequired,
//   location: PropTypes.string.isRequired,
//   image: PropTypes.string.isRequired,
//   stats: PropTypes.shape({
//     followers: PropTypes.number.isRequired,
//     views: PropTypes.number.isRequired,
//     likes: PropTypes.number.isRequired,
//   }).isRequired,
// };

export default Options;
