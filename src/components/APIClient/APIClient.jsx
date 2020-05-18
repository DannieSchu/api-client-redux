import React from 'react';
import { useSelector } from 'react-redux';
import Form from '../Form/Form';
import ResponseDisplay from '../ResponseDisplay/ResponseDisplay';
import RequestHistory from '../RequestHistory/RequestHistory';
import { getRequests } from '../../selectors/requestsSelectors';
import styles from './APIClient.css';

const APIClient = () => {
  const { requests } = useSelector(getRequests);

  return (
    <section className={styles.APIClient}>
      <section className={styles.formContainer}>
        <Form />
        <ResponseDisplay />
      </section>
      {requests && <RequestHistory />}
    </section>
  );
};

export default APIClient;

