import React, { useState } from "react";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function login() {
    let items = { email, password };
    let result = await axios
      .post("http://localhost:5555/api/auth", {
        email: email,
        password: password,
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });

    if (result.data.accsess === true) {
      localStorage.setItem("user-tokenxx", JSON.stringify(result.data.token));
      window.location.href = "/Projects";
    } else {
      alert("Wrong Username Or Password");
    }
  }
  return (
    <div className="h-screen w-screen flex items-center justify-center ">
      <div className=" bg-amber-400 px-12 py-32 rounded-3xl flex  flex-col items-center shadow-2xl">
        <h1 className="mb-10 text-3xl">HomeDreams</h1>

        <input
          type="text"
          className="border-b-2 border-black mb-7 outline-none  bg-transparent pl-6  text-black"
          placeholder="Email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <input
          type="password"
          className="border-b-2 border-black mb-10 outline-none bg-transparent pl-6  text-black"
          placeholder="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <button
          onClick={login}
          className=" mx-auto px-7 py-2 rounded-lg border-2 border-black cursor-pointer"
        >
          submit
        </button>
      </div>
    </div>
  );
}

export default Login;
