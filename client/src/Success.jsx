/* eslint-disable no-unused-vars */
import React from "react";

function Success() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🎉 Payment Successful!</h1>
      <p>Thank you for your purchase.</p>

      <button
        onClick={() => window.location.href = "/"}
        style={{
          padding: "10px 20px",
          background: "green",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        Go Back Home
      </button>
    </div>
  );
}

export default Success;