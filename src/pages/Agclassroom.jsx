import { Nav } from './../components/Nav/Nav.jsx'
import { Screenshot } from './../components/Screenshot/Screenshot.jsx'
import { Footer } from './../components/Footer/Footer.jsx'
import './Agclassroom.css'


function Agclassroom() {
    return (
        <>  
            <div className="infopage">
                <h1>National Agriculture in the Classroom</h1>
                <h2>USDA / NAITCO</h2>

                <hr />
                <Screenshot format="img" src="/images/agclassroom/thumb.jpg" float="left" height="sm" />
                <h3>Where Is This Being Hosted? What's the Overall Shape of This Code?</h3>
                <p>At the beginning of the project, we were not sure where the project would be hosted. There would be a main API for gaining access to the Curiculum Matrix and there were 8 or 9 state specific sites that would have to find a home.</p>
                <p className="code">With that ambiguity, I was sure to keep each site's code base as independent and modular as possible. Each state was given an API key specific to their location to allow for internal tracking and as a de facto authentication for more sensitive parts of the Matrix API. The location of the API key is also used to identify state specific lesson information, like state-specific standards and objectives.</p>
                
                <hr />
                <Screenshot format="img" src="/images/agclassroom/thumb.jpg" float="right" height="sm" />
                <h3>Slow Searching</h3>
                <p className="code">One of the biggest problems in the old system was that searching for lessons could take up to 15 seconds. As I analyzed the codebase to see why, I noticed that the database needed to be normalized and most of the filtering was done via the Cold Fusion app instead of in the database. Memory usage was also an issue. It took more than a week, but I wrote a PHP script to normalize the POSTgres database and save it to MySQL. After the database was normalized, the search function in the API was rewritten to utilize the speed of the database. When all was said and done, searches went from an average of 4-5 seconds to 60 milliseconds.  </p>
                                
                <hr />
                <Screenshot format="video" src="/images/agclassroom/findreplace.mp4" float="left" height="sm" />
                <h3>Find and Replace</h3>
                <p>After programmatically normalizing the database, there was still a lot of duplicated information that could not be normalized via code. In order to speed up the workflow for manually fixing this problem, I created a find/replace tool for the NAITC administrators. Administrators could search for a word in any part of the database. Results were given as a number that could be clicked and a modal showed up with the preview of the actual text where it matched. Clicking on edit would take you to the edit page. This saved hours and hours of adminstrator refactoring.</p>
                <p></p>

                <hr />
                <Screenshot format="img" src="/images/agclassroom/thumb.jpg" float="right" height="sm" />
                <h3></h3>
                <p></p>
                <p></p>

                <div className="clear"></div>
            </div>
            <Nav />
            <Footer />
        </>
    )
}
export default Agclassroom





