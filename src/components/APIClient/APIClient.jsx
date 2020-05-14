import React from 'react';
import Form from '../Form/Form.jsx';
import JsonDisplay from '../JsonDisplay/JsonDisplay.jsx';
import RequestHistory from '../RequestHistory/RequestHistory.jsx';
import { useRequests } from '../../hooks/APIClientProvider.jsx';
import styles from './APIClient.css';

const APIClient = () => {
  const requests = useRequests();

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
