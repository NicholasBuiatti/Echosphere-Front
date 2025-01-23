import RegisterWindow from "./RegisterWindow";
// import RegisterWindow from "./RegisterWindow";
import { useState } from "react";

const NavBar = () => {
  const [isOpenRegisterWindow, setIsOpenRegisterWindow] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center bg-white">
        <div className="flex items-center px-1 py-2">
          <img src="/echosphere-logo.png" alt="Logo-Network" className="h-16" />
          <h1 className="text-3xl ml-2">EchoSphere</h1>
        </div>

        <div className="flex justify-between font-sans me-10">
          <p
            className="px-2 hover:text-lg hover:font-bold hover:underline hover:text-cyan-700 cursor-pointer"
            onClick={() => setIsOpenRegisterWindow((prev) => !prev)}
          >
            Register
          </p>
          <a
            href=""
            className="px-2 hover:text-lg hover:font-bold hover:underline hover:text-cyan-700 cursor-pointer"
          >
            Login
          </a>
        </div>
      </div>
      {isOpenRegisterWindow && (
        <RegisterWindow closeWindow={setIsOpenRegisterWindow} />
      )}
    </>
  );
};

export default NavBar;
