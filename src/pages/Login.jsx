import React from "react";
import LoginWindow from "../components/LoginWindow";

const Login = () => {
  return (
    <div className="bg-customBg py-16 flex items-center">
      <div className="w-6/12 my-10">
        <h1 className="font-harabara text-green-500 font-bold text-7xl ml-[30%]">
          echoSphere
        </h1>
        <p className="text-xl mt-4 ml-[30%]">
          EchoSphere ti aiuta a connetterti e rimanere in contatto con le
          persone della tua vita.
        </p>
      </div>

      <LoginWindow />
    </div>
  );
};

export default Login;
