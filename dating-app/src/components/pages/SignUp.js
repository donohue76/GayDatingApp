// src/components/pages/SignUp.js

import React from 'react';

const SignUp = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and user registration
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" required />
      <input type="email" placeholder="Email" required />
      <input type="password" placeholder="Password" required />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;