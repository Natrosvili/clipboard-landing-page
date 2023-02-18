import "../Styles/FooterComponent/FooterComponent.css"
import { Icon } from '@iconify/react';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-grid-box">
                <div>
                    <img className="footer-logo" src="../../images/logo.svg" alt="logo" />
                </div>
                <div className="footer-styled-div">
                    <p>FAQs</p>
                    <p>Contact Us</p>
                    <p>Privacy Policy</p>
                    <p>Press Kit</p>
                    <p>Install Guide</p>
                </div>
                <div className="social-media-div">
                    <img src="../../images/icon-facebook.svg" alt="facebook logo" />
                    <img src="../../images/icon-twitter.svg" alt="twitter logo" />
                    <Icon icon="logos:instagram-icon" width="24" />
                </div>
            </div>
        </footer> 
    )
}