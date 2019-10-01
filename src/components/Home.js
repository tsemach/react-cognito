import React, { Fragment } from 'react';
import Hero from './Hero';
import HomeContent from './HomeContent';

export default function Home(props) {
  return (
    <Fragment>
      {/* <Hero /> */}
      <br></br>
      <div className="box cta">
        <p className="has-text-centered">
          This React application demostrate the use of AWS Cognito, user the Regsiter, Login, Logout, Forgot password and Change password to test it.
        </p>
      </div>
      <HomeContent {...props}/>
    </Fragment>
  )
}
