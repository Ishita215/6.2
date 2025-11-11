import React, { useState } from "react";

function LoginForm() {
  // Step 1: Create state variables for username, password, and error message
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Step 2: Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError("Please enter both username and password.");
    } else {
      console.log("Username:", username);
      console.log("Password:", password);
      setError("");
    }
  };

  // Step 3: Return JSX for UI
  return (
    <div
      style={{
        width: "300px",
        margin: "100px auto",
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        textAlign: "center",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ fontWeight: "bold", marginBottom: "20px" }}>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            width: "90%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "90%",
            padding: "8px",
            marginBottom: "10px",
            borderRadius: "4px",
            border: "1px solid #ccc",
          }}
        />
        <br />
        {error && (
          <p style={{ color: "red", fontSize: "14px", marginBottom: "10px" }}>
            {error}
          </p>
        )}
        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
