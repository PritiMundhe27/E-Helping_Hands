import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import './style.css'
import { changeMaxAndAmount, fetchNGOid, submitDonationForm } from '../../API/api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Donation() {
  let { id } = useParams();
  const [ngoIdData, setNgoIdData] = useState();

  useEffect(() => {
    async function getNGOidData() {
      const data = await fetchNGOid(id);
      setNgoIdData(data[0]);
      console.log(data[0])
    }
    getNGOidData()

  }, []);
  function submitForm(event) {
    event.preventDefault()
    if (event.target.username.value && event.target.email.value && event.target.age.value && event.target.amount.value && event.target.payment_method.value) {
      if (ngoIdData.active) {

        const date = new Date();
        let today = date.toLocaleString('en-US', { year: "numeric", month: "2-digit", day: "2-digit", hour: 'numeric', minute: 'numeric', hour12: true })
        const data = {
          "name": event.target.username.value,
          "email": event.target.email.value,
          "age": event.target.age.value,
          "amount": event.target.amount.value,
          "payment_method": event.target.payment_method.value,
          "ngo_id": id,
          "ngo_name": ngoIdData.title,
          "ngo_category": ngoIdData.category,
          "date": today
        };
        document.getElementById("donationForm").reset();
        submitDonationForm(data)
          .then(() => {
            const status = ngoIdData.remaining_amount - data.amount > 0 ? true : false;
            const data2 = {
              ...ngoIdData,
              "remaining_amount": ngoIdData.remaining_amount - data.amount,
              "active": status
            }
            changeMaxAndAmount(data2, id)
          })
          .then(() =>
            toast.success('Submitted! Thanks for your contribution', {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            })
          );
      }
      else {
        toast.warn('Not valid donation Id', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
    else {
      toast.warn('Please fill all fields', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

  }
  return (
    <div className='form-container'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {ngoIdData &&
        <form onSubmit={submitForm} onSu action='' method='' id='donationForm'>
          <span>
            <input required type="radio" className='stv-radio-button' name='payment_method' value={'UPI'} id='upi' />
            <label htmlFor="upi">UPI</label>
            <input required type="radio" className='stv-radio-button' name='payment_method' value={"Credit/Debit"} id='credit_card' />
            <label htmlFor="credit_card">Credit/Debit</label>
          </span>
          <input required className="donation-input" type="text" name='username' placeholder='name' />
          <input required className="donation-input" type="email" placeholder='email' name='email' />
          <input required className="donation-input" type="number" name="amount" placeholder='Amount' />
          <input required className="donation-input" type="number" name='age' min={18} max={100} placeholder='Age' />
          <button className='submit' type='submit'>Pay</button>
        </form>
      }
      {/* <a href="upi://pay?pa=8824241615@axl&pn=SiddharthNalwaya&cu=INR&am=1"><button>Pay</button></a> */}
    </div>
  )
}

export default Donation