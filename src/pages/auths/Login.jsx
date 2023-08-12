import React, { useEffect } from 'react'
import validate from '@utils/validate';
import api from '@api';
import  {message} from 'antd';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate()
  useEffect(() => {
    if (localStorage.getItem("token")) {
      window.location.href = "/";
    }
  })
  return (
    <section className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "1rem" }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                  
                    src="../../images/login.jpg"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: "1rem 0 0 1rem", height: "100%",paddingTop:"30%" }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form
                      onSubmit={async (e) => {
                        e.preventDefault();
                        let data = {
                          user_name: e.target.user_name.value,
                          password: e.target.password.value,
                          type: !validate.isEmail(e.target.user_name.value) // Email false, User Name true
                        }
                        console.log("data",data);
                  
                        try {
                          let result = await api.users.login(data);
                          if (result.status == 200) {
                            if (result.data.token == undefined) {
                              message.error("Login Failed!")
                            } else {
                              localStorage.setItem("token", result.data.token);
                              message.success("Login Successfull !")
                                setTimeout(()=>{
                                  window.location.href = "/"
                                },2000)                          
                            }
                          } else {
                            console.log("result.data.message",result.data.message);
                            alert(result.data.message)
                          }
                        } catch (err) {
                            console.log("err",err);
                        }

                      }}
                    >
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <span className="h1 fw-bold mb-0">Sign In</span>
                      </div>
                      <h5
                        className="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: 1 }}
                      >
                        Sign into your account
                      </h5>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                          Email Or User Name
                        </label>
                        <input
                          style={{ border: "1px solid black", backgroundColor: "#fff" }}
                          name='user_name'
                          id="form2Example17"
                          className="form-control form-control-lg"
                        />

                      </div>
                      <div className="form-outline mb-4">
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                        <input
                          style={{ border: "1px solid black", backgroundColor: "#fff" }}
                          name='password'
                          type="password"
                          id="form2Example27"
                          className="form-control form-control-lg"
                        />

                      </div>
                      <div className="pt-1 mb-4">
                        <button
                          style={{ backgroundColor: "#6e2e27" }}
                          className="btn btn-dark btn-lg btn-block"
                          type="submit"
                        >
                          Login
                        </button>
                      </div>

                      <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="/register" style={{ color: "#393f81" }}>
                          Register here
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}
