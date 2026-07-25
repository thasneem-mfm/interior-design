import React, { useState } from 'react';
import'./Login.css'

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="auth-container">
      <div className="auth-form">
        <h2>{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
<form>
          {isSignUp && (
            <>
              <input type="text" placeholder="Username" required />
              <input type="email" placeholder="E-mail" required />
              <input type="password" placeholder="Password" required />
              <input type="password" placeholder="Confirm Password" required />
            </>
          )}
          {!isSignUp && (
            <>
              <input type="email" placeholder="E-mail" required />
              <input type="password" placeholder="Password" required />
            </>
          )}
          <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
        </form>
        <p>
          {isSignUp
            ? 'Already have an account? '
            : "Don't have an account? "}
          <span
            onClick={() => setIsSignUp(!isSignUp)}
            style={{ color: 'blue', cursor: 'pointer' }}
            >
            {isSignUp ? 'Sign in' : 'Sign up'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
