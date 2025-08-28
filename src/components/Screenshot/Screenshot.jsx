
import './Screenshot.css'

function AddMedia(props) {
    if (props.format == "img") {
        return <img src={props.src} loading="lazy" />;
    } else if (props.format == "video") {
        return <video autoPlay='true' muted='true' loop><source src={props.src}></source></video>
    }
}

export function Screenshot(props) {
    let classes = "screenshot " + props.float;
    if (props.height) {
        classes = classes + " " + props.height;
    }
    return (
        <>
            <div className={classes}>
                <AddMedia format={props.format} src={props.src} />
                <div className="shotoverlay"><span>Click for full size</span></div>
            </div>            
        </>
    )
}

