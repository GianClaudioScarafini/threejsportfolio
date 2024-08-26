import { VscGithubInverted } from "react-icons/vsc";
import { IoLogoLinkedin } from "react-icons/io";
import './Footer.css';
function Footer() {
    
    return (
        <div className="footer">
            <div>
                <VscGithubInverted />
                <IoLogoLinkedin />
            </div>
            <div>
                <p>© 2024 Gian Claudio Scarafini</p>
            </div>
        </div>
    )

}

export default Footer;