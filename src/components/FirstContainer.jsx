import styled from "styled-components";
import {Par} from "./HeaderComponent"

export default function FirstComponent() {
    return (
        <section>
            <H2>Keep track of your snippets</H2>
            <Par>
                Clipboard instantly stores any item you copy in the cloud, 
                meaning you can access your snippets immediately on all your 
                devices. Our Mac and iOS apps will help you organize everything.
            </Par>
            <Gridbox>
                <Img src="../../images/image-computer.png" alt="computer" />
                <Flexbox>
                        <div>
                            <H3>Quick Search</H3>
                            <StyledPar>Easily search your snippets by content, category, web address, application, and more.</StyledPar>
                        </div>
                        <div>
                            <H3>iCloud Sync</H3>
                            <StyledPar>Instantly saves and syncs snippets across all your devices.</StyledPar>
                        </div>
                        <div>
                            <H3>Complete History</H3>
                            <StyledPar>Retrieve any snippets from the first moment you started using the app.</StyledPar>
                        </div>
                </Flexbox>
            </Gridbox>
            <H2>Access Clipboard anywhere</H2>
            <Par>
                Whether you're on the go, or at your computer, you can access all your Clipboard 
                snippets in a few simple clicks.
            </Par>
            <Img src="../../images/image-devices.png" alt="devices" />
        </section>
    )
}

export const H2 = styled.h2`
    color: #000000;
    margin: 4rem 0 0;
`

const Gridbox = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 45%);
    gap: 150px;
    grid-template-rows: 85%;

    @media screen and (max-width: 375px) {
        grid-template-columns: repeat(1, 50%);
        grid-template-rows: 20% 70%;
        justify-content: center;
        gap: 80px;
    }
`

const Img = styled.img`
    @media screen and (max-width: 375px) {
        width: 100%;
        margin: 2rem 0 2rem;
    }
`

const Flexbox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: left;
    text-align: left;

    @media screen and (max-width: 375px) {
        text-align: center;
        align-items: center;
        
    	}
`

const H3 = styled.h3`
    margin: 0 0 1rem;
    font-size: 1.2rem;
`

const StyledPar = styled.p`
    margin: 0;
    padding: 0 10rem 0 0;
    opacity: 0.5;
    letter-spacing: 1px;

    @media screen and (max-width: 375px) {
        padding: 0;
        margin: 0 0 3rem;
    }
`