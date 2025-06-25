import React, { useState } from "react";
import "../App.css";
function Counter() {
    const [count, setCount] = useState(0);
    const increase = () => setCount(count + 1);
    const decrease = () => setCount(count - 1);
    const reset = () => setCount(0);
    return (
        <div className="counter-box">
            <h2>🌟 Counter App 🌟</h2>
            <p>Current Count: <strong>{count}</strong></p>
            <div className="button-group">
                <button onClick={increase}>➕ Increase</button>
                <button onClick={decrease}>➖ Decrease</button>
                <button onClick={reset}>🔁 Reset</button>
            </div>
        </div>
    );
}
export default Counter;
