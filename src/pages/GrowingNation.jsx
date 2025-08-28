
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
                <p>This project was a way to turn some educational content into something interactive that would be easy for teachers to put up on a TV screen.</p>

                <hr />
                <Screenshot format="img" src="/images/growinganation/timeline.png" float="right" />
                <h3>Timeline</h3>
                <p className="code"></p>

                <hr />
                <Screenshot format="img" src="/images/growinganation/admin-addaudio.png" float="left" />
                <h3>Authoring Is Important</h3>
                <p></p>
                <p className="code"></p>

                <hr />
                <Screenshot format="img" src="/images/growinganation/search.png" float="right" />
                <h3>Adding in the Search</h3>
                <p className="code"></p>

                <div className="clear"></div>
            </div>
            <Nav />
            <Footer />
        </>
    )
}
export default GrowingNation





