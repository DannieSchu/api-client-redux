import React from 'react';
import ReactJson from 'react-json-view';
import { useResults, useLoading } from '../../hooks/APIClientProvider';
import { themeColors } from './themeColors.jsx';
import styles from './JsonDisplay.css';

const JsonDisplay = () => {
  const results = useResults();
  const loading = useLoading();

  return (
    <section className={styles.JsonDisplay}>
      <h2>Result</h2>
      <article>
        {!results && loading
          ? 'Loading'
          : results
            ? <ReactJson
              src={results}
              theme={themeColors}
              enableClipboard={false}
              iconStyle="circle"
              displayDataTypes={false}
              groupArraysAfterLength={50}
            />
            : 'Press \'send\' to get a response'}
      </article>
    </section >
  );
};

export default JsonDisplay;
