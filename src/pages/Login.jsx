import React, { useEffect, useState } from 'react'
import { auth } from '../FIREBASE_CONFIG'
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Spinner } from 'react-bootstrap';
import CustomAlert from './CustomAlert';


const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [authUser, setAuthUser] = useState(null);
    const [isPasswordHidden, setIsPasswordHidden] = useState(true);
    const [isLoading, setLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const navigate = useNavigate();

    const loginUser = () => {
        if (email === '' || password === '') {
            setAlertMessage('Enter your email and password');
            setShowAlert(true);
        } else {
            setLoading(true);
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    console.log(userCredential);
                    { userCredential.user.uid && navigate("/") }
                    { userCredential.user.uid && setLoading(false) }
                })
                .catch((error) => {
                    let errorCode = error.code;
                    let errorMessage;
                    switch (errorCode) {
                        case 'auth/user-not-found':
                            errorMessage = 'invalid email entered';
                            break;
                        case 'auth/wrong-password':
                            errorMessage = 'invalid password entered';
                            break;
                        default:
                            errorMessage = 'Network issue: Sign in failed';
                            break;
                    }
                    setAlertMessage(errorMessage)
                    setShowAlert(true);
                });

            // setTimeout(() => {
            //     setLoading(false);
            // }, 2000)
        }
    }

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null)
            }
        });
        return () => {
            listen();
        }
    }, [])

    const togglePasswordVisibility = () => {
        setIsPasswordHidden(!isPasswordHidden);
    }

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="login-card col-sm-4 offset-sm-4 mt-5 pb-4 shadow">
                        <h3 className='text-center mb-3'>Login Form</h3>
                        <div className="form-group row">
                            <div className="col-sm-10 offset-sm-1">
                                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                <input type="text" className="form-control" id="inputEmail" value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="col-sm-10 offset-sm-1">
                                <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                <div className='password-wrapper'>
                                <input type={isPasswordHidden ? 'password' : 'text'} className="form-control" id="inputPassword" value={password}
                                    onChange={(e) => setPassword(e.target.value)}/>
                                <span onClick={togglePasswordVisibility}>{isPasswordHidden ? <i className='far fa-eye'></i> : <i className='far fa-eye-slash'></i>}</span>
                                </div>
                            </div>
                            <div className="col-sm-10 offset-sm-1 mt-3 d-flex justify-content-between">
                                {authUser ? <>
                                    <button className='btn btn-danger' type="submit">Logout</button>
                                </> : <>
                                    <Button variant='primary' onClick={loginUser} disabled={isLoading}>
                                        {isLoading ? <Spinner animation='border' size='sm' /> : "Login"}
                                        {showAlert && (
                                            <CustomAlert message={alertMessage} />
                                        )}
                                    </Button>
                                </>}
                            </div>
                        </div>
                        <div className="col-sm-10 offset-sm-1 mt-3" >
                            <p>Doesn't have an account? <Link to="/register">Create an Account</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
