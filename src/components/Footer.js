import React from 'react';
import gitIcon from '../icons/git1_icon.png';
import fbIcon from '../icons/fb_icon.png';
import twitterIcon from '../icons/twitter_icon.png';
import ytIcon from '../icons/yt_icon.png';
import '../css/footer.css';

function Footer() {
    return (
        <div className = "footer" >
            <a className = 'footerLogo' href="https://github.com/monica-puram/tyres" target="_blank" rel="noopener noreferrer">
                <img
                    src={gitIcon}
                    width="30"
                    height="30"
                    alt="GitHub logo"
                />
            </a>
            <a className = 'footerLogo' href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                <img
                    src={fbIcon}
                    width="30"
                    height="30"
                    alt="Facebook logo"
                />
            </a>
            <a className = 'footerLogo' href="https://twitter.com/purammonica" target="_blank" rel="noopener noreferrer">
                <img
                    src={twitterIcon}
                    width="30"
                    height="30"
                    alt="Twitter logo"
                />
            </a>
            <a className = 'footerLogo' href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <img
                    src={ytIcon}
                    width="30"
                    height="30"
                    alt="Youtube logo"
                />
            </a>
            <p className = 'copyRight'>© 2019 Copyright:
            <a href="https://www.google.com">
                <strong> Google.com</strong>
            </a>
            </p>
        </div>
    )
}

export default Footer