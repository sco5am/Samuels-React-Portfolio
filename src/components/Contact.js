import React, { useState } from 'react';
import '../App.css';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isRequired, setIsRequired] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleBlur = (event) => {
    if (event.target.value === '') {
      setIsRequired(true);
    } else {
      setIsRequired(false);
    }
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setForm({ ...form, email });
    setEmailError(validateEmail(email) ? '' : 'Invalid email address');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form.name !== '' && validateEmail(form.email)) {
      // submit form data here
      setSubmissionStatus('Form submitted successfully!');
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <div className='contact'>
      <h1 className='content is-medium'>Contact Me</h1>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type='text'
            onBlur={handleBlur}
            value={form.name}
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
            }}
          />
          {isRequired && (
            <span style={{ color: 'red' }}>This field is required</span>
          )}
        </label>
        <br></br>
        <label>
          Email:
          <input
            type='email'
            onBlur={handleBlur}
            value={form.email}
            onChange={handleEmailChange}
          />
          {isRequired && (
            <span style={{ color: 'red' }}>This field is required</span>
          )}
          {emailError && (
            <span style={{ color: 'red' }}>{emailError}</span>
          )}
        </label>
        <br></br>
        <label>
          Message:
          <input
            type='text'
            onBlur={handleBlur}
            value={form.message}
            onChange={(e) => {
              setForm({ ...form, message: e.target.value });
            }}
          />
          {isRequired && (
            <span style={{ color: 'red' }}>This field is required</span>
          )}
        </label>
        <br></br>
        <button type='submit'>Submit</button>
        {submissionStatus && <p>{submissionStatus}</p>}
      </form>
    </div>
  );
}
