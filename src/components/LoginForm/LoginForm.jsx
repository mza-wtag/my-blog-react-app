import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        const loggedUser = JSON.parse(localStorage.getItem("user"));
        if (
            input.userName === loggedUser.userName &&
            input.password === loggedUser.password
        ) {
            localStorage.setItem("loggedUser", true);
            navigate("/");
        } else {
            alert("Wrong Username or Password");
        }
    };

    return (
        <>
            <section>
                <h1>Login Form</h1>
                <form onSubmit={handleLoginSubmit}>
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
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            value={input.password}
                            name="password"
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </section>
        </>
    );
};

export default LoginForm;
