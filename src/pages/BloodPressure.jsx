
import { Screenshot } from './../components/Screenshot/Screenshot.jsx'
import { Nav } from './../components/Nav/Nav.jsx'
import { Footer } from './../components/Footer/Footer.jsx'
import './BloodPressure.css'


function BloodPressure() {
    return (
        <>  
            <div className="infopage">
                <h1>Living with High Blood Pressure</h1>
                <h2>University of Chicago</h2>

                <hr />
                <Screenshot format="img" src="/images/uic/splash.png" float="left" height="lrg" />
                <h3>Specific Audience</h3>
                <p>This project was for hypertensive middle-aged hispanic men - a very specific audience. Interestingly enough, even with this narrow scope, when we released it to the Apple platform it got quite a few downloads with no promotion.</p>
                <p className="code">This project was written in javascript, HTML5, and CSS2. In order for it to run on iPads, it was converted with PhoneGap, a Google platform for mobile development.</p>

                <hr />
                <Screenshot format="img" src="/images/uic/activity.png" float="right" height="lrg" />
                <h3>Keep It Simple</h3>
                <p>Many people don't know the difference between healthy and unhealthy foods.</p>

                <hr />
                <Screenshot format="img" src="/images/uic/brokenvessel.png" float="left" height="lrg" />
                <h3>Living the Dream</h3>
                <p>Before going into web development and graphic design, I had flirted with going to medical school to become a medical illustrator. This project helped me scratch the itch - I drew all of the medical illustrations in Photoshop.</p>
                <p className="code"></p>

                <hr />
                <Screenshot format="img" src="/images/uic/foods.png" float="right" height="lrg" />
                <h3></h3>
                <p className="code"></p>

                <div className="clear"></div>
            </div>
            <Nav />
            <Footer />
        </>
    )
}
export default BloodPressure





