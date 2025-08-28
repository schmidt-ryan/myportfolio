
import { Screenshot } from './../components/Screenshot/Screenshot.jsx'
import { Nav } from './../components/Nav/Nav.jsx'
import { Footer } from './../components/Footer/Footer.jsx'
import './Literacy.css'


function Literacy() {
    return (
        <>  
            <div className="infopage">
                <h1>Expedition Literacy</h1>
                <h2>Boystown</h2>

                <hr />
                <Screenshot format="img" src="/images/boystown/mainscreenA.png" float="left" height="med" />
                <h3>No Offence</h3>
                <p>The intended audience for this suite of games is high school aged children with reading difficulties. When starting this project, one of the directions from Boystown was <strong>not</strong> to make the visual style for the games cartoonish. The prevailing wisdom was that a cartoonish program would not be recieved well by students who might think that cartoonish games are condescending.</p>
                <p>After a couple of style variations were considered, the current photographic style and sans-serif font was chosen. The yellow outlined gradient was used for all of the actionable buttons and links.</p>

                <hr />
                <Screenshot format="img" src="/images/boystown/medalsA.png" float="right" height="med" />
                <h3>Reporting</h3>
                <p>A big part of the program was creating useful reporting for teachers as well as students.</p>
                <p>Part of the gamification of the program was to add a points system for the students where they could earn Medal Points for their progress. It also added an "at a glance" reporting opportunity for teachers to quickly scan for progress.</p>
                
                <hr />
                <Screenshot format="video" src="/images/boystown/canadian.mp4" float="left" height="sm" />
                <h3>Using the GPU</h3>
                <p className="code">The canvas object is used here to keep the animations smooth and get the heavy lifting moved over to the GPU. The initial render of the entire list of letters and drawings of the ice floes are done on a canvas hidden on the page. Any changes to the state of the ice floe are rendered on this object. Every render tick is rendered on another canvas that is shown on the screen. While this rendering method uses more memory, the frame rate was sped up quite a bit with this method.</p>
                <p className="code">I liked the look of the curve of the sine wave, so I incorporated the portion of the sine wave from 0 to 2&pi; in the custom easing function I wrote when throwing the snowballs at the letters on the ice.</p>

                <hr />
                <Screenshot format="video" src="/images/boystown/kenyan.mp4" float="right" height="sm" />
                <h3>A Lot of Trigonometry</h3>
                <p>This game is much like Frogger, where the Masaii man is moved forward into the white sections to choose a word past all of the savannah animals.</p>
                <p className="code">The canvas was also used here to smooth out the animations of the animals' legs and the edge to edge sliding. There was a lot of trigonometry in getting the legs to move fluidly.</p>
                <p className="code">If I could do it again, I would add key listeners so users could use the arrow buttons on their keyboard, instead of only using the buttons on the screen.</p>

                <div className="clear"></div>
            </div>
            <Nav />
            <Footer />
        </>
    )
}
export default Literacy





