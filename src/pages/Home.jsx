
import { useRef, useEffect } from 'react'
import { Nav } from './../components/Nav/Nav.jsx'
import { Footer } from './../components/Footer/Footer.jsx'
import { Portfolio } from './../components/Portfolio/Portfolio.jsx'
import './Home.css'

function Home() {
    const canvas = useRef(null);
    const whitedots = new Array();
    const num = 300;

    useEffect(() => {
        window.console.log('render Home');
        for (let i = 0; i < num; i++) {
            let x = Math.round(Math.random() * 300);
            let y = Math.round(Math.random() * 300);
            let opacity = Math.round(Math.random() * 0.7) + 0.3;
            let radius = Math.round(Math.random() * 1) + 1;
            let speedX = (Math.round(Math.random() * 10) - 5) * 0.1;
            if (speedX == 0) { speedX = 0.1; }
            let speedY = (Math.round(Math.random() * 10) - 5) * 0.1;
            if (speedY == 0) { speedY = 0.1; }
            whitedots.push([x, y, opacity, radius, speedX, speedY]);
        }
        requestAnimationFrame(drawcanvas);
    }, []);

    function drawcanvas() {
        let wd = whitedots;
        let ctx = canvas.current.getContext("2d");
        ctx.clearRect(0, 0, 300, 300);
        ctx.fillStyle = '#ffffff';
        for (let j = 0; j < num; j++) {
            let newx = wd[j][0] + wd[j][4];
            let newy = wd[j][1] + wd[j][5];
            if (newx > 300 || newx < 0) {
                wd[j][4] = wd[j][4] * -1;
            }
            if (newy > 300 || newy < 0) {
                wd[j][5] = wd[j][5] * -1;
            }
            wd[j][0] = newx;
            wd[j][1] = newy;
            ctx.beginPath();
            ctx.globalAlpha = wd[j][2];
            ctx.arc(wd[j][0], wd[j][1], wd[j][3], 0, (2 * Math.PI), true);
            ctx.closePath();
            ctx.fill();
        }
        requestAnimationFrame(drawcanvas);
    }
    return (
        <>
            <div id="box"></div>
            <div id="home">
                <img id="bg" src="images/bg.png" alt="" />

                <img id="design" src="images/design.svg" />
                <img id="code" src="images/code.svg" />

                <div className="box design"></div>
                <div className="box development"></div>

                <div id="circle">
                    <canvas id="canvas" width="300" height="300" ref={canvas}></canvas>
                    <img src="images/rs_logo.svg" alt="RS logo" />
                </div>
                <p id="love">This site was cooked up<br/>with love and React.js</p>
                <Portfolio />
                <Nav current="Home" />
            </div>
            <Footer />
        </>
    )
}
export default Home





