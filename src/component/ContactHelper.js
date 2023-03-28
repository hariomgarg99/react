import { Component, useState, useEffect } from 'react'
import ContactCard from './ContactCard';
function ContactHelper() {

    const [results, setResults] = useState([])

    const dataHandler = () => {
        fetch("https://randomuser.me/api/?results=5")
            .then(results => results.json())
            .then(data => setResults(data.results))
    }
    
    useEffect(dataHandler, [])
     return(
        <>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    <th>Age</th>
                </tr>
            </thead>
                <tbody>
                <ContactCard results={results}></ContactCard>
                </tbody>
        </table>
            </>
        )

}
export default ContactHelper