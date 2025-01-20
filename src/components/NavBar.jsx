import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center bg-white">
      <div className="flex items-center px-1 py-2">
        <img src="/echosphere-logo-1.png" alt="Logo-Network" className="h-16" />
        <h1 className="text-3xl ml-2">EchoSphere</h1>
      </div>

      <div className="flex justify-between font-sans me-10">
        <a
          href=""
          className="mx-2 hover:text-lg hover:font-bold hover:underline hover:text-cyan-700"
        >
          Register
        </a>
        <a
          href=""
          className="mx-2 hover:text-lg hover:font-bold hover:underline hover:text-cyan-700"
        >
          Login
        </a>
      </div>
    </div>
  );
};

export default NavBar;
