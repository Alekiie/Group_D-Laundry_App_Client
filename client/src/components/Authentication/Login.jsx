import {
  faEnvelope,
  faLock,
  faLockOpen,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import facebook from "../images/auth/facebook.svg";
import google from "../images/auth/google.svg";
import loginPic from "../images/auth/log.svg";
import registerPic from "../images/auth/register.svg";
import "./Login.css";
import { useAuth } from "./UseAuth";
import { useNavigate } from "react-router-dom";
import { Alert } from "reactstrap";

const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [toggled, setToggled] = useState(false);
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  const buttonClass = toggled ? "containerz sign-up-mode" : "containerz";
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const auth = useAuth();

  const handleBlur = (e) => {
    const newUserInfo = { ...user };
    newUserInfo[e.target.name] = e.target.value;
    setUser(newUserInfo);
  };

  const onSubmitNew = (data) => {
    if (user.email && user.name && user.password) {
      auth.signUp(user.name, user.email, user.password);
    } else {
      console.log("error");
    }
  };

  const onSubmitOld = (data) => {
    if (user.email && user.password) {
      auth.signIn(user.email, user.password);
    }

    data.preventDefault();
    // console.log(data)
  };
  //custom check
  // console.log(auth.signUp.response);

  return (
    <section id="Amazing-Login-Page">
      <div className={buttonClass}>
        <div className="forms-containerz">
          <div className="signin-signup">
            <form onSubmit={onSubmitOld} className="sign-in-form">
              <h2 className="title">Sign in</h2>
              {auth.user != null && (
                <p className="text-danger">{auth.user.error}</p>
              )}

              <div className="input-field">
                <FontAwesomeIcon icon={faEnvelope} className="input-fieldi" />

                <input
                  name="email"
                  // {...register("email", { required: true })}
                  // aria-invalid={errors.email ? "true" : "false"}
                  onBlur={handleBlur}
                  placeholder="Email"
               
                />
              </div>
              {errors.email?.type === "required" && (
                <span className="error" role="alert">
                  Email is required
                </span>
              )}
              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="input-fieldi" />
                <input
                  type="password"
                  name="password"
                  // {...register("password", { required: true })}
                  // aria-invalid={errors.password ? "true" : "false"}
                  onBlur={handleBlur}
                  placeholder="Password"
                />
              </div>
              {/* {errors.password?.type === "required" && (
                <span className="error" role="alert">
                  Password is required
                </span>
              )} */}

              <button className="btnz" type="submit">
                Sign In
              </button>

              <p
                className="forget-text"
                onClick={() => console.log("Forgot password?")}
              >
                Forgot your password?
              </p>

              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <button className="social-icon">
                  <img src={google} width="25px" />
                  <span className="mx-2">Sign in with Google</span>
                </button>
                <button className="social-icon">
                  <img src={facebook} width="27px" />
                  <span className="mx-2">Sign in with Facebook </span>
                </button>
              </div>
            </form>

            <form className="sign-up-form" onSubmit={handleSubmit(onSubmitNew)}>
              <h2 className="title">Sign up</h2>
              {auth.user != null && (
                <p className="text-danger">{auth.user.error}</p>
              )}

              <div className="input-field">
                <FontAwesomeIcon icon={faUser} className="input-fieldi" />
                <input
                  name="name"
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                  placeholder="Name"
                  onBlur={handleBlur}
                />
              </div>
              <span className="error">
                {errors.name?.type === "required" && (
                  <span className="error" role="alert">
                    Name is required
                  </span>
                )}
              </span>

              <div className="input-field">
                <FontAwesomeIcon icon={faEnvelope} className="input-fieldi" />
                <input
                  name="email"
                  {...register("email", { required: true })}
                  aria-invalid={errors.email ? "true" : "false"}
                  placeholder="Email"
                  onBlur={handleBlur}
                />
              </div>
              <span className="error">
                {errors.email?.type === "required" && (
                  <span role="alert" className="error">
                    Email is required
                  </span>
                )}
              </span>

              <div className="input-field">
                <FontAwesomeIcon icon={faLock} className="input-fieldi" />
                <input
                  type="password"
                  name="password"
                  {...register("password", { required: true })}
                  aria-invalid={errors.password ? "true" : "false"}
                  placeholder="Password"
                  onBlur={handleBlur}
                />
              </div>
              <span className="error">
                {errors.password?.type === "required" && (
                  <span role="alert" className="error">
                    Password is required
                  </span>
                )}
              </span>

              <div className="input-field">
                <FontAwesomeIcon icon={faLockOpen} className="input-fieldi" />
                <input
                  type="password"
                  name="confirm_password"
                  {...register("confirm_password", { required: true })}
                  aria-invalid={errors.confirm_password ? "true" : "false"}
                  placeholder="Confirm Password"
                />
              </div>
              <span className="error">
                {errors.confirm_password?.type === "required" && (
                  <span role="alert" className="error">
                    Password is required
                  </span>
                )}
              </span>

              <button className="btnz" type="submit">
                Sign Up
              </button>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="btnz transparent"
                onClick={() => setToggled(!toggled)}
                id="sign-up-btn"
              >
                Sign up
              </button>
            </div>
            <img src={loginPic} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="btnz transparent"
                onClick={() => setToggled(!toggled)}
                id="sign-in-btn"
              >
                Sign in
              </button>
            </div>
            <img src={registerPic} className="image" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
