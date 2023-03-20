import React, { useState, useEffect } from 'react';
import { PaystackButton } from "react-paystack";
import { auth, db } from '../FIREBASE_CONFIG'
import Pay from "../images/pay.png";
import { useParams } from "react-router-dom";
import { onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'
import { collection, addDoc } from "firebase/firestore";


const Checkout = ({ getProjects, projects }) => {

  useEffect(() => {
    getProjects();
  }, []);

  const path = useParams();

  const [projectName, setprojectName] = useState("");

  useEffect(() => {
    setprojectName(path.projectName.replaceAll("-", " "));
  }, [path, projectName, projects]);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [authUser, setAuthUser] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const publicKey = "pk_test_9b2dc261dc817d12bb063212e10542e3d078d23f";
  const amount = 300000;
  // const email = authUser?.email;

  const handleSuccess = async () => {
    alert("Success payment received");
    // create user account
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const user = res.user;
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        firstname,
        lastname,
        address,
        phone,
        authProvider: "local",
        email,
      });
      console.log(user);
    } catch (err) {
      console.error(err);
    }
  }

  const handleClose = () => {
    alert("Payment not completed");
  }

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
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

  const componentProps = {
    email,
    amount,
    metadata: {
      firstName,
      lastName,
      phone,
      address
    },
    publicKey,
    text: 'Place Order',
    onSuccess: handleSuccess,
    onClose: handleClose,
    // onSuccess: ({ reference }) => {
    //   alert(
    //     `Your purchase was successful! Transaction reference: ${reference}`
    //   );
    // },
    // onClose: () => alert("Oops! Transaction not completed"),
  };

  return (
    <>
      <div className="container">
        <form>
          <div className="form-group row mt-5">
            <div className="col-sm-10">
              <label htmlFor="inputFirstName" className="col-sm-2 col-form-label">Firstname</label>
              <input type="text" className="form-control" id="inputFirstName" placeholder="Firstname" value={firstName}
                onChange={(e) => setFirstName(e.target.value)} />
            </div>
            <div className="col-sm-10">
              <label htmlFor="inputLastName" className="col-sm-2 col-form-label">Lastname</label>
              <input type="text" className="form-control" id="inputLastName" placeholder="Lastname" value={lastName}
                onChange={(e) => setLastName(e.target.value)} />
            </div>
            <div className="col-sm-10">
              <label htmlFor="inputAddress" className="col-sm-2 col-form-label">Address</label>
              <input type="text" className="form-control" id="Address" placeholder="Address" value={address}
                onChange={(e) => setAddress(e.target.value)} />
            </div>
            <div className="col-sm-10">
              <label htmlFor="inputPhone" className="col-sm-2 col-form-label">Phone</label>
              <input type="text" className="form-control" id="inputLastName" placeholder="Phone" value={phone}
                onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="col-sm-10">
              <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail" placeholder="Email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="col-sm-10">
              <div className="form-check form-switch mt-3">
                <label className="form-check-label" for="flexSwitchCheckChecked">Create an Account?</label>
                <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked={isChecked} onChange={toggleCheckbox} />
              </div>
            </div>
            {isChecked && <div className="col-sm-10 hide-col">
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>}
          </div>
        </form>
      </div>
      <div className='container'>
        <div className='checkout-header'>
          <b>YOUR ORDER</b>
        </div>
        <div className='checkout-name'>
          <b>PROJECT</b>
        </div>
        <div className='project-name'>
          <p>{projectName}</p>
        </div>
      </div>

      <div className='accord-bg container'>
        <div className="accordion" id="accordionPanelsStayOpenExample">
          <div className='accord-img'>
            <img src={Pay} alt="paystack-img" />
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                Online Payment - Debit/Credit Cards (Instant Download – No Delay)
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
              <div className="accordion-body">
                To save the cost of visiting the bank and to save you time, you can use any Debit/Credit Card (ATM Card) to pay for your project material online. After the successful completion of your online payment, you will instantly get a download link to your complete project material. All transactions are processed by Paystack. Thus, all transactions are safe and secured.
              </div>
            </div>
          </div>
        </div>
        <div className='accord-btn'>
          <PaystackButton className="paystack-button btn btn-primary rounded-4" {...componentProps} />
        </div>
      </div>
    </>
  )
}

export default Checkout
