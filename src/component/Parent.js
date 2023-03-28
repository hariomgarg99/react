import { Component } from "react";
import  Child from './Child';


class Parent extends Component {

    render() {
        return (
            <div>
                <button>
                    Greet Parent
                </button>
                <Child name="from parent"></Child>
            </div>
        )
    }
}

export default Parent