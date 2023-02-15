import styled from "styled-components";
import { H2 } from "./FirstContainer";
import { Par } from "./HeaderComponent";

export default function SecondComponent() {
    return (
        <section>
            <H2>Supercharge your workflow</H2>
            <Par>We've got the tools to boost your productivity.</Par>
            <Gridbox1>
                <div>
                    <img src="../../images/icon-blacklist.svg" alt="icon-blacklist" />
                    <h3>Create blacklists</h3>
                    <StyledPar>Ensure sensitive information never makes its way to your clipboard by excluding certain sources.</StyledPar>
                </div>
                <div>
                    <img src="../../images/icon-text.svg" alt="icon-text" />
                    <h3>Plain text snippets</h3>
                    <StyledPar>Remove unwanted formatting from copied text for a consistent look.</StyledPar>
                </div>
                <div>
                    <img src="../../images/icon-preview.svg" alt="icon-preview" />
                    <h3>Sneak preview</h3>
                    <StyledPar>Quick preview of all snippets on your Clipboard for easy access.</StyledPar>
                </div>
            </Gridbox1>
            <Gridbox2>
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
            </Gridbox2>
        </section>
    )
}

const Gridbox1 = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 25%);
    place-content: center;

    @media screen and (max-width: 375px) {
        grid-template-columns: 100%;
        margin: 5rem 0;
        gap: 50px;
    }
`

const StyledPar = styled.p`
    padding: 0 2rem;
    letter-spacing: 1px;
    opacity: 0.5;
`

const Gridbox2 = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 15%);
    gap: 20px;
    margin: 8rem 0;
    place-content: center;

    @media screen and (max-width: 375px) {
        grid-template-columns: 100%;
        gap: 50px;
        margin: 6rem 0;
    }
`

