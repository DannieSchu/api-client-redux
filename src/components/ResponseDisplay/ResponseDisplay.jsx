import React from 'react';
import ReactJson from 'react-json-view';
import { useSelector } from 'react-redux';
import { getResponse, getLoading } from '../../selectors/responseSelectors';
import { themeColors } from './themeColors';
import styles from './ResponseDisplay.css';

const ResponseDisplay = () => {
  const response = useSelector(getResponse);
  const loading = useSelector(getLoading);

  return (
    <section className={styles.ResponseDisplay}>
      <h2>Response</h2>
      <article>
        {!response && loading
          ? 'Loading'
          : response
            ? <ReactJson
              src={response.response.results}
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

export default ResponseDisplay;
