/* eslint-disable no-unused-vars */
import React from "react";

function Cancel() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>❌ Payment Cancelled</h1>
      <p>Your transaction was not completed.</p>

      <button
        onClick={() => window.location.href = "/"}
        style={{
          padding: "10px 20px",
          background: "red",
          color: "white",
          border: "none",
          cursor: "pointer",
          marginTop: "20px"
        }}
      >
        Try Again
      </button>
    </div>
  );
}

export default Cancel;