import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';
import ApiCallNotLogged from '/home/sara/React_Studies/React-Projects/Pokedex/react-login/src/components/Api/ApiCallNotLogged'


import './Login.css';
import { Paper, Grid, Container } from '@material-ui/core';

function initialState() {
  return { user: '', password: '' };
}

function login({ user, password }) {
  if (user === 'admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Usuário ou senha inválido' };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push('/');
    }

    setError(error);
    setValues(initialState);
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <Paper elevation = {3}>
            <Container maxWidth='sm'>
              <div className="user-login">
                <h1 className="user-login__title">Acessar o Sistema</h1>
                <form onSubmit={onSubmit}>
                  <div className="user-login__form-control">
                    <label htmlFor="user">Usuário</label>
                    <input
                      id="user"
                      type="text"
                      name="user"
                      onChange={onChange}
                      value={values.user}
                    />
                  </div>
                  <div className="user-login__form-control">
                    <label htmlFor="password">Senha</label>
                    <input
                      id="password"
                      type="password"
                      name="password"
                      onChange={onChange}
                      value={values.password}
                    />
                  </div>
                  {error && (
                    <div className="user-login__error">{error}</div>
                  )}
                  <UIButton
                    type="submit"
                    theme="contained-green"
                    className="user-login__submit-button"
                    rounded
                  >
                    Entrar
                  </UIButton>
                </form>
              </div>
            </Container>
        </Paper>
        </Grid>
        
        <Grid item xs={6}>
          <Paper elevation={3}>
            <div id='right'>
              <ApiCallNotLogged></ApiCallNotLogged>
            </div>
          </Paper>
        </Grid>
    </Grid>
    
  );
};

export default UserLogin;
