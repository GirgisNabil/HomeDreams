import react, { useEffect } from "react";

import React from "react";

function Auth() {
  useEffect(() => {
    const token = localStorage.getItem("user-tokenxx");
    if (!token) {
      localStorage.removeItem("user-tokenxx");
      window.location.href = "/Login";
    }
  }, []);
}

export default Auth;
