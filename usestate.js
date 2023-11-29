
import React, { useState } from "react";

function SignIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleRed = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <div>
      <h2>{isLoggedIn ? "Hello user" : "Sign in required"}</h2>
      <button onClick={handleRed}>
        {isLoggedIn ? "SignOut" : "SignIn"}
      </button>
    </div>
  );
}

export default SignIn;
