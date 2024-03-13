import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
// import { makeStyles } from '@mui/styles';
import Typography from "@mui/material/Typography";
import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Button, FormGroup, Input, Label } from "reactstrap";
import { DataContext } from "../../App";
import { processOrder } from "../../utilities/databaseManager";
import { useAuth } from "../Authentication/UseAuth";
import "../Services/Services.css";
import "./Cart.css";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const useCustomStylesHook = () => {
  return {
    root: {
      width: "100%",
      backgroundColor: "var(--background-paper)", // using CSS variables
    },
    heading: {
      fontSize: "1.2rem", // using relative units
      fontWeight: "normal",
    },
    secondaryHeading: {
      fontSize: "0.9375rem", // using relative units
      color: "var(--text-secondary)", // using CSS variables
    },
  };
};

const Cart = (props) => {
  const auth = useAuth();
  const { user, email } = useAuth();
  const classes = useCustomStylesHook();
  const ContextData = useContext(DataContext);
  const [success, setSuccess] = useState(false);

  const removeItemFromCart = (currentItem) => {
    currentItem.dc = "d-none";
    currentItem.ac = "d-block";

    props.handleRemoveProduct(currentItem);
  };

  const handleProductQuantity = (productID, productQuantity) => {
    const newCart = ContextData.products.map((item) => {
      if (item.id === productID) {
        item.quantity = productQuantity;
      }
      return item;
    });

    const filteredCart = newCart.find((item) => item.id === productID);
    props.handleAddProduct(filteredCart);
  };

  const totalQuantity = props.cart.reduce((totalQuantity, product) => {
    return totalQuantity + product.quantity;
  }, 0);

  const subTotal = props.cart.reduce((totalPrice, product) => {
    return totalPrice + product.price * product.quantity;
  }, 0);

  let deliveryCharge = 0;
  if (subTotal > 100) {
    deliveryCharge = 0;
  } else if (subTotal > 0) {
    deliveryCharge = 20;
  }

  let cartHeight = "";

  if (props.cart.length == 0) {
    cartHeight = "300px";
  } else if (props.cart.length == 1) {
    cartHeight = "520px";
  } else if (props.success) {
    cartHeight = "";
  } else {
    cartHeight = "620px";
  }

  const grandTotal = subTotal + deliveryCharge;

  // console.log(postData)
  // After Place order button is clicked, this function is worked
  const handleFinalOrder = async (data) => {
    try {
      await axios.post(
        "https://laundry-w1qp.onrender.com/orders",
        props.postData
      );
      console.log("Order Placed Successfully...");
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Order Placed",
        showConfirmButton: false,
        timer: 3000,
      });
      setSuccess(true);
      processOrder();
      props.clearCart();
      props.clearDeliveryDetails();
      Navigate("/");
    } catch (error) {
      console.log("Error Making order" + error);
    }

    // const shipment = props.deliveryDetails;
    // const products = props.cart;
    // const email = auth.user.email;

    // const subTotalCart = subTotal + '';
    // const deliveryChargeCart = deliveryCharge + '';
    // const grandTotalCart = grandTotal + '';

    // const price = {
    // 	subTotal,
    // 	deliveryCharge,
    // 	grandTotal
    // };

    // const orderDetails = Math.round(Math.random() * 1000000);
    // const status = 'Order Placed';
    // const progress = 20;

    // const orderAdded = { email, shipment, products, price, orderDetails, status, progress };

    // fetch('https://smart-dhopa-server.herokuapp.com/addOrders', {
    // 	method: 'POST',
    // 	headers: { 'Content-Type': 'application/json' },
    // 	body: JSON.stringify(orderAdded)
    // })
    // 	.then((res) => res.json())
    // 	.then((data) => {
    // 		console.log(data);
    // 	});
  };

  return (
    <>
      <div className="cartClass" style={{ height: cartHeight }}>
        <h4 className="text-danger d-flex justify-content-center m-2">
          Your Bag
        </h4>
        <p className="d-flex justify-content-center m-1">
          Total Item: {totalQuantity}
        </p>

        <List className={classes.root}>
          {props.cart.map((item) => (
            <div key={item.id}>
              <Divider />
              <ListItem>
                <Typography
                  className={classes.dividerFullWidth}
                  color="white"
                  display="block"
                  variant="caption"
                >
                  {item.category} - {item.service}
                </Typography>
                <ListItemText primary="" />
                <div className="quantity-button">
                  {item.quantity > 1 ? (
                    <button
                      onClick={() =>
                        handleProductQuantity(item.id, item.quantity - 1)
                      }
                      className="btnQ"
                    >
                      -
                    </button>
                  ) : (
                    <button
                      className="btnQ"
                      onClick={() => removeItemFromCart(item)}
                    >
                      -
                    </button>
                  )}
                  <span className="quantity"> {item.quantity}</span>
                  <button
                    className="btnQ"
                    onClick={() =>
                      handleProductQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </ListItem>
              <ListItem>
                <ListItemText primary={item.name} />
                <ListItemText primary="" />
                <Typography className={classes.secondaryHeading}>
                  <span className="price">
                    Kes. {item.price * item.quantity}
                  </span>
                </Typography>
              </ListItem>
            </div>
          ))}

          <Divider />
          <ListItem>
            <ListItemText primary="Sub Total" />
            <ListItemText primary="" />
            <Typography className={classes.secondaryHeading}>
              <span className="price">Kes. {subTotal}</span>
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary="Delivery Charge" />
            <ListItemText primary="" />
            <Typography className={classes.secondaryHeading}>
              <span className="price">Kes. {deliveryCharge}</span>
            </Typography>
          </ListItem>
          <ListItem>
            <ListItemText primary="Grand Total" />
            <ListItemText primary="" />
            <Typography className={classes.secondaryHeading}>
              <span className="price">Kes. {grandTotal}</span>
            </Typography>
          </ListItem>
        </List>

        {totalQuantity ? (
          props.success ? (
            <div className="">
              <div className="d-flex justify-content-center">
                <FormGroup check>
                  <Label check>
                    <Input type="checkbox" defaultChecked />
                    <span className="form-check-sign" />
                    Agree with Terms and Conditions
                  </Label>
                </FormGroup>
              </div>
              <div className="d-flex justify-content-center">
                <Link>
                  <Button
                    className="nav-name my-4"
                    color="danger"
                    onClick={handleFinalOrder}
                  >
                    <i className="now-ui-icons arrows-1_share-66" />
                    <span className="ml-2">Place Your Order</span>
                  </Button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center">
              <Link to="/cart-and-shipment">
                <Button className="nav-name my-4" color="danger">
                  <i className="now-ui-icons shopping_bag-16" />
                  <span className="ml-2">Check Out Your Order</span>
                </Button>
              </Link>
            </div>
          )
        ) : (
          <div />
        )}
      </div>
    </>
  );
};

export default Cart;
