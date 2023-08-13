import React, { useState } from 'react';
import api from '@api';
import { message } from 'antd';
import Loading from  '../../lazy_loadings/components/Loading' 
export default function Register() {
  const [load, setLoad] = useState(false);
  const [errors, setErrors] = useState({});
  const handleFormSubmit = async (e) => {
    e.preventDefault();


    const newUser = {
      user_name: e.target.user_name.value,
      email: e.target.email.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      password: e.target.password.value,
    };

    const confirmPass = e.target.confirmpassword.value
    if (newUser.password !== confirmPass) {
      message.error("Incorect Confirm Password ! ")
      return;
    }

    const validationErrors = validateInputs(newUser);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setLoad(true);
    const result = await api.users.register(newUser);
    setLoad(false);
    if (result.status !== 200) {
      message.error(result.response.data.message);
    } else {
      message.success(result.data !== undefined ? result.data.message : result.message);
      window.location.href = "/login"
    }
  };

  const validateInputs = (user) => {
    const errors = {};

    if (!user.user_name) {
      errors.user_name = 'User Name is required.';
    }

    if (!user.email) {
      errors.email = 'Email is required.';
    } else if (!isValidEmail(user.email)) {
      errors.email = 'Invalid email address.';
    }

    if (!user.first_name) {
      errors.first_name = 'First Name is required.';
    }

    if (!user.last_name) {
      errors.last_name = 'Last Name is required.';
    }

    if (!user.password) {
      errors.password = 'Password is required.';
    } else if (user.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long.';
    }

    return errors;
  };
  const isValidEmail = (email) => {
    // A simple email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  return (

    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: 25 }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>
                    <form className="mx-1 mx-md-4"

                      onSubmit={handleFormSubmit}
                    >
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example1c">
                            User Name
                          </label>
                          <input
                            name='user_name'
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            style={{ border: "1px solid black", backgroundColor: "#fff" }}
                          />
                          {errors.user_name && <span className="error" style={{ color: "red", fontSize: "14px" }}>{errors.user_name}</span>}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example3c">
                            Your Email
                          </label>
                          <input
                            type="email"
                            id="form3Example3c"
                            name='email'
                            className="form-control"
                            style={{ border: "1px solid black", backgroundColor: "#fff" }}
                          />
                          {errors.email && <span className="error" style={{ color: "red", fontSize: "14px" }}>{errors.email}</span>}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <div className="d-flex flex-row align-items-center mb-4" style={{ display: "flex" }}>
                          <i className="fa-solid fa-pen"></i>
                          <div className="form-outline flex-fill mb-0" style={{ marginLeft: "20px" }}>
                            <label className="form-label" htmlFor="form3Example3c">
                              First Name
                            </label>
                            <input
                              name="first_name"
                              id="form3Example3c"
                              className="form-control"
                              style={{ border: "1px solid black", backgroundColor: "#fff" }}
                            />
                            {errors.first_name && <span className="error" style={{ color: "red", fontSize: "14px" }}>{errors.first_name}</span>}
                          </div>
                          <div className="form-outline flex-fill mb-0">
                            <label className="form-label" htmlFor="form3Example3c">
                              Last Name
                            </label>
                            <input
                              name="last_name"
                              id="form3Example3c"
                              className="form-control"
                              style={{ border: "1px solid black", backgroundColor: "#fff", marginLeft: "5px" }}
                            />
                            {errors.last_name && <span className="error" style={{ color: "red", fontSize: "14px" }}>{errors.last_name}</span>}
                          </div>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4c">
                            Password
                          </label>
                          <input
                            type="password"
                            name='password'
                            id="form3Example4c"
                            className="form-control"
                            style={{ border: "1px solid black", backgroundColor: "#fff" }}
                          />
                          {errors.password && <span className="error" style={{ color: "red", fontSize: "14px" }}>{errors.password}</span>}
                        </div>
                      </div>
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw" />
                        <div className="form-outline flex-fill mb-0">
                          <label className="form-label" htmlFor="form3Example4cd">
                            Repeat your password
                          </label>
                          {/* <input
                          name='re-password'
                          type="re-password"
                          id="form3Example4cd"
                          className="form-control"
                          style={{ border: "1px solid black", backgroundColor: "#fff" }}
                        /> */}
                          <input
                            name="confirmpassword"
                            type="password"
                            id="form3Example4cd"
                            className="form-control"
                            style={{ border: "1px solid black", backgroundColor: "#fff" }}
                          />
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button type="submit" style={{ backgroundColor: "#6e2e27" }} className="btn btn-primary btn-lg">
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="../../images/register.jpeg"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {
        load ? <Loading/> : <></>
      }
    </section>
  )
}


