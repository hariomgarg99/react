import { Component } from "react";

class Counter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
    }
    incrementCount() {
        this.setState({
           count : this.state.count + 1
        })
        console.log(this.state.count);
    }

    decrementCount() {
        this.setState({
           count : this.state.count - 1 
        })
        console.log(this.state.count);
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={() => this.incrementCount()}>+</button>
                <button onClick={() => this.decrementCount()}>-</button>
            </div>
        )
    }
}
export default Counter