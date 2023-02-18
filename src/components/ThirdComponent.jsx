import "../Styles/ThirdComponent/ThirdComponent.css"

export default function ThirdComponent() {
    return (
        <section>
            <h2 className="h2-heading">Clipboard for iOS and Mac OS</h2>
            <p className="par">
                Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
                and you're ready to start adding to your clipboard.
            </p>
            <div className="buttons-div">
                <button className="btn-1">Download for iOS</button>
                <button className="btn-2">Download for Mac</button>
            </div>
        </section>
    )
}