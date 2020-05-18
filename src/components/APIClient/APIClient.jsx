import React from 'react';
import Form from '../Form/Form';
import JsonDisplay from '../JsonDisplay/JsonDisplay';
import RequestHistory from '../RequestHistory/RequestHistory';
import styles from './APIClient.css';
import { useSelector } from 'react-redux';
import { getRequests } from '../../selectors/requestsSelectors';

const APIClient = () => {
  const { requests } = useSelector(getRequests);

  return (
    <section className={styles.APIClient}>
      <section className={styles.formContainer}>
        <Form />
        <JsonDisplay />
      </section>
      {requests && <RequestHistory />}
    </section>
  );
};

export default APIClient;

