
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
                <p className="code">This project was written in javascript, HTML5, and CSS2. In order for it to run on iPads, it was converted with PhoneGap (which turned into Cordova when it was bought by Google), a platform for coverting HTML5 into mobile applications.</p>

                <hr />
                <Screenshot format="video" src="/images/uic/damages.mp4" float="right" height="sm" />
                <h3>Give 'Em Something To Do</h3>
                <p>We could have just had the narrator explain the damage done to a person's body by hypertension, but where's the fun in that?</p>
                <p>This section gave me a real chance to do some fun animations and illustrations. Tapping the kidney screen toggles an overlay of a healthy organ vs. an unhealthy organ. Each animation was designed to vividly show the damage done by hypertension, and I think drives home the danger more than simple narration.</p>

                <hr />
                <Screenshot format="img" src="/images/uic/brokenvessel.png" float="left" height="lrg" />
                <h3>Living the Dream</h3>
                <p>Before going into web development and graphic design, I had flirted with going to medical school to become a medical illustrator. This project helped me scratch the itch - I drew all of the medical illustrations in Photoshop.</p>
                <p>I'm not sure that everything is exactly to scale and the colors are false (different in reality), but I did a lot of looking before illustrating each image to get as close as I could to correct anatomy.</p>

                <hr />
                <Screenshot format="img" src="/images/uic/foods.png" float="right" height="lrg" />
                <h3>Cool Visuals</h3>
                <p>I don't have any great explanation for this image, but I've always liked it. This section is about food that helps/hinders healthy nutrition, and I've always like the duality of the white/black sections. The left side slides up and the right side slides down while the narrator is talking - the two sides couldn't be more different - just like the healthy/unhealthy foods.</p>
                <p>That right side sure makes my mouth water...</p>

                <div className="clear"></div>
            </div>
            <Nav />
            <Footer />
        </>
    )
}
export default BloodPressure





