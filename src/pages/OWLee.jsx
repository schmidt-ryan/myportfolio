
import { Screenshot } from './../components/Screenshot/Screenshot.jsx'
import { Nav } from './../components/Nav/Nav.jsx'
import { Footer } from './../components/Footer/Footer.jsx'
import './OWLee.css'


function OWLee() {
    return (
        <>  
            <div className="infopage">
                <h1>O.W. Lee Training</h1>
                <h2>O.W. Lee Company | salesperson training for heirloom quality furniture</h2>

                <hr />
                <Screenshot format="img" src="/images/owlee/dashboard.png" float="left" height="med" />
                <h3>Get To The Point</h3>
                <p>O.W. Lee came to us to create some custom training for their dealers to unify the message sent to their salespeople throughout the country.</p>
                <p>This program does not do anything else but deliver training, so I went with a card approach in order to get users right into taking training. The unique images in each card help differentiate each lesson and add a certain amount of panache, since the imagery is very nice. Based on the user's progress - not started, started, taken the quiz, done the worksheet - the UI changes to move the user onto the next step and show progress at a glance.</p>

                <hr />
                <Screenshot format="img" src="/images/owlee/simplicity2.png" float="right" height="sm" />
                <h3>Selling the Salesperson</h3>
                <p>The imagery given to us to use in O.W. Lee's coursework was exemplary. Making their user interface look good was a lot easier when it was full of these images, and in the end, I kept the interface as simple and unobtrusive as I could. I wanted the photography to shine - and it does! One of the purposes of the course, besides teaching the concepts, is to impress the salespeople who sell the product. If they can fall in love with the aesthetics of this heirloom furniture, it makes selling it much easier, since the salesperson has bought in.</p>

                <hr />
                <Screenshot format="img" src="/images/owlee/simplicity2.png" float="left" height="sm" />
                <h3>Keep It Simple, Stupid</h3>
                <p>The interface elements and text from the coursework were kept out of the middle of the page for the most part. While important, I wanted to keep the great imagery front and center.</p>
                <p>Because there wasn't a lot of room to put text and extra fluff onto the screen, it forced the authors of the content to be more sparing in what made it to the screen, which ended up making for a better overall product.</p>

                <hr />
                <Screenshot format="img" src="/images/owlee/firetable.png" float="right" height="sm" />
                <h3>High Resolution Imagery</h3>
                <p>We were given full sized images from O.W. Lee right off of the camera, which allowed us to add a "2x" version of every image.</p>
                <p>(It's wonderful working with people who know what they are doing...)</p>
                <p className="code">I used the javascript property "devicePixelRatio" to see how the physical pixels map onto CSS. Most screens return a 1:1 (1). Higher density screens such as iPads or phones will return a higher number. I wrote in a check into the javascript library that loads each page to use either the regular images or a "2x" version. While it is more authoring work and requires more storage, the results speak for themselves. The program looks great on high-resolution screens. I also used svgs as extensively as possible, to keep that extra sharp look.</p>

                <div className="clear"></div>
            </div>
            <Nav />
            <Footer />
        </>
    )
}
export default OWLee





