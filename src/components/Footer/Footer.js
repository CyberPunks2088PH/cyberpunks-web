import './Footer.css'

import twitter from '../../images/twitter-link.png'
import discord from '../../images/discord-link.png'
import opensea from '../../images/opensea-link.png'

export default function Footer() {
    return (
        <section id="footer">
            <div className="footer-icons py-2 py-md-5">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-12 col-md-4">
                            <div className="footer-img-icons">
                                <a href="https://twitter.com/NFTCyberPunks" target="_blank" rel="noreferrer">
                                    <img src={twitter} alt="Twitter" className="w-100" />
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="footer-img-icons">
                                <a href="https://discord.gg/PC3bthGRWg" target="_blank" rel="noreferrer">
                                    <img src={discord} alt="Discord" className="w-100" />
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-md-4">
                            <div className="footer-img-icons">
                                <a href="https://opensea.io/collection/cyberpunks2088" target="_blank" rel="noreferrer">
                                    <img src={opensea} alt="OpenSea" className="w-100" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <p className="footer-sub text-center text-color-2 font-size-250 py-3 py-md-4 py-lg-5 mb-0">Powered by CyberPunks2088</p>
            </div>
        </section>
    )
}