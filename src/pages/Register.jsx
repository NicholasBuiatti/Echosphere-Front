import RegisterWindow from "../components/RegisterWindow";

const Register = () => {
  return (
    <div className="bg-emerald-100 py-10 flex flex-col items-center">
      <h1 className="font-harabara text-green-500 font-bold text-7xl mb-4">
        echoSphere
      </h1>

      <RegisterWindow />
    </div>
  );
};

export default Register;
