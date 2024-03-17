import { render, screen } from "@testing-library/react";
import { it } from "vitest";
import UserDetails from "./UserDetails";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);

describe("UserDetails Component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      auth: {
        loggedInUser: {
          fullName: "John Doe",
          profileImage: "profile.jpg",
          subtitle: "Web Developer",
          about: "Lorem ipsum dolor sit amet",
        },
      },
    });
  });

  it("renders with default props", () => {
    render(
      <Provider store={store}>
        <UserDetails />
      </Provider>
    );
  });

  it("renders with provided props", () => {
    const user = {
      fullName: "Jane Smith",
      profileImage: "profile2.jpg",
      subtitle: "Software Engineer",
      about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    };
    render(
      <Provider store={store}>
        <UserDetails loggedInUser={user} />
      </Provider>
    );
  });
});
