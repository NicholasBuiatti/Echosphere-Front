import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterWindow = () => {
  const navigate = useNavigate();

  //redirect alla schermata di login
  const handleLoginRedirect = () => {
    navigate("/login");
  };

  //creazione oggetto per l'invio dei dati
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    emailOrPhone: "",
    password: "",
    //nome preimpostato per la lettura sul laravel con confirmed
    password_confirmation: "",
  });

  //creazione variabile per la verifica della password lato utente
  const [passwordMatch, setPasswordMatch] = useState(false);

  //cambio dinamico del pacchetto form
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      // Confronta password e password_confirmation in tempo reale
      setPasswordMatch(
        updatedData.password === updatedData.password_confirmation
      );

      return updatedData;
    });
  };

  //invio al controllo del pacchetto
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, surname, emailOrPhone, password, password_confirmation } =
      formData;

    if (!passwordMatch) {
      alert("Le password non corrispondono!");
      return;
    }

    const data = { name, surname, password, password_confirmation };

    if (emailOrPhone.includes("@")) {
      data.email = emailOrPhone;
    } else {
      data.number_phone = emailOrPhone;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/register",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      alert("registrazione avvenuta con successo");
    } catch (error) {
      alert(error.response?.data?.message || "Errore nella registrazione");
    }
  };

  return (
    <div className="bg-white w-4/12 rounded-xl shadow-lg">
      <h1 className="text-xl text-center p-3">REGISTRA IL TUO PROFILO</h1>
      <p className="text-center text-sm text-green-600">è veloce e semplice</p>
      <hr className="my-2" />
      <form action="" onSubmit={handleSubmit} className="text-center">
        <div className="flex justify-between w-11/12 mx-auto my-5">
          <input
            name="name"
            type="text"
            onChange={handleChange}
            id="first_name"
            className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="Nome*"
            required
          />
          <input
            name="surname"
            type="text"
            onChange={handleChange}
            id="first_name"
            className="bg-slate-200  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5"
            placeholder="Cognome*"
            required
          />
        </div>
        <div className="mb-2">
          <input
            name="emailOrPhone"
            type="string"
            onChange={handleChange}
            id="email"
            className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-11/12 p-2.5 mb-5"
            placeholder="E-mail o numero di telefono*"
            required
          />
        </div>
        <div className="mb-2">
          <input
            name="password"
            type="text"
            onChange={handleChange}
            id="password"
            className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-11/12 p-2.5"
            placeholder="Password*"
            required
          />
        </div>
        <div className="mb-2">
          <input
            name="password_confirmation"
            type="text"
            onChange={handleChange}
            id="password_confirmation"
            className="bg-slate-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-11/12 p-2.5"
            placeholder="Conferma password*"
            required
          />
        </div>
        {passwordMatch && (
          <div className="text-green-500 text-sm mt-2">
            <span className="font-bold">✔</span> Le password corrispondono
          </div>
        )}

        {/* Puoi anche aggiungere un messaggio di errore */}
        {!passwordMatch && formData.password_confirmation && (
          <div className="text-red-500 text-sm mt-2">
            Le password non corrispondono
          </div>
        )}
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
