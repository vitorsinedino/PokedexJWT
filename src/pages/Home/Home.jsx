import React, { useContext } from 'react';
import StoreContext from 'components/Store/Context';
import '/home/sara/React_Studies/React-Projects/Pokedex/react-login/src/components/style/style.css';
import ApiCall from '/home/sara/React_Studies/React-Projects/Pokedex/react-login/src/components/Api/ApiCall.js'
import { Container } from '@material-ui/core';

const PagesHome = () => {
  const { setToken } = useContext(StoreContext);
  return (
    <div className="pages-home">
      <Container maxWidth='sm'>
        <div id ='cards'>
          <h1>Pokemon Selector</h1>
          <ApiCall ></ApiCall>
        </div>
        
      </Container>
      
      <br />
      <button type="button" onClick={() => setToken(null)}>
        Sair
      </button>
    </div>
  );
};

export default PagesHome;
