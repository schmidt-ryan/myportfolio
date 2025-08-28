
import { Nav } from './../components/Nav/Nav.jsx'
import { Footer } from './../components/Footer/Footer.jsx'
import './Contact.css'


function Contact() {
    return (
        <>
            <div id="contactbg" className="design" src="/images/bg.png"><div></div></div>
            <div id="contact" className="infopage">       
                <form id="form" action="/contact">
                    <h1 className="fade1">Want to chat?</h1>
                    <h2 className="fade2">Let me hear from you.<br/>I'll get back to you as soon as I can!</h2>
                    <div className="input">
                        <label>First name:</label>
                        <input name="firstname" defaultValue="" placeholder="First name" />
                    </div>

                    <div className="input">
                        <label>Last name:</label>
                        <input name="lastname" defaultValue="" placeholder="Last name" />
                    </div>

                    <div className="input">
                        <label>Email address:</label>
                        <input name="email" defaultValue="" placeholder="Email" />
                    </div>

                    <div className="input">
                        <label>Phone number:</label>
                        <input name="phone" defaultValue="" placeholder="(XXX) XXX XXXX" />
                    </div>

                    <div className="input">
                        <label>Message:</label>
                        <textarea name="line" placeholder="Drop me a line"></textarea>
                    </div>

                    <button id="submit">Submit</button>
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





