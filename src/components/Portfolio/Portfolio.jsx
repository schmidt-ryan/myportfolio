import { useState, useRef, useEffect } from 'react'
import './Portfolio.css'

const cards = [    
    {
        'id': 1,
        'title': 'Furniture Training Company',
        'client': '',
        'url': 'https://app.furnituretrainingcompany.com/',
        'imagesrc': '/images/ftc/ftc2.png',
        'design': 'Award-winning training for retail sales professionals in the furniture industry',
        'code': 'HTML5, Javascript, jQuery, 3D (Three.js, Sketchup), PHP, MySQL',
        'goto': '/furnituretrainingcompany'
    },
    {
        'id': 2,
        'title': 'Ag in the Classroom',
        'client': 'USDA',
        'url': 'https://agclassroom.org',
        'imagesrc': '/images/agclassroom/thumb.jpg',
        'design': "Rewrite of agclassroom.org's API, administration system, individual state's templating, media storage",
        'code': "Git, Linux, Bash, HTML5, Javascript, PHP, MariaDB",
        'goto': '/agclassroom'
    },
    {
        'id': 3,
        'title': 'Expedition Literacy',
        'client': 'Boystown',
        'url': 'https://reading.boystown.org/',
        'imagesrc': '/images/boystown/mainscreenA.png',
        'design': 'A suite of HMTL5 games targeting high schoolers with reading deficits teaching basic pronunciation',
        'code': 'HTML5, Javascript, PHP, MySQL',
        'goto': '/expeditionliteracy'
    },
    {
        'id': 4,
        'title': 'Growing a Nation',
        'client': 'USDA - Ag in the Classroom',
        'url': 'https://growinganation.org/',
        'imagesrc': '/images/growinganation/timeline.png',
        'design': 'An interactive timeline authored by admins in the USDA. Includes multimedia downloads and easy searching and bookmarking',
        'code': 'HTML5, Javascript, jQuery, Bootstrap, PHP, MySQL',
        'goto': '/growingnation'
    },
    {
        'id': 5,
        'title': 'Living with High Blood Pressure',
        'client': 'University of Chicago',
        'imagesrc': '/images/uic/brokenvessel.png',
        'design': 'An educational iOS app about how to live with high blood pressure',
        'code': 'Phonegap, iOS developer tools, HTML5, Javascript',
        'goto': '/bloodpressure'
    },
    {
        'id': 6,
        'title': 'O. W. Lee Brand Training',
        'client': 'O. W. Lee',
        'url': 'https://owlee.brandtrainingprogram.com',
        'imagesrc': '/images/owlee/thumb.jpg',
        'design': 'Brand-specific sales training for the O.W. Lee company, who creates heirloom quality outdoor furniture',
        'code': 'SVN, HTML5, Javascript, PHP, MariaDB',
        'goto': '/owlee'
    }
];

function AddAnchor({ title, anchor }) {
    if(anchor == "" || anchor == null) {
        return <h3>{title}</h3>;
    }else{
        return <h3><a href={anchor} target='_blank'>{title}</a></h3>
    }
}

function AddClient({ title }) {
    if(title == '' || title == null) {
        return;
    }else{
        return <p className="client">{title}</p>;
    }
}


export function Portfolio() {
    const shadowleft = useRef(null);
    const shadowright = useRef(null);
    const btnleft = useRef(null);
    const btnright = useRef(null);
    const slider = useRef(null);
    const [curPos, setCurPos] = useState(0);

    useEffect(() => {
        shadowleft.current.style.display = "none";
    });
    function slideleft() {
        let pos = curPos;
        pos--;
        if (pos < 0) {
            pos = 0;
        }
        setCurPos(pos);
    }
    function slideright() {
        let pos = curPos;
        pos++;
        if (pos == cards.length) {
            pos = cards.length - 1;
        }
        setCurPos(pos);
    }    

    return (
        <>
            <div id="portfolio">
                <div id="showportfolio"><div id="slider" className={"s" + curPos} ref={slider}>
                    {cards.map((card) => { 
                        return (
                            <div className="card" key={card.id}>
                                <div className="overlay"></div>
                                <div className="cardimage">
                                    <img src={card.imagesrc} loading="lazy" />
                                </div>
                                <AddAnchor title={card.title} anchor={card.url} />
                                <AddClient title={card.client} />
                                <p>{card.design}</p>
                                <p className="cardcode">{card.code}</p>
                                <a className="more" href={card.goto}>more...</a>
                            </div>
                        );
                    })}        
                </div></div>
                <div id="shadowleft" ref={shadowleft}></div>
                <div id="shadowright" ref={shadowright}></div>
                <button id="btnleft" className="navarrow" onClick={slideleft} ref={btnleft}></button>
                <button id="btnright" className="navarrow" onClick={slideright} ref={btnright}></button>
            </div>            
        </>
    )
}

