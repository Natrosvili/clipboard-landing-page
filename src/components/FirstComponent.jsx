import "../Styles/FirstComponent/FirstComponent.css"

export default function FirstComponent() {
    return (
        <section>
            <h2 className="snippets">Keep track of your snippets</h2>
            <p className="par">
                Clipboard instantly stores any item you copy in the cloud, 
                meaning you can access your snippets immediately on all your 
                devices. Our Mac and iOS apps will help you organize everything.
            </p>
            <div className="grid-box">
                <img className="img-device" src="../../images/image-computer.png" alt="computer" />
                <div className="flex-box">
                        <div>
                            <h3 className="h3-heading">Quick Search</h3>
                            <p className="styled-par-1">Easily search your snippets by content, category, web address, application, and more.</p>
                        </div>
                        <div>
                            <h3 className="h3-heading">iCloud Sync</h3>
                            <p className="styled-par-1">Instantly saves and syncs snippets across all your devices.</p>
                        </div>
                        <div>
                            <h3 className="h3-heading">Complete History</h3>
                            <p className="styled-par-1">Retrieve any snippets from the first moment you started using the app.</p>
                        </div>
                </div>
            </div>
            <h2 className="snippets">Access Clipboard anywhere</h2>
            <p className="par">
                Whether you're on the go, or at your computer, you can access all your Clipboard 
                snippets in a few simple clicks.
            </p>
            <img className="img-devices" src="../../images/image-devices.png" alt="devices" />
        </section>
    )
}
