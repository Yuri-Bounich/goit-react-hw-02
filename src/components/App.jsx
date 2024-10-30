import Description from './Description/Description';
import Options from './Options/Options';
// import userData from '../assets/userData.json';
// import friends from '../assets/friends.json';
// import transactions from '../assets/transactions.json';
import Feedback from './Feedback/Feedback';
import '../index.css';
// import { useState, useEffect } from 'react';

const App = () => {
  // const [values, setValues] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  const userResponse = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  return (
    <div>
      <Description />
      <Options />
      <Feedback response={userResponse} />
    </div>
  );
};

export default App;
