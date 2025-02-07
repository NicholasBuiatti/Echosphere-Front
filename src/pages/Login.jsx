import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import LoginWindow from "../components/LoginWindow";

import Swal from "sweetalert2";

const Login = () => {
  const [searchParams] = useSearchParams();
  const verified = searchParams.get("verified");

  //creazione dell'allert in caso ci sia nell'url la voce verified post conferma link dall'email
  useEffect(() => {
    // Controlla se il parametro `verified` è presente nell'URL e se è true
    if (verified === "true") {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Email verificata con successo!",
        text: "Ora puoi accedere al tuo account.",
        showConfirmButton: false,
        // timer: 4000,
      });
    } else if (verified === "false") {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Verifica fallita!",
        text: "Il link di verifica è scaduto o è già stato utilizzato. Riprova a richiedere il link.",
        showConfirmButton: true,
        // timer: 4000,
      });
    }
  }, [verified]);

  return (
    <div className="bg-emerald-100 py-16 flex items-center">
      <div className="w-6/12 my-10">
        <h1 className="font-harabara text-green-500 font-bold text-7xl ml-[30%]">
          echoSphere
        </h1>
        <p className="text-xl mt-4 ml-[30%]">
          Un mondo tutto tuo da condividere con chi vuoi.
        </p>
      </div>

      <LoginWindow />
    </div>
  );
};

export default Login;
