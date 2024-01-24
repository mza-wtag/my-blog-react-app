import React from "react";
import { Form, Field } from "react-final-form";
import { useNavigate, Link } from "react-router-dom";
import "./LoginForn.scss";
import { useDispatch } from "react-redux";
import { loginUser } from "../../actions/authActions";

const LoginForm = ({ errorMessage, setErrorMessage }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.userName) {
      errors.userName = "User Name Required";
    }
    if (!values.password) {
      errors.password = "Password Required";
    }
    return errors;
  };

  const handleLoginSubmit = (events) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((user) => user.userName === events.userName);

    if (user && events.password === user.password) {
      dispatch(loginUser(user));
      localStorage.setItem("loggedInUser", JSON.stringify(user));
      navigate("/");
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <section className="login-form">
      <h1 className="login-form__title">Login Form</h1>
      <Form
        onSubmit={handleLoginSubmit}
        validate={validate}
        render={({ handleSubmit, submitting, pristine, invalid }) => (
          <form className="login-form__form" onSubmit={handleSubmit}>
            <div className="login-form__field">
              <label className="login-form__label">User Name:</label>
              <Field
                className="login-form__input"
                type="text"
                name="userName"
                component="input"
              />
              <div className="login-form__error">
                <Field
                  name="userName"
                  subscription={{ error: true, touched: true }}
                >
                  {({ meta: { touched, error } }) =>
                    touched && error ? (
                      <span className="login-form__error-text">{error}</span>
                    ) : null
                  }
                </Field>
              </div>
            </div>
            <div className="login-form__field">
              <label className="login-form__label">Password:</label>
              <Field
                className="login-form__input"
                type="password"
                name="password"
                component="input"
              />
              <div className="login-form__error">
                <Field
                  name="password"
                  subscription={{ error: true, touched: true }}
                >
                  {({ meta: { touched, error } }) =>
                    touched && error ? (
                      <span className="login-form__error-text">{error}</span>
                    ) : null
                  }
                </Field>
              </div>
            </div>
            <button
              className="login-form__button"
              type="submit"
              disabled={submitting || pristine || invalid}
            >
              Login
            </button>

            {errorMessage && (
              <div className="login-form__error-message">{errorMessage}</div>
            )}
            <div className="login-form__footer-link">
              Do not have an account?
              <Link to="/register"> Register </Link>
            </div>
          </form>
        )}
      />
    </section>
  );
};

export default LoginForm;
