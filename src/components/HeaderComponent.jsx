import styled from "styled-components";

export default function HeaderComponent() {
    return (
        <Header media="(min-width:375px)" srcset="">
            <img src="./images/logo.svg" alt="logo" />
            <H1>A history of everything you copy</H1>
            <Par>
                Clipboard allows you to track and organize everything you 
                copy. Instantly access your clipboard on all your devices.
            </Par>
            <Buttons>
                <StyledButton otherColor>Download for iOS</StyledButton>
                <StyledButton>Download for Mac</StyledButton>
            </Buttons>
        </Header>
    )
}

const Header = styled.header`
    padding: 4rem 5rem;
    background-image: url("../../images/bg-header-desktop.png");
    background-repeat: no-repeat;
    background-size: cover;
    @media screen and (max-width: 375px) {
        background-image: url("../../images/bg-header-mobile.png");
    }
`

const H1 = styled.h1`
    font-size: 2.5rem;
    letter-spacing: 1px;
    margin: 2rem 0 0;
    @media screen and (max-width: 375px){
        font-size: 1.5rem;
        margin: 2.5rem 0 0;
    }
`

export const Par = styled.p`
    opacity: 0.5;
    padding: 0 25rem;
    font-size: 15px;
    margin: 0.7rem 0 2.5rem;
    @media screen and (max-width: 375px) {
        padding: 0 1.2rem;
        margin: 0.9rem 0;
    }
`

export const Buttons = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 13%);
    place-content: center;
    gap: 15px;
    @media screen and (max-width: 375px) {
        grid-template-columns: repeat(1, 80%);
    }
`

export const StyledButton = styled.button`
    @import url('https://fonts.googleapis.com/css2?family=Bai+Jamjuree:wght@400;600&display=swap');
    font-family: 'Bai Jamjuree', sans-serif;
    background-color: ${props => props.otherColor ? "hsl(171, 66%, 44%)" : "hsl(233, 100%, 69%)"};
    border: none;
    border-radius: 20px;
    cursor: pointer;
    padding: 0.8rem 1.8rem;
    color: #ffffff;
    box-shodow: ${props => props.otherColor ? "hsl(171, 66%, 44%)" : "hsl(233, 100%, 69%)"} 0px 10px 24px;

    &:hover {
        filter: brightness(110%);
    }
`
