import "../Styles/HeaderComponent/HeaderComponent.css"

export default function HeaderComponent() {
    return (
        <header className="header" media="(min-width:375px)">
            <img src="./images/logo.svg" alt="logo" />
            <h1 className="heading-text">A history of everything you copy</h1>
            <p className="par">
                Clipboard allows you to track and organize everything you 
                copy. Instantly access your clipboard on all your devices.
            </p>
            <div className="buttons-div">
                <button className="btn-1" otherColor>Download for iOS</button>
                <button className="btn-2">Download for Mac</button>
            </div>
        </header>
    )
}

