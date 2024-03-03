import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { Navigate, Route } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = (props) => {
  const auth = Auth();
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

//***************** Navigate review item to signIn ************************
export const PrivateRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export const PrivateAdminRoute = ({ children, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth.user ? (
          children
        ) : (
          <Navigate
            to={{
              pathname: "/admin",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export const getUser = (user) => {
  const { email, displayName, photoURL } = user;
  return { email, name: displayName, photo: photoURL };
};

const Auth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is already authenticated (e.g., token exists in local storage)
    const token = localStorage.getItem("token");
    if (token) {
      // Make a request to your backend to verify the token and fetch user data
      axios
        .get("http://localhost:8080/login", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setUser(response.data.user); // Assuming your backend sends back user data upon successful verification
        })
        .catch((error) => {
          console.error("Error verifying token:", error);
          setUser(null);
        });
    }
  }, []);

  const signIn = async (email, password) => {
    // Make a request to your backend to authenticate the user
    try {
      const response = await axios.post("http://localhost:8080/login", {
        email,
        password,
      });
      const { token, user } = response.data; // Assuming your backend sends back a token upon successful authentication
      localStorage.setItem("token", token); // Store the token in local storage
      setUser(user);
      window.history.back();
    } catch (error) {
      console.error("Error signing in:", error);
      setUser(null);
      throw error; // Propagate the error to the caller
    }
  };

  const signInAdmin = (email, password) => {
    // Similar to signIn, but for admin authentication
    // Make a request to your backend to authenticate the admin user
  };

  const signUp = async (email, password, name) => {
    // Make a request to your backend to register the user
    try {
      const response = await axios.post("http://localhost:8080/register", {
        name,
        email,
        password,
      });
      const user = response.data;
      setUser(user);
      console.log(user)
      window.history.back();
    } catch (error) {}
  };

  const signOut = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");
    setUser(null);
    return true;
  };

  return {
    user,
    signIn,
    signInAdmin,
    signUp,
    signOut,
  };
};

// Export all components and functions as default
export default {
  AuthProvider,
  useAuth,
  PrivateRoute,
  PrivateAdminRoute,
  getUser,
  Auth,
};
