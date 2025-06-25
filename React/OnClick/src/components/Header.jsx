import React from "react";

function Header({ name, todos, onGreet }) {
    const onButtonClick = () => {
        console.log("You have clicked the button");
    };

    const onMouseEnter = () => {
        console.log("Mouse has entered the area of button");
    };

    return (
        <div>
            <h2>Hello, {name}!</h2>
            <ul>
                {todos.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            <button
                type="button"
                onClick={onButtonClick}
                onMouseEnter={onMouseEnter}
            >
                Click me
            </button>

            <br /><br />

            <button onClick={onGreet}>Call Parent Function</button>
        </div>
    );
}
export default Header;
