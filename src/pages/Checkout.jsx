import React, { useState, useEffect } from 'react';
import { PaystackButton } from "react-paystack";
import Pay from "../images/pay.png";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const Checkout = ({ getProjects, projects }) => {

  useEffect(() => {
    getProjects();
  }, []);

  const path = useParams();

  const [projectName, setprojectName] = useState("");


  useEffect(() => {
    setprojectName(path.projectName.replaceAll("-", " "));

  }, [path, projectName, projects]);

  const publicKey = "pk_test_9b2dc261dc817d12bb063212e10542e3d078d23f";
  const amount = 300000;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setPhone('');
    setEmail('');
    setAddress('');
    setPassword('');
  };

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
    onSuccess: ({ reference }) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      resetForm();
    },
    onClose: () => alert("Oops! Transaction not completed"),
  };

  // const countryAPI = () => {
  //   const xhttp = new XMLHttpRequest();
  //   const select = document.getElementById("countries");

  //   let countries;

  //   xhttp.onreadystatechange = function () {
  //     console.log('this.status', this.status);
  //     if (this.readyState == 4 && this.status == 200) {
  //       countries = JSON.parse(xhttp.responseText);
  //       assignValues();
  //     }
  //   };
  //   xhttp.open("GET", "https://restcountries.com/v3.1/all", true);
  //   xhttp.send();

  //   function assignValues() {
  //     countries.forEach(country => {
  //       const option = document.createElement("option");
  //       console.log('country', country)
  //       option.value = country.cioc;
  //       option.textContent = country.name.common;
  //       select.appendChild(option);
  //     });
  //   }
  // }

  // useEffect(() => {
  //   countryAPI();
  // }, []);

  const navigate = useNavigate()
  const token = localStorage.getItem('token')

  if (!token) navigate('/login')

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
            {/* <div className="col-sm-10">
              <label htmlFor="inputCountry" className="col-sm-2 col-form-label">Country/Region</label>
              <select class="countries" name="countries" id="countries" className='form-control'>
                <option>Select your country</option>
              </select>
            </div> */}
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
              <div class="form-check form-switch mt-3">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" />
                <label class="form-check-label" for="flexSwitchCheckChecked">Create an Account?</label>
              </div>
            </div>
            <div className="col-sm-10 hide-col">
              <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword" placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </div>
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
