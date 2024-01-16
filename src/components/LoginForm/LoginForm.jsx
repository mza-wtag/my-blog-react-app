import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForn.scss";

const LoginForm = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        userName: "",
        password: "",
    });

    const handleInputChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const registeredUsers = JSON.parse(localStorage.getItem("users"));

        const user = registeredUsers.find(
            (user) => user.userName === input.userName
        );

        if (
            input.userName === user?.userName &&
            input.password === user?.password
        ) {
            localStorage.setItem("loggedInUser", JSON.stringify(user));
            navigate("/");
        } else {
            alert("Wrong Username or Password");
        }
    };

    return (
        <>
            <section className="login-form">
                <h1 className="login-form__title">Login Form</h1>
                <form className="login-form__form" onSubmit={handleLoginSubmit}>
                    <div className="login-form__field">
                        <label className="login-form__label" htmlFor="userName">
                            User Name:
                        </label>
                        <input
                            className="login-form__input"
                            type="text"
                            value={input.userName}
                            name="userName"
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="login-form__field">
                        <label className="login-form__label" htmlFor="password">
                            Password:
                        </label>
                        <input
                            className="login-form__input"
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button className="login-form__button" type="submit">
                        Login
                    </button>
                </form>
            </section>
        </>
    );
};

export default LoginForm;
