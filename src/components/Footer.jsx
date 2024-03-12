import { FaFacebookF, FaTwitter, FaYoutube, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center p-10 bg-black text-base-content rounded">
                <nav>
                    <div className="grid grid-flow-col gap-4 text-3xl">
                        <a href="https://www.facebook.com/miran.muhtadi/"><FaFacebookF /></a>
                        <a href="https://twitter.com/miranmuhtadi121"><FaTwitter /></a>
                        <a href="https://youtube.com/@miranmuhtadi?si=JtMtMP0OzcWd6GiR"><FaYoutube /></a>
                        <a href="https://github.com/Muhtadi23"><FaGithub /></a>
                        <a href="https://github.com/Muhtadi23"><FaLinkedinIn /></a>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © 2024 <span className="text-[#eb4034] font-bold">Miran</span>. All right reserved</p>
                </aside>
                <nav className="grid grid-flow-col gap-4">
                    <a className="link link-hover">Terms and Policy</a>
                    <a className="link link-hover">Disclaimer</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;