import React, { useRef } from 'react'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../FIREBASE_CONFIG'

const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const submitHandler = async (e) => {
        e.preventDefault()

        if (emailRef.current.value.trim('') === '' || passwordRef.current.value.trim('') === '') return
        const email = emailRef.current.value
        const password = passwordRef.current.value
        signInWithEmailAndPassword(email, password)

        if (!user) return
        localStorage.setItem('token', user.user.accessToken)
        { user && navigate('/') }

    }

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="login-card col-sm-4 offset-sm-4 mt-5 pb-4 shadow">
                        <h3 className='text-center'>Login Form</h3>
                        <form onSubmit={submitHandler}>
                            <div className="form-group row">
                                <div className="col-sm-10 offset-sm-1">
                                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                    <input type="text" className="form-control" id="inputEmail" placeholder="Email" title='email' ref={emailRef} />
                                </div>
                                <div className="col-sm-10 offset-sm-1">
                                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" title='password' ref={passwordRef} />
                                </div>
                                <div className="col-sm-10 offset-sm-1 mt-3 d-flex justify-content-between">
                                    <button className='btn btn-primary' type='submit'>Login</button>
                                </div>
                            </div>
                            <div className="col-sm-10 offset-sm-1 mt-3" >
                                <p>Doesn't have an account?</p>
                                <Link to="/register"><button className='btn btn-success'>Create an Account</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
