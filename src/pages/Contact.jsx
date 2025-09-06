
import { useState } from 'react'
import { Nav } from './../components/Nav/Nav.jsx'
import { Footer } from './../components/Footer/Footer.jsx'
import './Contact.css'


function Contact() {
    const [firstname, setfirstname] = useState('');
    const [firstnameerror, setfirstnameerror] = useState('');
    const [lastname, setlastname] = useState('');
    const [lastnameerror, setlastnameerror] = useState('');
    const [email, setemail] = useState('');
    const [emailerror, setemailerror] = useState('');
    const [phone, setphone] = useState('');
    const [phoneerror, setphoneerror] = useState('');
    const [message, setmessage] = useState('');
    var okay = true;

    async function contact(evt) {
        okay = true;
        doFN();
        doLN();
        doEM();
        doPH();
        if (okay) {
            /* 
            const url = '/sendemail';
            let formdata = {
                "firstname": firstname,
                "lastname": lastname,
                "email": email,
                "phone": phone,
                "message": message
            };
            
            try {
                const response = await fetch('/sendemail', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(formdata)
                })
                if(!response.ok){
                    const result = await response.json();
                    console.log(result);
                }else{
                    throw new Error(response.status);
                }
            }catch(error){
                console.log(error);
            }

            */
        } else {
            evt.preventDefault();
        }
    }
    function doFN() {
        if (firstname.length <= 2 && firstname.length != 0) {
            setfirstnameerror('Please enter your first name.'); okay = false;
        } else {
            setfirstnameerror('');
        }
    }
    function doLN() {
        if (lastname.length <= 2 && lastname.length != 0) {
            setlastnameerror('Please enter your last name.'); okay = false;
        } else {
            setlastnameerror('');
        }
    }
    function doEM() {
        if (email.length != 0 && (email.length <= 5 || !email.includes("@") || !email.includes("."))) {
            setemailerror('Please enter a valid email address.'); okay = false;
        } else {
            setemailerror('');
        }
    }
    function doPH() {
        let numbersregex = /^\d+$/g;
        let filterregex = /[ -.()]/g;
        let match = phone.replace(filterregex, '').match(numbersregex);
        if (Array.isArray(match)) {
            match = match[0];
        } else {
            match = "";
        }
        if (match.length <= 7 && phone.length != 0) {
            setphoneerror('Please enter your phone number with area code.'); okay = false;
        } else if (match.length < 10 && phone.length != 0) {
            setphoneerror('Please enter your phone number.'); okay = false;
        } else {
            setphoneerror('');
        }
    }

    const handlefirstname = () => { doFN(); }
    const handlelastname = () => { doLN(); }
    const handleemail = () => { doEM(); }
    const handlephone = () => { doPH(); }

    return (
        <>
            <div id="contactbg" className="design" src="/images/bg.png"><div></div></div>
            <div id="contact" className="infopage">       
                <form id="form" action="/contact">
                    <h1 className="fade1">Want to chat?</h1>
                    <h2 className="fade2">Let me hear from you.<br/>I'll get back to you as soon as I can!</h2>
                    <div className="input">
                        <label htmlFor="firstname">First name:{firstnameerror && <span className="err">{firstnameerror}</span>}</label>
                        <input id="firstname" className={firstnameerror && "inputerror"} type="text" name="firstname" value={firstname} onBlur={handlefirstname} onChange={(e) => setfirstname(e.target.value)} placeholder="First name" />
                    </div>

                    <div className="input">
                        <label htmlFor="lastname">Last name:{lastnameerror && <span className="err">{lastnameerror}</span>}</label>
                        <input id="lastname" className={lastnameerror && "inputerror"} type="text" name="lastname" value={lastname} onBlur={handlelastname} onChange={(e) => setlastname(e.target.value)} placeholder="Last name" />
                    </div>

                    <div className="input">
                        <label htmlFor="email">Email address:{emailerror && <span className="err">{emailerror}</span>}</label>
                        <input id="email" className={emailerror && "inputerror"} type="email" name="email" value={email} onBlur={handleemail} onChange={(e) => setemail(e.target.value)} placeholder="Email" />
                    </div>

                    <div className="input">
                        <label htmlFor="phone">Phone number:{phoneerror && <span className="err">{phoneerror}</span> }</label>
                        <input id="phone" className={phoneerror && "inputerror"} type="phone" name="phone" value={phone} onBlur={handlephone} onChange={(e) => setphone(e.target.value)} placeholder="XXX XXX XXXX" />
                    </div>

                    <div className="input">
                        <label>Message:</label>
                        <textarea name="message" placeholder="Drop me a line" onChange={(e) => setmessage(e.target.value)} value={message}></textarea>
                    </div>

                    <button id="submit" type="submit" onClick={contact}>Submit</button>
                </form>

                <div id="contactinfo">
                    <h1 className="fade1">My Information</h1>
                    <h2 className="fade2">You can get a hold of me with this information.</h2>

                    <a href="tel: 435-755-6703" className="contactcard">
                        <span>Phone (cell):</span>
                        <span>435-755-6703</span>
                    </a>
                    <a href="mailto: ryanschmidt0213@gmail.com" className="contactcard">
                        <span>Email address:</span>
                        <span>ryanschmidt0213@gmail.com</span>
                    </a>
                </div>
            </div>
            <Nav current="Contact" />
            <Footer />
        </>
    )
}
export default Contact





