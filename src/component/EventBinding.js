import { Component } from "react";

function EventBinding() {
    function incrementCount() {
        console.log("clicked");
    }
    return (
        <div>
            <button onClick={incrementCount}>increment</button>
        </div>
    )
}
export default EventBinding