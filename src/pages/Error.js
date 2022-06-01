import React from 'react';
import {Link} from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/images/not-found.svg';

const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt="Not found!" />
        <h1>Ohh!page not found</h1>
        <p>We can't seem to find the page you're looking for</p>
        <Link to='/'>back home</Link>
      </div>
    </Wrapper>
  )
}

export default Error
