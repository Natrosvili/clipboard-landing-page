import "../Styles/SecondComponent/SecondComponent.css"

export default function SecondComponent() {
    return (
        <section>
            <h2 className="h2-heading">Supercharge your workflow</h2>
            <p className="par">We've got the tools to boost your productivity.</p>
            <div className="grid-box-1">
                <div>
                    <img src="../../images/icon-blacklist.svg" alt="icon-blacklist" />
                    <h3>Create blacklists</h3>
                    <p className="styled-par-2">Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</p>
                </div>
                <div>
                    <img src="../../images/icon-text.svg" alt="icon-text" />
                    <h3>Plain text snippets</h3>
                    <p className="styled-par-2">Remove unwanted formatting from copied text for a consistent look.</p>
                </div>
                <div>
                    <img src="../../images/icon-preview.svg" alt="icon-preview" />
                    <h3>Sneak preview</h3>
                    <p className="styled-par-2">Quick preview of all snippets on your Clipboard for easy access.</p>
                </div>
            </div>
            <div className="grid-box-2">
                <div>
                    <img src="../../images/logo-google.png" alt="Google logo" />
                </div>
                <div>
                    <img src="../../images/logo-ibm.png" alt="IBM logo" />
                </div>
                <div>
                    <img src="../../images/logo-microsoft.png" alt="Microsoft logo" />
                </div>
                <div>
                    <img src="../../images/logo-hp.png" alt="Hewlett Packard Enterprise logo" />
                </div>
                <div>
                    <img src="../../images/logo-vector-graphics.png" alt="Vector Graphics logo" />
                </div>
            </div>
        </section>
    )
}
