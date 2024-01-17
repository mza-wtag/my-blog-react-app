import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegistrationForm.scss";

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
        const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
        existingUsers.push(input);
        localStorage.setItem("users", JSON.stringify(existingUsers));
        navigate("/login");
    };

    return (
        <>
            <section className="registration-form">
                <h1 className="registration-form__title">Registration Form</h1>
                <form
                    onSubmit={handleRegisterSubmit}
                    className="registration-form__form"
                >
                    <div className="registration-form__field">
                        <label
                            htmlFor="userName"
                            className="registration-form__label"
                        >
                            User Name:
                        </label>
                        <input
                            type="text"
                            required
                            value={input.userName}
                            name="userName"
                            onChange={handleInputChange}
                            className="registration-form__input"
                        />
                    </div>
                    <div className="registration-form__field">
                        <label
                            htmlFor="firstName"
                            className="registration-form__label"
                        >
                            First Name:
                        </label>
                        <input
                            type="text"
                            required
                            value={input.firstName}
                            name="firstName"
                            onChange={handleInputChange}
                            className="registration-form__input"
                        />
                    </div>
                    <div className="registration-form__field">
                        <label
                            htmlFor="lastName"
                            className="registration-form__label"
                        >
                            Last Name:
                        </label>
                        <input
                            type="text"
                            required
                            value={input.lastName}
                            name="lastName"
                            onChange={handleInputChange}
                            className="registration-form__input"
                        />
                    </div>
                    <div className="registration-form__field">
                        <label
                            htmlFor="email"
                            className="registration-form__label"
                        >
                            Email:
                        </label>
                        <input
                            type="email"
                            required
                            value={input.email}
                            name="email"
                            onChange={handleInputChange}
                            className="registration-form__input"
                        />
                    </div>
                    <div className="registration-form__field">
                        <label
                            htmlFor="password"
                            className="registration-form__label"
                        >
                            Password:
                        </label>
                        <input
                            type="password"
                            required
                            value={input.password}
                            name="password"
                            onChange={handleInputChange}
                            className="registration-form__input"
                        />
                    </div>
                    <button type="submit" className="registration-form__button">
                        Signup
                    </button>
                </form>
            </section>
        </>
    );
};

export default RegistrationForm;
