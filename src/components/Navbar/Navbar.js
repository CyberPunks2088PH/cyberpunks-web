import { useState } from "react"
import { Link } from "react-router-dom"
import { bubble as Menu } from "react-burger-menu"
import { HashLink } from "react-router-hash-link"
import './Navbar.css'

import logo from '../../images/Website-Logo.gif'

export default function Navbar(props) {
    const [menuOpenState, setMenuOpenState] = useState(false)

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -70; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
        // window.scrollTo({ top: yCoordinate, behavior: 'smooth' }); 
    }

    const handleStateChange = (state) => {
        setMenuOpenState(state.isOpen)
    }

    const closeMenu = () => {
        setMenuOpenState(false)
    }

    const styles = {
        bmBurgerButton: {
            position: 'absolute',
            width: '36px',
            height: '30px',
            right: '20px',
            top: '20px'
        },
        bmBurgerBars: {
            background: 'var(--neongreen)'
        },
        bmBurgerBarsHover: {
            background: '#bdc3c7'
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: 'var(--neongreen)'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: '#0b1420',
            padding: '3.5em 2em 0',
            fontSize: '1.15em'
        },
        bmMorphShape: {
            fill: '#0b1420'
        },
        bmItemList: {
            color: '#fff',
            padding: '0.8em'
        },
        bmItem: {
            display: 'block',
            lineHeight: '0.8em'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)',
            left: 0
        }
    } 

    return (
        <div id="header">
            <div className="container">
                <div id="punks-nav" className="d-none d-lg-flex justify-content-between align-items-center">
                    <div className="punks-nav-logo">
                        <Link exact="true" to="/">
                            <img src={logo} className="w-100" alt="CyberPunks Logo" />
                        </Link>
                    </div>
                    <ul className="d-flex justify-content-center align-items-center flex-wrap mb-0 p-0">
                        <li>
                            <HashLink className="text-color-2 font-size-220" smooth to="/#lore" scroll={el => scrollWithOffset(el)}>LORE</HashLink>
                        </li>
                        <li>
                            <HashLink className="text-color-2 font-size-220" smooth to="/#timeline" scroll={el => scrollWithOffset(el)}>TIMELINE</HashLink>
                        </li>
                        <li>
                            <HashLink className="text-color-2 font-size-220" smooth to="/#ecosystem" scroll={el => scrollWithOffset(el)}>ECOSYSTEM</HashLink>
                        </li>
                        <li>
                            <HashLink className="text-color-2 font-size-220" smooth to="/#team" scroll={el => scrollWithOffset(el)}>TEAM</HashLink>
                        </li>
                        <li>
                            {/* <a href="/k9#k9-mint" className="btn punks-nav-btn btn-custom-1 px-4 font-size-160">
                                MINT NOW
                            </a> */}
                            <a href="https://opensea.io/collection/cyberpunks2088" className="btn punks-nav-btn btn-custom-1 px-4 font-size-160">
                                VIEW ON OPENSEA
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="d-lg-none align-self-end">
                    <Menu right styles={styles}
                        isOpen={menuOpenState}
                        onStateChange={(state) => handleStateChange(state)}
                    >
                        <div className="punks-nav-logo-mobile">
                            <Link exact="true" to="/">
                                <img src={logo} className="w-100" alt="CyberPunks Logo" />
                            </Link>
                        </div>
                        <HashLink smooth to="/#lore" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-color-2 font-size-220 d-block py-3 w-100 text-decoration-none">LORE</HashLink>
                        <HashLink smooth to="/#timeline" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-color-2 font-size-220 d-block py-3 w-100 text-decoration-none">TIMELINE</HashLink>
                        <HashLink smooth to="/#ecosystem" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-color-2 font-size-220 d-block py-3 w-100 text-decoration-none">ECOSYSTEM</HashLink>
                        <HashLink smooth to="/#team" scroll={el => scrollWithOffset(el)} onClick={() => closeMenu()} className="text-color-2 font-size-220 d-block py-3 w-100 text-decoration-none">TEAM</HashLink>
                        <a href="https://opensea.io/collection/cyberpunks2088" className="btn punks-nav-btn btn-custom-1 mt-3 px-4 font-size-220 w-100">
                            VIEW ON OPENSEA
                        </a>
                    </Menu>
                </div>
            </div>
        </div>
    )
}
