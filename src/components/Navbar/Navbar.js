import { useState } from "react"
import { Link } from "react-router-dom"
// import { bubble as Menu } from "react-burger-menu"
import './Navbar.css'

import logo from '../../images/logo-full.png'
import iconTwitter from '../../images/Twitter-Pixel.png'
import iconInstagram from '../../images/IG-Pixel.png'
import iconDiscord from '../../images/Discord-Pixel.png'
import iconOpensea from '../../images/opensea-pixel.png'

export default function Navbar(props) {
    // const [menuOpenState, setMenuOpenState] = useState(false)

    // const scrollWithOffset = (el) => {
    //     const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    //     // const yOffset = 0; 
    //     // window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    //     window.scrollTo({ top: yCoordinate, behavior: 'smooth' }); 
    // }

    // const handleStateChange = (state) => {
    //     setMenuOpenState(state.isOpen)
    // }

    // const closeMenu = () => {
    //     setMenuOpenState(false)
    // }

    // const styles = {
    //     bmBurgerButton: {
    //         position: 'absolute',
    //         width: '36px',
    //         height: '30px',
    //         right: '0px',
    //         top: '36px'
    //     },
    //     bmBurgerBars: {
    //         background: '#fff'
    //     },
    //     bmBurgerBarsHover: {
    //         background: '#bdc3c7'
    //     },
    //     bmCrossButton: {
    //         height: '24px',
    //         width: '24px'
    //     },
    //     bmCross: {
    //         background: 'black'
    //     },
    //     bmMenuWrap: {
    //         position: 'fixed',
    //         height: '100%'
    //     },
    //     bmMenu: {
    //         background: ' linear-gradient(to left, #f5f5f5 0%, #dddddd 100%)',
    //         padding: '3.5em 2em 0',
    //         fontSize: '1.15em'
    //     },
    //     bmMorphShape: {
    //         fill: '#fff'
    //     },
    //     bmItemList: {
    //         color: '#fff',
    //         padding: '0.8em'
    //     },
    //     bmItem: {
    //         display: 'block',
    //         color: 'black'
    //     },
    //     bmOverlay: {
    //         background: 'rgba(0, 0, 0, 0.3)',
    //         left: 0
    //     }
    // } 

    return (
        <div id="header">
            <div className="container">
                <div id="punks-nav" className="d-none d-lg-flex justify-content-between align-items-center">
                    <div className="punks-nav-logo-wrap">
                        <div className="punks-nav-logo">
                            <Link exact="true" to="/">
                                <img src={logo} className="punks-nav-logo" alt="CyberPunks Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="punks-nav-other">
                        <div className="punks-socmed d-flex justify-content-end align-items-center">
                            <div className="punks-socmed-item">
                                <a href="https://twitter.com/NFTCyberPunks">
                                    <img src={iconTwitter} className="w-100" alt="CyberPunks 2088 Twitter" />
                                </a>
                            </div>
                            <div className="punks-socmed-item">
                                <a href="https://instagram.com/nftcyberpunks/">
                                    <img src={iconInstagram} className="w-100" alt="CyberPunks 2088 Instagram" />
                                </a>
                            </div>
                            <div className="punks-socmed-item">
                                <a href="https://discord.gg/PC3bthGRWg">
                                    <img src={iconDiscord} className="w-100" alt="CyberPunks 2088 Discord" />
                                </a>
                            </div>
                            <div className="punks-socmed-item">
                                <a href="https://opensea.io/collection/cyberpunks2088">
                                    <img src={iconOpensea} className="w-100" alt="CyberPunks 2088 OpenSea" />
                                </a>
                            </div>
                            <button className="btn punks-nav-btn btn-custom-1 py-1 px-4 font-size-180">
                                MINT NOW
                            </button>
                        </div>
                    </div>
                </div>
                {/* <div className="d-lg-none align-self-end">
                    <Menu right styles={styles}
                        isOpen={menuOpenState}
                        onStateChange={(state) => handleStateChange(state)}
                    >
                        <div className="mq-nav-logo-mobile">
                            <Link exact="true" to="/">
                                <img src={logo} className="w-100" alt="Mustachio Quest Logo" />
                            </Link>
                        </div>
                        <HashLink smooth to="#features" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">FEATURES</HashLink>
                        <HashLink smooth to="#updates" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">UPDATES</HashLink>
                        <HashLink smooth to="#roadmap" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">ROADMAP</HashLink>
                        <HashLink smooth to="#team" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">TEAM</HashLink>
                        <HashLink smooth to="#sneakpeek" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">PROGRESS</HashLink>
                        <HashLink smooth to="#faqs" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-black d-block py-3 w-100 text-decoration-none">FAQS</HashLink>
                        <button type="button" onClick={props.mintBtn} className="btn mq-nav-discord text-white gotham-black font-size-100">
                            MINT NOW
                        </button>
                    </Menu>
                </div> */}
            </div>
        </div>
    )
}
