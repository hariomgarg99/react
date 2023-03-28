import React, { useState } from "react";
import "../App.css";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";

// const schema = yup.object().shape({
//   firstName: yup.string().required("First Name should be required please"),
//   lastName: yup.string().required(),
//   email: yup.string().email().required(),
//   age: yup.number().positive().integer().required(),
//   password: yup.string().min(4).max(15).required(),
//   confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
// });

function FormValidation() {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [submitted, setSubmitted] = useState(false)

    const [validated, setValidated] = useState(false)

    //   const { register, handleSubmit, errors } = useForm({
    //     resolver: yupResolver(schema),
    //   });

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
        if(values.firstName && values.lastName && values.email && values.password && values.confirmPassword){
            setValidated(true)
        }

    }

    const handleFirstNameInputChange = (event) => {
        setValues({ ...values, firstName: event.target.value })
    }

    const handleLastNameInputChange = (event) => {
        setValues({ ...values, lastName: event.target.value })
    }

    const handleEmailInputChange = (event) => {
        setValues({ ...values, email: event.target.value })
    }

    const handlePasswordInputChange = (event) => {
        setValues({ ...values, password: event.target.value })
    }

    const handleCPasswordInputChange = (event) => {
        setValues({ ...values, confirmPassword: event.target.value })
    }


    return (
        <div>
            <div >Sign Up</div>
            <div>
                <form onSubmit={handleSubmit}>
                    <p>{submitted && validated ? "Successfully Submitted form ! Thanks you" : null}</p>
                    <input
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        placeholder="First Name"
                        onChange={handleFirstNameInputChange}
                    />
                    {submitted && !values.firstName ? <span>Please Enter first Name </span> : null}

                    <input
                        type="text"
                        value={values.lastName}
                        name="lastName"
                        placeholder="Last Name"
                        onChange={handleLastNameInputChange}
                    />
                    {submitted && !values.lastName ? <span>Please Enter last Name </span> : null}
                    <input
                        type="text"
                        name="email"
                        value={values.email}
                        placeholder="Email"
                        onChange={handleEmailInputChange}
                    />

                    {submitted && !values.email ? <span>Please Enter email</span> : null}
                    <input
                        type="password"
                        name="password"
                        value={values.password}
                        placeholder="Password"
                        onChange={handlePasswordInputChange}
                    />
                    {submitted && !values.password ? <span>Please Enter password </span> : null}
                    <input
                        type="password"
                        name="confirmPassword"
                        value={values.confirmPassword}
                        placeholder="Confirm Password"
                        onChange={handleCPasswordInputChange}
                    />
                    {submitted && !values.confirmPassword ? <span>Please Enter confirm password </span> : null}
                    <button type="submit"> Register </button>
                </form>
            </div>
        </div>
    );
}

export default FormValidation;