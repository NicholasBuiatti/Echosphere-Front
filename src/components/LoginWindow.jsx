import React from "react";

const LoginWindow = () => {
  return (
    <div className="w-4/12 border shadow-lg rounded-lg bg-white mx-auto my-10 p-5">
      <h2 className=" text-center text-2xl font-semibold">
        Accedi a EchoSphere
      </h2>
      <hr className="my-2" />
      <form action="" className="flex flex-col items-center">
        <input
          className="border-1 bg-slate-200 rounded-lg focus:border-blue-600 w-full my-3 h-10 px-2"
          type="text"
          placeholder="E-mail o numero di telefono"
          required
        />
        <input
          className="border-1 bg-slate-200 rounded-lg focus:border-blue-600 w-full my-3 h-10 px-2"
          type="password"
          placeholder="•••••••••"
          required
        />
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg w-full px-5 py-2.5 my-2"
        >
          Accedi
        </button>
      </form>
      <div className="text-center my-2">
        <a href="#" className="text-sm text-blue-600">
          Non ricordi più come accedere all'account?
        </a>
      </div>
      <hr className="my-3" />
      <div className="text-center">
        <button
          type="submit"
          className="text-white bg-green-700 hover:bg-green-800 focus:ring-green-300 rounded-lg text-lg w-auto px-5 py-2.5 mb-2"
        >
          Crea nuovo account
        </button>
      </div>
    </div>
  );
};

export default LoginWindow;
