
import { Screenshot } from './../components/Screenshot/Screenshot.jsx'
import { Nav } from './../components/Nav/Nav.jsx'
import { Footer } from './../components/Footer/Footer.jsx'
import './GrowingNation.css'


function GrowingNation() {
    return (
        <>  
            <div className="infopage">
                <h1>Growing A Nation</h1>
                <h2>USDA</h2>

                <hr />
                <Screenshot format="img" src="/images/growinganation/index.png" float="left" />
                <h3>Growing A Nation</h3>
                <p>This project started out as a set of lessons that were turned into an interactive timeline. The client wanted something that was easy to peruse at a glance.</p>
                <p>The project called for a basic timeline populated from a database and an adminstration section to allow for information and media to be added, rearranged, and deleted.</p>

                <hr />
                <Screenshot format="img" src="/images/growinganation/timeline.png" float="right" />
                <h3>Organizing the Timeline</h3>
                <p>Each era has multiple sections of tiles and are controlled by the green buttons on the top right. Clicking on a tile opens up more information below the fold.</p>
                <p className="code">All of the javascript for the timeline was custom written to control the interaction on the screen. There was a lot of organization that had to happen on the DOM and some clever "id"s that made this possible.</p>

                <hr />
                <Screenshot format="img" src="/images/growinganation/admin-addaudio.png" float="left" />
                <h3>Authoring</h3>
                <p>Creating an easy to understand, navigate, and use administration section was of the utmost importance, since someone on the client staff would be taking over the site after it was released in production.</p>
                <p className="code">All media was given upload pages that normalized file naming, set up user information (titles, captions, etc), asked for different file extensions (to account for browser differences), and allow for users to download for personal use.</p>
                <p className="code">To increase usability, several options were given to allow for uploads - drag and drop as well as browsing the users' filesystem.</p>

                <hr />
                <Screenshot format="img" src="/images/growinganation/search.png" float="right" />
                <h3>Adding in the Search</h3>
                <p>The search feature was a great idea, but it came after everything was done. Luckily, the different parts of the timeline system were modularized quite a bit, so shoehorning this feature into the program was not super difficult.</p>
                <p>The user was given a search box that returned a list of matches ordered by big tiles and then sub-events. Clicking on a "go to" link would go to a new url, slide the timeline to the tile, and then to the sub-event if needed.</p>
                <p>By adding a way to dynamically create urls to specific tiles and sub-events, bookmarking became easier and specific urls could be passed around.</p>

                <div className="clear"></div>
            </div>
            <Nav />
            <Footer />
        </>
    )
}
export default GrowingNation





