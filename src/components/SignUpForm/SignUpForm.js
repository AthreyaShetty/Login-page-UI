import React from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="cover">
      <h3>Create New Account</h3>
      <h1 className="company-name">ITL-PIMS</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
      </form>
        <div className="signUp-btn">Sign Up</div>
      <h5 className="disclaimer">
        Disclaimer:This program (ITL-PIMS) is for testing and evaluation purpose
        only. Not all features may be fully functional or new ones may be added.
      </h5>
    </div>
  );
};

export default SignUpForm;
