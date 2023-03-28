import { Component } from "react";
import Data from './data.json'

class SearchFilter extends Component {
    constructor() {
        super()
        this.state = {
            items: Data
        }
        console.log(this.state.items)
    }

    filterData(search) {
        console.log(search);
        this.state.items.filter((search) => {
            if(search == '')
            return this.state.search = search 
            else if(search.firstName.toLowerCase().includes(search.toLowerCase))
            return this.state.search = search 
        }).map((val, index) => {
            return (<div><p>{val.firstName}</p></div> )
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <input type="text" placeholder="search.." onChange={data => {this.filterData(data.target.value)}}/>

                {/* {this.state.items.map((item, index) => {
                        return <p ref={item.ref} 
                                  key={index}
                                  contentEditable 
                                  suppressContentEditableWarning 
                                  onKeyUp={e => this.handleParagraphKeyUp(e, index, item)}></p>
                    })} */}
                {
                    this.state.items.map((val, index) => {
                        return (<div><p>{val.firstName}</p></div> )
                    })
                }
            </div>
        )
    }
}
export default SearchFilter