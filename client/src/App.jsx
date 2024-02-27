import React, { useState, useEffect, createContext } from "react";
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
import Footer from "./components/footer/Footer";
import WashAndIron from "./components/Services/WashAndIron";
import WashAndFold from "./components/Services/WashAndFold";
import IronAndFold from "./components/Services/IronAndFold";
import EmergencyService from "./components/Services/EmergencyService";
import OrderAndProcess from "./components/Services/OrderAndProcess";
import SubscriptionBased from "./components/Services/SubscriptionBased";
import DryCleaning from "./components/Services/DryCleaning";
import Bag from "./components/CartAndShipment/Bag";
// import DryCleaning  from "./components/Services/DryCleaning";

export const DataContext = createContext();

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
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  const [products, setProducts] = useState([]);
  const [preLoaderVisibility, setPreLoaderVisibility] = useState(true);

  // useEffect(() => {
  //   fetch("https://smart-dhopa-server.herokuapp.com/allOrders")
  //     .then((res) => res.json())
  //     .then((data) => setOrder(data));
  // }, [order.length]);

  // useEffect(() => {
  //   fetch("https://smart-dhopa-server.herokuapp.com/products")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  //   setPreLoaderVisibility(false);
  // }, [products.length]);

  const contextData = { order, setOrder, products, setProducts };

  // useEffect(() => {
  //   const savedCart = getDatabaseCart();
  //   const productKeys = Object.keys(savedCart);

  //   if (products.length > 0) {
  //     const previousCart = productKeys.map((existingKey) => {
  //       const product = products.find(
  //         (productItem) => productItem.key === existingKey
  //       );
  //       // console.log(existingKey, savedCart[existingKey]);
  //       product.quantity = savedCart[existingKey];
  //       return product;
  //     });
  //     setCart(previousCart);
  //   }
  // }, []);

  const handleAddProduct = (currentProduct) => {
    const alreadyAdded = cart.find((item) => item.id === currentProduct.id);

    if (alreadyAdded) {
      const reamingCarts = cart.filter((item) => item.id !== currentProduct);
      setCart(reamingCarts);
      addToDatabaseCart(currentProduct.id, currentProduct.quantity);
    } else {
      const newCart = [...cart, currentProduct];
      setCart(newCart);
      addToDatabaseCart(currentProduct.id, currentProduct.quantity);
    }
  };

  const handleRemoveProduct = (currentProduct) => {
    const reamingProducts = cart.filter(
      (item) => item.id !== currentProduct.id
    );
    setCart(reamingProducts);
    removeFromDatabaseCart(currentProduct.id);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  let exactDate = "";

  {
    selectedDate.getDate() > 9
      ? (exactDate = selectedDate.getDate())
      : (exactDate = `0${selectedDate.getDate()}`);
  }

  const getDate = `${selectedDate.getFullYear()}-${
    selectedDate.getMonth() + 1
  }-${exactDate}`;
  const getTime = `${selectedDate.getHours() + 1}:00`;

  const [deliveryDetails, setDeliveryDetails] = useState({
    fullName: null,
    email: null,
    mobileNumber: null,
    toDoor: "Delivery To Door",
    road: null,
    address: null,
    getDate: getDate,
    getTime: getTime,
  });

  const deliveryDetailsHandler = (data) => {
    setDeliveryDetails(data);
  };

  const clearCart = () => {
    setCart([]);
    processOrder();
  };

  const clearDeliveryDetails = () => {
    setDeliveryDetails({
      fullName: null,
      email: null,
      mobileNumber: null,
      toDoor: "Delivery To Door",
      road: null,
      address: null,
      getDate: getDate,
      getTime: getTime,
    });
  };
  return (
    <DataContext.Provider value={contextData}>
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
            <Route
              exact
              path="/wash-and-iron"
              element={
                <WashAndIron
                  cart={cart}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
              }
            />
            {/* <Header cart={cart} /> */}
            <Route
              exact
              path="/wash-and-fold"
              element={
                <WashAndFold
                  cart={cart}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
              }
            />
            {/* <Header cart={cart} /> */}
            <Route
              exact
              path="/iron-and-fold"
              element={
                <IronAndFold
                  cart={cart}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
              }
            />
            {/* <Header cart={cart} /> */}
            <Route
              exact
              path="/dry-cleaning"
              element={
                <DryCleaning
                  cart={cart}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
              }
            />
            {/* <Header cart={cart} /> */}
            <Route
              exact
              path="/subscription-based"
              element={
                <SubscriptionBased
                  cart={cart}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
              }
            />
            {/* <Header cart={cart} /> */}
            <Route
              exact
              path="/emergency-service"
              element={
                <EmergencyService
                  cart={cart}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                />
              }
            />{" "}
            {/* <Footer /> */}
            {/* <Header cart={cart} /> */}
            <Route
              exact
              path="/cart-and-shipment"
              element={
                <Bag
                  cart={cart}
                  handleAddProduct={handleAddProduct}
                  handleRemoveProduct={handleRemoveProduct}
                  deliveryDetails={deliveryDetails}
                  deliveryDetailsHandler={deliveryDetailsHandler}
                  clearCart={clearCart}
                  clearDeliveryDetails={clearDeliveryDetails}
                />
              }
            />
            {/* <Footer /> */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </DataContext.Provider>
  );
};

export default App;
