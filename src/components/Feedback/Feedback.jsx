import s from './Feedback.module.css';
// import clsx from 'clsx';

const Feedback = ({ response }) => {
  return (
    <div className={s.cotainer}>
      <p className={s.results}>Good: {response.good}</p>
      <p className={s.results}>Neutral: {response.neutral}</p>
      <p className={s.results}>Bad: {response.bad}</p>
    </div>
  );
};

export default Feedback;
