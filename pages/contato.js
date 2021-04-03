import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Input from '../components/form/Input';
import styled from 'styled-components';
import Head from 'next/head';

const Contato = () => {
  /* NEW: validation for inputs vvvv */
  const [fieldErrors, setFieldErrors] = useState({});
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });
  const validationRules = {
    name: (val) => val,
    email: (val) => val && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
    message: (val) => !!val,
  };
  const validate = () => {
    let errors = {};
    let hasErrors = false;
    for (let key of Object.keys(inputs)) {
      errors[key] = !validationRules[key](inputs[key]);
      hasErrors |= errors[key];
    }

    setFieldErrors((prev) => ({ ...prev, ...errors }));
    return !hasErrors;
  };
  const renderFieldError = (field) => {
    if (fieldErrors[field]) {
      return <p className='errorMsg'>Por favor insira um {field} válido.</p>;
    }
  };
  useEffect(() => {
    // Only perform interactive validation after submit
    if (Object.keys(fieldErrors).length > 0) {
      validate();
    }
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [inputs]); // eslint-disable-line react-hooks/exhaustive-deps
  /* End new validation ^^^^ */

  // Input Change Handling

  const handleOnChange = (event) => {
    event.persist();
    setInputs((prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  };

  // Server State Handling
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      setFieldErrors({});
      setInputs({
        name: '',
        email: '',
        message: '',
      });
    }
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
    setServerState({ submitting: true });
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xpzogbya',
      data: inputs,
    })
      .then((r) => {
        handleServerResponse(true, 'Mensagem enviada!');
      })
      .catch((r) => {
        handleServerResponse(false, r.response.data.error);
      });
  };
  return (
    <>
      <Head>
        <title>Contato - CalCalorias</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ContactMe id='contact'>
        <ContactTitle>Contato</ContactTitle>

        <ContactText>
          Em caso de dúvidas, sugestões e reclamações, entre em contato.
        </ContactText>

        <form onSubmit={handleOnSubmit} noValidate>
          <Input
            label='Nome'
            id='name'
            type='name'
            name='name'
            onChange={handleOnChange}
            value={inputs.name}
            className={fieldErrors.name ? 'error' : ''}
          />

          <Input
            label='Email'
            id='email'
            type='email'
            name='email'
            onChange={handleOnChange}
            value={inputs.email}
            className={fieldErrors.email ? 'error' : ''}
          />
          {renderFieldError('email')}
          <label htmlFor='message'>Mensagem</label>
          <textarea
            id='message'
            name='message'
            onChange={handleOnChange}
            value={inputs.message}
            className={fieldErrors.message ? 'error' : ''}
            cols='30'
            rows='10'
          ></textarea>
          {renderFieldError('message')}
          <button
            className='btn'
            type='submit'
            disabled={serverState.submitting}
          >
            Enviar
          </button>
          {serverState.status && (
            <h2 className={!serverState.status.ok ? 'errorMsg' : ''}>
              {serverState.status.msg}
            </h2>
          )}
        </form>
      </ContactMe>
    </>
  );
};

const ContactMe = styled.div`
  line-height: 1.7rem;
  color: #000;
  padding: 30px;
  text-align: center;

  h2 {
    margin-bottom: 20px;
  }

  input,
  textarea {
    text-align: left;
    display: block;
    margin-right: auto;
    margin-left: auto;
    width: 40%;
    margin-bottom: 20px;
    font-size: 1.1rem;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid #ccc;
    outline: none;
  }

  textarea {
    columns: 30;
  }

  input:hover,
  textarea:hover {
    border: 1px solid #000;
  }

  label {
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    text-align: left;

    @media (max-width: 900px) {
      text-align: left !important;
      font-size: 1rem;
    }
  }

  .btn {
    transition: all 1s ease-in-out;
    border: none;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    font-size: 1.3rem;
    text-align: center;
    background-color: #141738;
    color: #f6b011;
    width: 41.5%;
  }

  .btn:hover {
    transition: all 1s ease-in-out;
    background-color: #f6b011;
    color: #141738;
  }

  @media (max-width: 900px) {
    max-width: 100%;

    textarea {
      max-width: 90%;
    }
  }
`;

const ContactTitle = styled.h2`
  margin-top: 25px;
  border-bottom: 1px solid #ccc;
  font-size: 2rem;
  text-align: center;
  margin-bottom: 20px;
`;

const ContactText = styled.address`
  width: 50%;
  margin: auto;
  font-size: 1.1rem;
`;

export default Contato;
