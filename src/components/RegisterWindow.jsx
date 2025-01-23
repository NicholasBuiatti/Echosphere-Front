import PropTypes from "prop-types";

const RegisterWindow = ({ closeWindow }) => {
  return (
    <div className="font-sans absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-4/12 aspect-square rounded-xl">
      <h1 className="text-4xl text-center p-3 font-bold">
        REGISTRA IL TUO PROFILO
      </h1>
      <hr />
      <form action="" className="text-center">
        <div className="mb-2">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium"
          >
            Nome*
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-7/12 p-2.5 mx-auto"
            placeholder="John"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="first_name"
            className="block mb-2 text-sm font-medium"
          >
            Cognome*
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-7/12 p-2.5 mx-auto"
            placeholder="Doe"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Indirizzo Email*
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-7/12 p-2.5 mx-auto"
            placeholder="john.doe@company.com"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Password*
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-7/12 p-2.5 mx-auto"
            placeholder="•••••••••"
            required
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="confirm_password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Conferma password*
          </label>
          <input
            type="password"
            id="confirm_password"
            className="bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-7/12 p-2.5 mx-auto"
            placeholder="•••••••••"
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
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-2 m-2"
        >
          Invia
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center mb-2"
          onClick={() => closeWindow(false)}
        >
          Annulla
        </button>
      </form>
    </div>
  );
};

RegisterWindow.propTypes = {
  closeWindow: PropTypes.func.isRequired,
};

export default RegisterWindow;
