import '../../../node_modules/uikit/dist/css/uikit.min.css';
import '../../assets/css/style.scss';
import '../../assets/css/responsive.scss';
import '../../assets/css/flaticon.css';
import '../../assets/css/animate.min.css';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
// import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo1.png';
 
class Navigation extends React.Component {
    render(){
        return (
            <React.Fragment>
                {/* Start Mobile Navbar */}
                <div id="offcanvas-flip" className="mobile-navbar uk-mobile-navbar" uk-offcanvas="flip: true; overlay: true">
                    <div className="uk-offcanvas-bar">
                
                        <button className="uk-offcanvas-close" type="button" uk-close="true"></button>
                
                        <nav className="uk-navbar-container" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                            <ul className="uk-navbar-nav">
                                <li className="uk-active">
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#home"
                                    >
                                        Home
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#about"
                                    >
                                        who We Are
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#services"
                                    >
                                        Our Expertise
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#project"
                                    >
                                        Project
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#clients"
                                    >
                                        Our Clients Love
                                    </AnchorLink>
                                </li>
                                <li>
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#team"
                                    >
                                        Our Team
                                    </AnchorLink>
                                </li>
                                {/* <li>
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#blog"
                                    >
                                        Blog
                                    </AnchorLink>
                                </li> */}
                                <li>
                                    <AnchorLink 
                                        offset={() => 100} 
                                        href="#contact"
                                    >
                                        Contact Us
                                    </AnchorLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                {/* End Mobile Navbar */}

                {/* Start Navbar Area */}
                <header className="header-area " data-uk-sticky="animation: uk-animation-slide-top;">
                    <div className="uk-container">
                        <div className="uk-navbar">
                            <div className="logo uk-navbar-left">
                                <a href="/">
                                    <img src={logo} alt="logo" />
                                </a>
                            </div>

                            <div className="uk-navbar-toggle" id="navbar-toggle" data-uk-toggle="target: #offcanvas-flip">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>

                            <div className="navbar uk-navbar-right">
                                <nav className="uk-navbar-container" data-uk-scrollspy-nav="offset: 0; closest: li; scroll: true">
                                    <ul className="uk-navbar-nav">
                                        <li>
                                            <AnchorLink
                                                href="#home"
                                                offset={() => 100}
                                            >
                                                Home
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink 
                                                offset={() => 100} 
                                                href="#about"
                                            >
                                                Who We Are
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink 
                                                href="#services"
                                                offset={() => 100}
                                            >
                                                Our Expertise
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink 
                                                href="#project"
                                                offset={() => 100}
                                            >
                                                Project
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink 
                                                href="#clients"
                                                offset={() => 100}
                                            >
                                                Our Clients Love
                                            </AnchorLink>
                                        </li>
                                        <li>
                                            <AnchorLink 
                                            href="#team"
                                            offset={() => 100}>Our Team</AnchorLink>
                                        </li>
                                        {/* <li>
                                            <AnchorLink 
                                            href="#blog"
                                            offset={() => 100}>Blog</AnchorLink>
                                        </li> */}
                                        <li>
                                            <AnchorLink 
                                            href="#contact"
                                            offset={() => 100}>Contact Us</AnchorLink>
                                        </li>
                                    </ul>
                                </nav>

                                {/* <div className="lang">
                                    <form>
                                        <div>
                                            <select>
                                                <option value="eng">En</option>
                                                <option value="ge">Ge</option>
                                            </select>
                                        </div>
                                    </form>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </header>
                {/* End Navbar Area */}
            </React.Fragment>
        );
    }
}
 
export default Navigation;