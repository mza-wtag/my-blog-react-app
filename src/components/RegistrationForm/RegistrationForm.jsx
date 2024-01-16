import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
    const navigate = useNavigate();

    const [input, setInput] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("user", JSON.stringify(input));
        navigate("/login");
    };

    return (
        <>
            <section>
                <h1>Registration Form</h1>
                <form onSubmit={handleRegisterSubmit}>
                    <div>
                        <label htmlFor="userName">User Name:</label>
                        <input
                            type="text"
                            value={input.userName}
                            name="userName"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            value={input.firstName}
                            name="firstName"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            value={input.lastName}
                            name="lastName"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            required
                            value={input.email}
                            name="email"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Register</button>
                </form>
            </section>
        </>
    );
};

export default RegistrationForm;
