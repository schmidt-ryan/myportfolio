import { Nav } from './../components/Nav/Nav.jsx'
import { Footer } from './../components/Footer/Footer.jsx'
import { Screenshot } from './../components/Screenshot/Screenshot.jsx'
import './Furnituretrainingcompany.css'


function Furnituretrainingcompany() {
    return (
        <>  
            <div className="infopage">
                <h1>Furniture Training Company</h1>
                <h2>Sales training for retail furniture sales professionals</h2>

                <hr />
                <Screenshot format="video" src="/images/ftc/sizzle.mp4" float="right" />
                <div className="side">
                    <h3>The Sizzle</h3>
                    <p>Everyone knows that adding some spice to your visuals can increase engagement and entice users into using your product. E-learning is no different than any other endeavor in that way.</p>
                    <p>In our coursework we added transitions, animations, and user interactions to engage their senses and stimulate attention.</p>
                    <p>It's not all flash however &mdash; purposeful movement and animation can even help aid understanding and guide user attention to the proper places.</p>
                </div>

                <hr />
                <Screenshot format="img" src="/images/ftc/managertools.jpg" float="left" />
                <div className="side">
                    <h3>What Do Supervisors Want?</h3>
                    <p>Originally, all of the administration behind the scenes was done via phone call with account representatives. As time went on, we realized that managers and buyers wanted and needed more control over company settings and user accounts.</p>
                    <p>After lengthy discussion, we settled on several workflows that could easily be automated by managers. We were able to create an online store and Manager Tools such as: adding and removing employees, employee progress tracking, manager worksheet checking, a company-wide learning pace, and the ability to add/remove training access. </p>
                    <p>Over time, several iterations of employee progress were tried until our customers started giving back nearly universal good feedback. The key was to get the managers involved to aid retention and keep employees moving through coursework.</p>
                </div>

                <hr />
                <Screenshot format="video" src="/images/ftc/3dmodel.mp4" float="right" />
                <div className="side">
                    <h3>Visualizing Furniture in 3D</h3>
                    <p>The purpose of the Furniture Product Knowledge course is to help learners to identify the major styles of furniture. I suggested that we should give learners a 3D version of each style to allow for playful manipulation of a 3D model and reinforce the visual learning.</p>
                    <p className="code">I used SketchUp and the 3D Warehouse to find free models of hundreds of furniture examples. This effort took some <strong>very quick</strong> editing and clever texturing - using a custom url that loaded textures based on an authored setting on the application side. By embedding the custom application url in the Collada files after they were exported from SketchUp, we could standardize the textures for each model via the FTC application instead of using the hard coded relative links from SketchUp. This setup made global changes easy and avoided the need to update hundreds of .collada files.</p>
                </div>

                <hr />
                <Screenshot format="video" src="/images/ftc/custom_theme.mp4" float="left" />
                <div className="side">
                    <h3>Custom Styling</h3>
                    <p>Many companies want a custom whitelisting of the training. In order to allow for companies to customize their own branding, a tool was created to allow buyers to customize the overall color scheme and add logos. Any changes to the theme were shown in real time so that buyers could make quick, confident decisions easily.</p>
                    <p className="code">In order to keep the visualizing code DRY, the user's session was used to store any changes to the theme and shown via existing pages. This functionality mirrored what would happen when the new theme was saved, so what you see is what you get - without creating special example pages for the visualizer.</p>
                </div>

                <hr />
                <Screenshot format="video" src="/images/ftc/jackpot.mp4" float="right" />
                <div className="side">
                    <h3>Learning Can Be Fun</h3>
                    <p>The Furniture Training Company has a suite of three games that users with an active account can play, regardless of whether or not they are paying for training.</p>
                    <p>We found these to be very popular, and we even had managers complaining off-hand that their salespeople were playing the games when they should be paying attention to the floor.</p>
                    <p>Pulling the slot machine arm to start the game was an extra, unnecessary step, but I thought it helped to sell the illusion that you are playing the actual game.</p>
                </div>
                <div className="clear"></div>
            </div>
            <Nav />
            <Footer />
        </>
    )
}
export default Furnituretrainingcompany





