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
    email: "",
    password: "",
    //nome preimpostato per la lettura sul laravel con confirmed
    password_confirmation: "",
  });

  // Stato per gestire i messaggi di errore
  const [errors, setErrors] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    password_confirmation: "",
    passwordNoMatch: "",
  });

  //creazione variabile per la verifica della password lato utente
  const [passwordMatch, setPasswordMatch] = useState(false);
  const [passwordStrong, setPasswordStrong] = useState(0);

  //cambio dinamico del pacchetto form
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };

      // Confronta password e password_confirmation in tempo reale
      if (
        updatedData.password === updatedData.password_confirmation &&
        updatedData.password !== "" &&
        updatedData.password_confirmation !== ""
      ) {
        setPasswordMatch(true);
      } else {
        setPasswordMatch(false);
      }
      if (name === "password") {
        checkPasswordStrength(value);
      }

      return updatedData;
    });
  };

  //controllo forza password
  const checkPasswordStrength = (password) => {
    let strength = 0;

    if (password.length >= 8) strength++; // Lunghezza minima di 8 caratteri
    if (/[A-Z]/.test(password)) strength++; // Contiene almeno una maiuscola
    if (/\d/.test(password)) strength++; // Contiene almeno un numero
    if (/[^A-Za-z0-9]/.test(password)) strength++; // Contiene almeno un carattere speciale

    setPasswordStrong(strength);
  };

  //invio al controllo del pacchetto
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, surname, email, password, password_confirmation } = formData;

    // Validazione: controlla se i campi sono vuoti
    let formErrors = {};

    if (!formData.name.trim()) {
      formErrors.name = "Il nome è obbligatorio";
    }

    if (!formData.surname.trim()) {
      formErrors.surname = "Il cognome è obbligatorio";
    }

    if (!formData.email.trim()) {
      formErrors.email = "L'email è obbligatori";
    }

    if (!formData.password.trim()) {
      formErrors.password = "La password è obbligatoria";
    } else {
      if (!/^(?=.*[A-Z])(?=.*\d).+$/.test(formData.password)) {
        formErrors.password =
          "La password deve contenere almeno una lettera maiuscola e un numero";
      }
    }

    if (!formData.password_confirmation.trim()) {
      formErrors.password_confirmation = "Devi confermare la password";
    }

    //match per le password
    if (!passwordMatch) {
      formErrors.passwordNoMatch = "Le password non corrispondono";
    }

    const data = { name, surname, email, password, password_confirmation };

    // Se ci sono errori, aggiorna lo stato degli errori
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Se tutto è valido, esegui l'invio (esempio)
      const response = await axios.post(
        "http://localhost:8000/api/register",
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      alert("registrazione avvenuta con successo");

      setFormData({ name: "", email: "", password: "" });
    }
  };

  return (
    <div className="bg-white w-4/12 rounded-xl shadow-lg">
      <h1 className="text-xl text-center p-3">REGISTRA IL TUO PROFILO</h1>
      <p className="text-center text-sm text-green-600">è veloce e semplice</p>
      <hr className="my-2" />
      <form action="" onSubmit={handleSubmit} className="text-center">
        <div className="flex justify-between w-11/12 mx-auto my-5">
          <div>
            <input
              name="name"
              type="text"
              onChange={handleChange}
              id="first_name"
              className={`bg-slate-200 border ${
                errors.name ? "border-red-600" : ""
              } border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5`}
              placeholder="Nome*"
              required
            />
            {errors.name && (
              <p className="text-red-600 text-xs text-start ms-2">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <input
              name="surname"
              type="text"
              onChange={handleChange}
              id="first_name"
              className={`bg-slate-200 border ${
                errors.surname ? "border-red-600" : ""
              } border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5`}
              placeholder="Cognome*"
              required
            />
            {errors.surname && (
              <p className="text-red-600 text-xs text-start ms-2">
                {errors.surname}
              </p>
            )}
          </div>
        </div>
        <div className="mb-5">
          <input
            name="email"
            type="email"
            onChange={handleChange}
            id="email"
            className={`bg-slate-200 border border-gray-300 ${
              errors.email ? "border-red-600" : ""
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-11/12 p-2.5`}
            placeholder="E-mail*"
            required
          />
          {errors.email && (
            <p className="text-red-600 text-xs text-start ms-4">
              {errors.email}
            </p>
          )}
        </div>
        <div className="mb-5 relative">
          <input
            name="password"
            type="password"
            onChange={handleChange}
            id="password"
            className={`bg-slate-200 border border-gray-300 ${
              errors.password ? "border-red-600" : ""
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-11/12 p-2.5`}
            placeholder="Password*"
            required
            minLength={8}
          />
          {errors.password && (
            <p className="text-red-600 text-xs text-start ms-4">
              {errors.password}
            </p>
          )}
          {passwordStrong > 0 && (
            <p
              className={`text-xs px-1 rounded-full absolute mx-auto mt-2 bottom-1 right-7 ${
                passwordStrong === 1
                  ? "bg-orange-500"
                  : passwordStrong === 2
                  ? "bg-yellow-300"
                  : "bg-green-600"
              }`}
            >
              {" "}
              {passwordStrong === 1
                ? "debole"
                : passwordStrong === 2
                ? "media"
                : "forte"}
            </p>
          )}
        </div>
        <div className="mb-5">
          <input
            name="password_confirmation"
            type="text"
            onChange={handleChange}
            id="password_confirmation"
            className={`bg-slate-200 border border-gray-300 ${
              errors.password_confirmation ? "border-red-600" : ""
            } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-11/12 p-2.5`}
            placeholder="Conferma password*"
            required
          />
          {errors.password_confirmation && (
            <p className="text-red-600 text-xs text-start ms-4">
              {errors.password_confirmation}
            </p>
          )}
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
              minLength={8}
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
