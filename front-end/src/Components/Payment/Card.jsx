import React,{useState} from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import Layout from "../Layout/Layout"
import Navabar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { successMsg } from "../../utils/message";
import axios from "axios"

const  PaymentForm =()=> {
    const dispatch = useDispatch()
    const ItemList = useSelector((state) => state);
   const  history = useHistory()
    const [payment, setPayment] = useState({
        cvc: '',
        expiry: '',
        focus: '',
        name: '',
        number: '',
    })
    
    console.log(ItemList);

  const  handleInputFocus = (e) => {
        setPayment({
            ...payment,
            focus: e.target.name });
    }

   const handleInputChange = (e) => {
        const { name, value } = e.target;

        setPayment({
            ...payment,
            [name]: value
        })
       
    }

    const MsgSend = async (email) => {
        await axios.post("http://localhost:3002/api/msg", { email: email })
            .then(res => console.log(res))
    }

   const  HandleSubmit = () => {

    if(payment.number.length === 16 && payment.cvc.length === 3 && payment.expiry.length === 5){

       MsgSend(ItemList.email)

        successMsg(true, "Product Perchanges Successful")
        dispatch({ type: "REMOVE_ALL_ITEM" });
       history.push("/user/deshbord")
    }else{
        if(payment.number.length !== 16){
            window.alert("Please Enter Valid Card Number")
        }else if(payment.cvc.length !== 3){
            window.alert("Please Enter 3 Digit CVC")
        }else if(payment.expiry.length !== 4){
            window.alert("Please Enter 4 Digit Expiry")
        }   else{
            MsgSend(ItemList.email)

            successMsg(true, "Product Perchanges Successful")
            dispatch({ type: "REMOVE_ALL_ITEM" });
           history.push("/user/deshbord")
        }
        
    }

    };

   
        return (
            <Layout title="Payment">
                <Navabar></Navabar>


                <button style={{paddingTop : "100px"}} className='btn btn-success mt-3 mx-2' onClick={()=> history.goBack()}>Go Back</button>
            <div id="PaymentForm" className="my-5 text-center">
                <Cards
                        cvc={payment.cvc}
                        expiry={payment.expiry}
                        focused={payment.focus}
                        name={payment.name}
                        number={payment.number}
                />
                <div className="container">
                    <div className="row">

                        <div className="col-4 offset-4 my-3">

                     
                <form>
                    <input
                        type="tel"
                        name="number"
                        placeholder="Card Number"
                        onChange={(e) => handleInputChange(e)}
                        onFocus={(e) => handleInputFocus(e)}
                        className="form-control my-2"
                    />
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Full Name"
                                        onChange={(e) => handleInputChange(e)}
                                        onFocus={(e) => handleInputFocus(e)}
                                        className="form-control my-2"
                        />
                        <input
                            type="number"
                            name="expiry"
                            placeholder="expiry"
                                        onChange={(e) => handleInputChange(e)}
                                        onFocus={(e) => handleInputFocus(e)}
                                        className="form-control my-2"
                        />

                        <input
                            type="number"
                            name="cvc"
                            placeholder="Cvc Number"
                            onChange={(e) =>handleInputChange(e)}
                                        onFocus={(e) => handleInputFocus(e)}
                                        className="form-control my-2"
                        />
                   
                                    <button  className="custom-btn btn-9" style={{fontWeight : "bold"}}
                                    onClick={HandleSubmit}
                                    >Payment</button>
                </form>
                </div>
                        </div>
                    </div>
            </div>
                <Footer></Footer>
            </Layout>
        );
   
}


export default PaymentForm