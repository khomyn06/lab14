import { useState, useEffect } from "react";

const ColorBlock = () => {
  const [color, setColor] = useState("red");

  const toggleColor = () => {
    setColor(prevColor => (prevColor === "red" ? "brown" : "red"));
  };

  useEffect(() => {
    console.log(`Current color: ${color}`);
  }, [color]);

  return (
    <div style={{
      width: "250px",
      height: "250px",
      backgroundColor: color,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "15px",
      margin: "30px auto",
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)"
    }}>
      <button 
        onClick={toggleColor} 
        style={{ 
          padding: "12px 20px", 
          cursor: "pointer", 
          border: "none", 
          borderRadius: "8px", 
          backgroundColor: "white", 
          color: "black", 
          fontSize: "16px", 
          fontWeight: "bold", 
          transition: "0.3s"
        }}>
        Фарбувати
      </button>
    </div>
  );
};

export default ColorBlock;