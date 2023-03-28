import { Component, useState } from "react";

function ContactCard({ results }) {

    const [showAge, setShowAge] = useState(false)
    return (results.map((contact) => {
        // const { title, first, last } = contact.name;
        // const { name} = contact.id;
        // const { age} = contact.dob;
        // console.log(contact);

        <tr>
            <td key="1"></td>
            <td>adad</td>
            <td>asdsa</td>
            <td>awqe</td>
            {showAge ? <td>3</td> : null}
            <td><button onClick={() => setShowAge(!showAge)}>Show Age</button></td>
        </tr>
    })


    )
}

export default ContactCard



// const UserData = ({users}) => {
//     return (
//         <>
//             {
//                 users.map((curUser) => {
//                     const {id, name, email} = curUser;
//                     const {street, city, zipcode} = curUser.address;

//                     return (
//                         <tr key={id}>
//                             <td>{id}</td>
//                             <td>{name}</td>
//                             <td>{email}</td>
//                             <td>{street}, {city}, {" "}, {zipcode}</td>
//                         </tr>
//                     )
//                 })

//             }
//         </>
//     )
// }
// export default UserData;