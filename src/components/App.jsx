import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header";
import Login from "./Login";
import Productos from "./productos";

const App = () => {
  return (
    <>
      <Header /> {/* Componente siempre visible */}
      <div className="container mx-auto p-4">
        <Routes>
          {/* Ruta de inicio */}
          <Route
            path="/"
            element={
              <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  Bienvenido a Mi Proyecto
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Explora nuestros productos y mucho más.
                </p>
                <a
                  href="/login"
                  className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                >
                  Iniciar Sesión
                </a>
              </div>
            }
          />
          {/* Ruta de login */}
          <Route path="/login" element={<Login />} />
          {/* Ruta de productos */}
          <Route path="/productos" element={<Productos />} />
        </Routes>
      </div>
    </>
  );
};

export default App;