import React from 'react';
import { RadioButtonGroup } from './RadioButtonGroup';
import styles from './Form.css';
import buttonStyle from '../../globalStyles/button.css';
import { useFormRequest } from '../../hooks/formRequest';

const Form = () => {
  const { url, body, handleSubmit, handleChange, radioButtons } = useFormRequest();

  return (
    <form className={styles.Form} onSubmit={handleSubmit}>
      <div>
        <h2>Request</h2>
      </div>
      <div>
        <input
          type="text"
          name="url"
          value={url}
          onChange={handleChange}
          placeholder="URL" 
        />
        <button className={buttonStyle.tealButton}>Send!</button>
      </div>
      <section>
        <RadioButtonGroup name="method" onChange={handleChange} >
          {radioButtons}
        </RadioButtonGroup>
      </section>
      <textarea
        type="text"
        name="body"
        value={body}
        onChange={handleChange}
        placeholder="Raw JSON Body" 
      />
    </form>
  );
};

export default Form;
