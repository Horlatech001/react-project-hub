import React, { useRef } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth } from '../FIREBASE_CONFIG';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const firstNameRef = useRef('')
    const lastNameRef = useRef('')
    const addressRef = useRef('')
    const phoneRef = useRef('')
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const submitHandler = async (e) => {
        e.preventDefault();

        if (emailRef.current.value.trim('') === '' || passwordRef.current.value.trim('') === '') return
        const email = emailRef.current.value
        const password = passwordRef.current.value
        console.log(email, password)
        createUserWithEmailAndPassword(email, password)
        console.log(user)
    }

    const navigate = useNavigate()

    if (user) navigate('/login')


    // if (user) console.log(user)
    // if (error) console.log(error)
    // const countryAPI = () => {
    //     const xhttp = new XMLHttpRequest();
    //     const select = document.getElementById("countries");

    //     let countries;

    //     xhttp.onreadystatechange = function () {
    //         // console.log('this.status', this.status);
    //         if (this.readyState == 4 && this.status == 200) {
    //             countries = JSON.parse(xhttp.responseText);
    //             assignValues();
    //         }
    //     };
    //     xhttp.open("GET", "https://restcountries.com/v3.1/all", true);
    //     xhttp.send();

    //     function assignValues() {
    //         countries.forEach(country => {
    //             const option = document.createElement("option");
    //             // console.log('country', country)
    //             option.value = country.cioc;
    //             option.textContent = country.name.common;
    //             select.appendChild(option);
    //         });
    //     }
    // }

    // useEffect(() => {
    //     countryAPI();
    // }, []);

    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="login-card col-sm-4 offset-sm-4 mt-5 pb-4 shadow">
                        <h3 className='text-center'>Registration Form</h3>
                        <form onSubmit={submitHandler}>
                            <div className="form-group row">
                                <div className="col-sm-10 offset-sm-1">
                                    <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">Firstname</label>
                                    <input type="text" className="form-control" id="inputFirstName" placeholder="Firstname" ref={firstNameRef} />
                                </div>
                                <div className="col-sm-10 offset-sm-1">
                                    <label htmlFor="inputLastName" className="col-sm-2 col-form-label">Lastname</label>
                                    <input type="text" className="form-control" id="inputLastName" placeholder="Lastname" ref={lastNameRef} />
                                </div>
                                {/* <div className="col-sm-10 offset-sm-1">
                                    <label htmlFor="inputCountry" className="col-sm-2 col-form-label">Country/Region</label>
                                    <select className="countries form-control" name="countries" id="countries">
                                        <option value=''>Select your country</option>
                                    </select>
                                </div> */}
                                <div className="col-sm-10 offset-sm-1">
                                    <label htmlFor="inputAddress" className="col-sm-2 col-form-label">Address</label>
                                    <input type="text" className="form-control" id="inputAddress" placeholder="Address" ref={addressRef} />
                                </div>
                                <div className="col-sm-10 offset-sm-1">
                                    <label htmlFor="inputPhone" className="col-sm-2 col-form-label">Phone</label>
                                    <input type="text" className="form-control" id="inputPhone" placeholder="Phone" ref={phoneRef} />
                                </div>
                                <div className="col-sm-10 offset-sm-1">
                                    <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                    <input type="text" className="form-control" id="inputEmail" placeholder="Email" ref={emailRef} />
                                </div>
                                <div className="col-sm-10 offset-sm-1">
                                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                    <input type="password" className="form-control" id="inputPassword" placeholder="Password" ref={passwordRef} />
                                </div>
                            </div>
                            <div className="col-sm-10 offset-sm-1 mt-3">
                                <button className='btn btn-primary' type='submit'>Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register
