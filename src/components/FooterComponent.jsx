import styled from "styled-components";
import { Icon } from '@iconify/react';

export default function Footer() {
    return (
        <StyledFooter>
            <Gridbox>
                <div>
                    <LogoImg src="../../images/logo.svg" alt="logo" />
                </div>
                <StyledDiv>
                    <p>FAQs</p>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                    <p>Press Kit</p>
                    <p>Install Guide</p>
                </StyledDiv>
                <SocialMedia>
                    <img src="../../images/icon-facebook.svg" alt="facebook logo" />
                    <img src="../../images/icon-twitter.svg" alt="twitter logo" />
                    <Icon icon="logos:instagram-icon" width="24" color="black"/>
                </SocialMedia>
            </Gridbox>
        </StyledFooter> 
    )
}


const StyledFooter = styled.footer`
    background-color: lightgrey;
    height: 20vh;
    margin: 8rem 0 0 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media screen and (max-width: 375px) {
        flex-direction: row;
        height: 55vh;
    }
`

const LogoImg = styled.img`
    width: 20%;

    @media screen and (max-width: 375px) {
        width: 40%;
    }
`

const Gridbox = styled.div`
    display: grid;
    grid-template-columns: 20% 50% 20%;
    place-content: center;


    @media screen and (max-width: 375px) {
        grid-template-columns: 100%;
        grid-template-rows: 15% 60% 10%;
    }
`

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 20%);
    gap: 30px;
    opacity: 0.8;

    @media screen and (max-width: 375px) {
        grid-template-columns: 100%;
        grid-template-rows: repeat(5, 10%);
    }


    p {
        margin: 0;
        cursor: pointer;
        font-size: 0.9rem;

        &:hover {
            color: hsl(171, 66%, 44%); 
            opacity: 0.9;
        }
    

    }
`

const SocialMedia = styled.div`
    display: grid;
    place-content: center;
    grid-template-columns: repeat(3, 10%);

    @media screen and (max-width: 375px) {
        grid-template-columns: repeat(3, 40%);
        justify-content: space-between;
        align-items: center;
    }
    
    img {
        cursor: pointer;
        
        &:hover {
            color: hsl(201, 60%, 40%);
        }
    }
`