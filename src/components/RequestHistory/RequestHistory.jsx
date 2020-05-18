import React from 'react';
import { useSelector } from 'react-redux';
import RequestItem from './RequestItem.jsx';
import { getRequests } from '../../selectors/requestsSelectors.js';
import { weakKey } from '../../utilities/weakKey.jsx';
import styles from './RequestHistory.css';

const RequestHistory = () => {
  const { requests } = useSelector(getRequests);

  const requestElements = requests.map(request => (
    <li key={weakKey(request)}>
      <RequestItem {...request} />
    </li>
  ));
  
  return (
    <ul className={styles.RequestHistory}>
      {requestElements}
    </ul>
  );
};

export default RequestHistory;
