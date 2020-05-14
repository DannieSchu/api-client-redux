import React from 'react';
import RequestItem from './RequestItem.jsx';
import { useRequests, useHandleClick, useHandleDelete } from '../../hooks/APIClientProvider.jsx';
import { weakKey } from '../../utilities/weakKey.jsx';
import styles from './RequestHistory.css';
import buttonStyle from '../../css/button.css';

const RequestHistory = () => {
  const requests = useRequests();
  const handleDelete = useHandleDelete();
  const handleClick = useHandleClick();

  const requestElements = requests.map(request => (
    <li key={weakKey(request)}>
      <RequestItem {...request} />
    </li>
  ));
  
  return (
    <ul className={styles.RequestHistory}>
      {requestElements}
      <button className={buttonStyle.tealButton} onClick={handleDelete}>Clear History</button>
    </ul>
  );
};

export default RequestHistory;
