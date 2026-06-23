/* eslint-disable react-hooks/immutability */
/* eslint-disable no-unused-vars */
import React from "react";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      image: "https://picsum.photos/300"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2499,
      image: "https://picsum.photos/300"
    },
    {
      id: 3,
      name: "Gaming Mouse",
      price: 799,
      image: "https://picsum.photos/300"
    }
  ];

  const handleBuyNow = async (product) => {
    try {
      const response = await fetch(
        "https://n8n.srv1771261.hstgr.cloud/webhook-test/buy-now",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        }
      );

      const data = await response.json();

      if (data.checkoutUrl) {
        window.location.href = data.checkoutUrl;
      } else {
        alert("Checkout URL not found");
      }

    } catch (error) {
      console.error("Error calling n8n:", error);
      alert("Failed to connect to n8n");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🛍️ Products</h1>

      <div style={{ display: "flex", gap: "20px" }}>
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "10px"
            }}
          >
            <img src={item.image} width="150" />

            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button
              onClick={() => handleBuyNow(item)}
              style={{
                padding: "10px",
                background: "green",
                color: "white",
                border: "none",
                cursor: "pointer"
              }}
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;