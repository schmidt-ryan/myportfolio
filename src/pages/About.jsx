
import { Nav } from './../components/Nav/Nav.jsx'
import { Footer } from './../components/Footer/Footer.jsx'
import './About.css'


function About() {
    return (
        <>
            <div id="aboutbg" className="code" src="/images/bg.png"><div></div></div>
            <div className="infopage">
                <div id="ovalbox"><div id="oval">
                    <img src="/images/about/ryan.png" />
                </div></div>
                <div id="about">
                    <h1 className="fade1">Hey, my name is Ryan</h1>
                    <h2 className="fade2">... and I love building websites</h2>
                    <p>I live in North Logan, Utah. I have 4 cute kids and I love fishing, woodworking, and learning languages. Right now I am learning Spanish on Duolingo - y aprender idiomas es muy dificil, pero me gusta hablar con mis amigos.</p>
                    <p>I've been building websites since 2009. I love the arts of design and programming. I like all of the parts of full-stack development.</p>
                    <p><a href="mailto:ryanschmidt0213@gmail.com">Email me</a> me if you need help building something interesting! </p>
                </div>
                <div className="clear"></div>
            </div>
            <Nav current="About" />
            <Footer />
        </>
    )
}
export default About





