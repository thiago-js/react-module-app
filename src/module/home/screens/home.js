import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
   <div>
      <h1> Pagina home</h1>
      <Link to={`/customer/lists`}>lists</Link>
      <br />
      <Link to={`/customer/sign-up`}>sign-up</Link>
   </div>
)

export default Home