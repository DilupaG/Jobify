import React from 'react'
import main from '../assets/images/main.svg';
// import styled from 'styled-components';
import Wrapper from '../assets/wrappers/Testing'; 
import {Logo} from '../components'
import {Link} from 'react-router-dom'


const Landing = () => {
  return (
    <Wrapper>
      <nav>
          <Logo/>
      </nav>
      <div className="container page">
          <div className="info">
              <h1>
                  job <span>Tracking</span> app
              </h1>
              <p>I'm baby pabst shaman la croix tumblr aesthetic pug. Next level palo santo pug tote bag lo-fi meggings VHS church-key affogato craft beer forage helvetica chartreuse bushwick. Coloring book waistcoat stumptown</p>
              <Link to='/register' className="btn btn-hero">Login/Register</Link>
          </div>
          <img src={main} alt="job hunt" className='img main-img' />
      </div>
    </Wrapper>
  )
}


/* create componenet call Wrapper with our custom css. using Styled-Component package
const Wrapper = styled.main`

    nav{
        width: var(--fluid-width);
        max-width: var(--max-width);
        margin: 0 auto;
        height: var(--nav-height);
        display:flex;
        align-items:center;
    }
    .page{
        min-width: calc(100vh - var(--nav-height));
        display:grid;
        align-items: center;
        margin-top: -3rem;
    }
    h1{
        font-weight: 700;
        span{
            color: var(--primary-500);
        }
    }
    p{
        color: var(--grey-600);
    }
    .main-img{
        display: none;
    }
    @media (min-width:992px){
        .page{
            grid-template-columns: 1fr 1fr;
            column-gap: 3rem;
        }
        .main-img{
            display: block;
        }
    }

` */
export default Landing
 