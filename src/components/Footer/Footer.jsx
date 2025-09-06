import './Footer.css'

export function Footer() {
    let date = new Date;
    date = date.getFullYear();
    return (
        <>
            <div id="footer">
                <span>Copyright &copy; {date}, Ryan Schmidt</span>
            </div>
        </>
    )
}

