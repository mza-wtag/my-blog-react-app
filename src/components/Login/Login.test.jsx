import React from "react";
import { describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Login from "./Login";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

vi.mock("../actions/authActions", "loginUserWithLocalStorage");

describe("Login Component", () => {
  it("renders login form correctly", () => {
    render(
      <Provider store={mockStore({})}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    expect(screen.getByText("Login Form")).toBeInTheDocument();
    expect(screen.getByLabelText("User Name:*")).toBeInTheDocument();
    expect(screen.getByLabelText("Password:*")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Register" })).toBeInTheDocument();
  });

  it("submits the login form with valid input", async () => {
    render(
      <Provider store={mockStore({})}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    const userNameInput = screen.getByLabelText("User Name:*");
    const passwordInput = screen.getByLabelText("Password:*");
    const loginButton = screen.getByRole("button", { name: "Login" });

    await userEvent.type(userNameInput, "johndoe");
    await userEvent.type(passwordInput, "password123");
    userEvent.click(loginButton);

    await waitFor(() => {
      expect(
        vi.getMock("@actions/authActions").loginUserWithLocalStorage
      ).toHaveBeenCalled();
      expect(
        vi.getMock("@actions/authActions").loginUserWithLocalStorage.mock
          .calls[0][0]
      ).toEqual({
        userName: "johndoe",
        password: "password123",
      });
    });
  });

  it("displays error message when form is submitted with invalid data", async () => {
    render(
      <Provider store={mockStore({})}>
        <Router>
          <Login />
        </Router>
      </Provider>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    userEvent.click(loginButton);

    await waitFor(() => {
      expect(screen.getByText("User Name Required")).toBeInTheDocument();
      expect(screen.getByText("Password Required")).toBeInTheDocument();
    });
  });
});
