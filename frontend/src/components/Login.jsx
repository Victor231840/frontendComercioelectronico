import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../api/axiosConfig"; // Asegúrate de importar correctamente apiClient

const Login = () => {
  const [email, setEmail] = useState(""); // Estado para el email
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [error, setError] = useState(""); // Estado para los errores
  const navigate = useNavigate(); // Hook para la navegación

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevenir comportamiento por defecto del formulario
    setError(""); // Limpiar errores previos
    try {
      const response = await apiClient.post("/usuarios/iniciarsesion", {
        correo: email, // Usar el estado del email
        password, // Usar el estado de la contraseña
      });

      console.log("Inicio de sesión exitoso:", response.data);
      localStorage.setItem("token", response.data.token); // Guarda el token
      localStorage.setItem(
        "usuario",
        JSON.stringify({ nombre: response.data.nombre }) // Guardar el nombre del usuario
      );
      navigate("/productos"); // Redirige a la página de productos

    } catch (err) {
      if (err.response) {
        setError(err.response.data.mensaje || "Error al iniciar sesión");
      } else {
        setError("Error al conectar con el servidor");
      }
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Iniciar Sesión</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Actualiza el estado de email
          style={{ margin: "10px 0", padding: "10px", width: "80%" }}
        />
        <br />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de password
          style={{ margin: "10px 0", padding: "10px", width: "80%" }}
        />
        <br />
        <button type="submit" style={{ padding: "10px 20px", marginTop: "10px" }}>
          Iniciar Sesión
        </button>
      </form>
    </div>
  );
};

export default Login;