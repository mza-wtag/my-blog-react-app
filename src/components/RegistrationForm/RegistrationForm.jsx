import React from "react";
import { Form, Field } from "react-final-form";
import { useNavigate, Link } from "react-router-dom";
import "./RegistrationForm.scss";
import { useDispatch } from "react-redux";
import { registerUser } from "../../actions/authActions";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};
    if (!values.userName) {
      errors.userName = "*";
    }
    if (!values.firstName) {
      errors.firstName = "*";
    }
    if (!values.lastName) {
      errors.lastName = "*";
    }
    if (!values.email) {
      errors.email = "*";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "*";
    }
    return errors;
  };

  const handleRegisterSubmit = (event) => {
    dispatch(registerUser(event));
    navigate("/login");
  };

  return (
    <section className="registration-form">
      <h1 className="registration-form__title">Registration Form</h1>
      <Form
        onSubmit={handleRegisterSubmit}
        validate={validate}
        render={({ handleSubmit, submitting, pristine, invalid }) => (
          <form onSubmit={handleSubmit} className="registration-form__form">
            <div className="registration-form__field">
              <label className="registration-form__label">User Name:</label>
              <Field
                type="text"
                name="userName"
                component="input"
                className="registration-form__input"
              />
              <div className="registration-form__error">
                <Field
                  name="userName"
                  subscription={{ error: true, touched: true }}
                >
                  {({ meta: { touched, error } }) =>
                    touched && error ? (
                      <span className="registration-form__error-text">
                        {error}
                      </span>
                    ) : null
                  }
                </Field>
              </div>
            </div>
            <div className="registration-form__field">
              <label className="registration-form__label">First Name:</label>
              <Field
                type="text"
                name="firstName"
                component="input"
                className="registration-form__input"
              />
              <div className="registration-form__error">
                <Field
                  name="firstName"
                  subscription={{ error: true, touched: true }}
                >
                  {({ meta: { touched, error } }) =>
                    touched && error ? (
                      <span className="registration-form__error-text">
                        {error}
                      </span>
                    ) : null
                  }
                </Field>
              </div>
            </div>
            <div className="registration-form__field">
              <label className="registration-form__label">Last Name:</label>
              <Field
                type="text"
                name="lastName"
                component="input"
                className="registration-form__input"
              />
              <div className="registration-form__error">
                <Field
                  name="lastName"
                  subscription={{ error: true, touched: true }}
                >
                  {({ meta: { touched, error } }) =>
                    touched && error ? (
                      <span className="registration-form__error-text">
                        {error}
                      </span>
                    ) : null
                  }
                </Field>
              </div>
            </div>
            <div className="registration-form__field">
              <label className="registration-form__label">Email:</label>
              <Field
                type="email"
                name="email"
                component="input"
                className="registration-form__input"
              />
              <div className="registration-form__error">
                <Field
                  name="email"
                  subscription={{ error: true, touched: true }}
                >
                  {({ meta: { touched, error } }) =>
                    touched && error ? (
                      <span className="registration-form__error-text">
                        {error}
                      </span>
                    ) : null
                  }
                </Field>
              </div>
            </div>
            <div className="registration-form__field">
              <label className="registration-form__label">Password:</label>
              <Field
                type="password"
                name="password"
                component="input"
                className="registration-form__input"
              />
              <div className="registration-form__error">
                <Field
                  name="password"
                  subscription={{ error: true, touched: true }}
                >
                  {({ meta: { touched, error } }) =>
                    touched && error ? (
                      <span className="registration-form__error-text">
                        {error}
                      </span>
                    ) : null
                  }
                </Field>
              </div>
            </div>
            <button type="submit" className="registration-form__button">
              Signup
            </button>
            <div className="registration-form__footer-link">
              Already have an account?
              <Link to="/login"> Login </Link>
            </div>
          </form>
        )}
      />
    </section>
  );
};

export default RegistrationForm;
