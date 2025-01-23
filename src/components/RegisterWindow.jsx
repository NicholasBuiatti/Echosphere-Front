import { useNavigate } from "react-router-dom";

const RegisterWindow = () => {
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    navigate("/login");
  };

  return (
    <div className="bg-white w-4/12 rounded-xl shadow-lg">
      <h1 className="text-xl text-center p-3">REGISTRA IL TUO PROFILO</h1>
      <p className="text-center text-sm text-green-600">è veloce e semplice</p>
      <hr className="my-2" />
      <form action="" className="text-center">
        <div className="flex justify-between w-11/12 mx-auto my-5">
          <input
            type="text"
            id="first_name"
            className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="Nome*"
            required
          />
          <input
            type="text"
            id="first_name"
            className="bg-slate-200  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="Cognome*"
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="email"
            id="email"
            className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-11/12 p-2.5 mb-5"
            placeholder="E-mail o numero di telefono*"
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            id="password"
            className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-11/12 p-2.5"
            placeholder="Password*"
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="password"
            id="confirm_password"
            className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-11/12 p-2.5"
            placeholder="Conferma password*"
            required
          />
        </div>
        <div className="flex items-center justify-center mb-2">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-blue-300"
              required
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-gray-900"
          >
            Accetto i{" "}
            <a href="#" className="text-blue-600 hover:underline">
              termini e condizioni
            </a>
            .
          </label>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-lg px-5 py-2.5 my-2"
        >
          Registrati
        </button>
      </form>
      <hr className="my-3" />
      <div className="text-center mb-4">
        <a
          onClick={handleLoginRedirect}
          className="text-blue-700 cursor-pointer"
        >
          Hai già un account?
        </a>
      </div>
    </div>
  );
};

export default RegisterWindow;
