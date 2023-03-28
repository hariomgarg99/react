import React, { useState } from "react";
import data from './data.json'

function SearchFilter() {

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.firstName.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
        console.log("filteredData" , filteredData);
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    return (
        <div>
            <div>
                <input type="text" placeholder="" value={wordEntered} onChange={handleFilter}
                />
            </div>
            {filteredData.length != 0 && (
                <div>
                    {filteredData.slice(0, 15).map((value, key) => {
                        return (
                                <p>{value.firstName} </p>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default SearchFilter