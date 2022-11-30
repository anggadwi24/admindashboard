
import Head from 'next/head';
import styles from '../styles/Login.module.css';
import { useState } from 'react';

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setErrors] = useState([]);




    return (
        <>
       
            <Head>
                <title>Login - Internal </title>
            </Head>
        <style global jsx>{`
        body {
            background: #007bff;
           
        }
      `}</style>
          
        <div className="container">
            <div className="row">
                <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                    <div className="card border-0 shadow rounded-3 my-5">
                    <div className="card-body p-4 p-sm-5">
                        <h3 className="card-title text-center mb-5 fw-light fs-5">Sign In</h3>
                        <form>
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                            <label htmlFor="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                            <label htmlFor="floatingPassword">Password</label>
                        </div>

                        <div className="form-check mb-3">
                            <input className="form-check-input" type="checkbox" value="" id="rememberPasswordCheck"/>
                            <label className="form-check-label" htmlFor="rememberPasswordCheck">
                            Remember password
                            </label>
                        </div>
                        <div className="d-grid">
                            <button className={styles.btnLogin +" btn btn-primary text-uppercase fw-bold"} type="submit">Sign
                            in</button>
                        </div>
                        <hr className="my-4"/>
                      
                        </form>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </>
        
        
    )
}

export default Login;