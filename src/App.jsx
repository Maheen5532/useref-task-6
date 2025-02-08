import { useRef, useState } from "react";
import "./App.css"; // Import external CSS

export default function PersistentCounter() {
  const counterRef = useRef(0); // Stores counter persistently without re-renders
  const [displayValue, setDisplayValue] = useState(0); // State for UI update

  const handleIncrement = () => {
    counterRef.current += 1; // Updates ref value
    setDisplayValue(counterRef.current); // Updates displayed value
  };

  return (
   <div className="main-container">
     <div className="container">
      <h2>Persistent Counter</h2>
      <p className="counter">{displayValue}</p>
      <button className="button" onClick={handleIncrement}>
        Increment Counter
      </button>
    </div>
   </div>
  );
}
