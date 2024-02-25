import React from "react";
import NavBar from "./pages/navbar/NavBar";
import "./App.css";
// import SignUpForm from './components/Account/SignUpForm'
import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Services from "./pages/services/Services";
import DashBoard from "./pages/dashboard/DashBoard";
import Contact from "./pages/contact/Contact";
import SignUpForm from "./components/account/SignUpForm";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/services",
      element: <Services />,
    },
    {
      path: "/",
      element: <DashBoard />,
    },
    {
      path: "/",
      element: <Contact />,
    },
    {
      path: "/account",
      element: <SignUpForm />,
    },
  ]);
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      {/* <SignUpForm/> */}

      {/* <RouterProvider router={router} /> */}
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/account" element={<SignUpForm />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
