import React from "react";

const Footer = () => {
  return (
    <div className="flex justify-between mx-auto w-10/12">
      <div className="w-3/12 text-center">
        <h2 className="text-sm">
          <i className="fa-solid fa-rocket"></i> Scopri di più:
        </h2>
        <ul className="text-xs text-blue-600 underline">
          <li>
            <a href="#">Chi siamo</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Contattaci</a>
          </li>
        </ul>
      </div>
      <div className="w-3/12 text-center">
        <h2 className="text-sm">Per gli amanti delle regole:</h2>
        <ul className="text-xs text-blue-600 underline">
          <li>
            <a href="#">Termini e condizioni</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
          <li>
            <a href="#">Cookie Policy</a>
          </li>
        </ul>
      </div>
      <div className="w-4/12 text-center">
        <p className="mb-2 text-sm">
          Scarica l'app su <i className="fa-solid fa-arrow-down"></i>
        </p>
        <div>
          <a
            href="#"
            className="p-2 mx-2 rounded border-2 bg-green-500 hover:bg-green-600 border-green-700"
          >
            <i className="me-2 fa-brands fa-app-store"></i>App Store
          </a>
          <a
            href="#"
            className="p-2 mx-2 rounded border-2 bg-green-500 hover:bg-green-600 border-green-700"
          >
            <i className="me-2 fa-brands fa-google-play"></i>Google Play
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
