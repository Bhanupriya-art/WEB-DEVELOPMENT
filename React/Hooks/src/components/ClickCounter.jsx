import React, { useState } from "react";
import "../App.css";
function ClickCounter() {
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1);
    };
    return (
        <div className="counter-box">
            <h2>🌸 Click Counter 🌸</h2>
            <p>You clicked <strong>{count}</strong> times!</p>
            <button onClick={handleClick}>Click Me</button>
        </div>
    );
}
export default ClickCounter;
