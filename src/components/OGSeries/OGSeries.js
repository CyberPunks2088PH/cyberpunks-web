import './OGSeries.css'
import { useState } from 'react'

import k9 from '../../images/K9.png'

// sample images
import punk1 from '../../images/artworks/138.gif'
import punk2 from '../../images/artworks/151.gif'
import punk3 from '../../images/artworks/154.gif'
import punk4 from '../../images/artworks/156.gif'
import punk5 from '../../images/artworks/157.gif'
import punk6 from '../../images/artworks/195.gif'

export default function OGSeries() {
    return (
        <section id="series">
            <div className="container">
                <div className="series-banner d-flex justify-content-center">
                    <div className="series-k9">
                        <img src={k9} className="w-100" alt="CyberPunk K9" />
                    </div>
                    <div>
                        <div className="series-wrap">
                            <h3 className="series-title vermin text-color-1 text-center font-size-430 mt-3 mb-0">CYBERPUNK K9</h3>
                            <p className="series-sub series-supply text-color-2 text-center font-size-250 mb-0">Supply Count: 2,088 K9s</p>
                            <p className="series-sub series-supply text-color-2 text-center font-size-250 mb-4">MINTING SOON</p>
                        </div>
                        <div className="series-btns d-flex justify-content-center mb-5">
                            <a href="https://opensea.io/collection/cyberpunks2088" target="_blank" rel="noreferrer" className="btn series-btn btn-custom-2 px-4 font-size-250">VIEW ON OPENSEA</a>
                            <a href="https://discord.com/invite/PC3bthGRWg" target="_blank" rel="noreferrer" className="btn series-btn btn-custom-2 px-4 font-size-250">JOIN DISCORD</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="series-gallery">
                <div className="d-flex justify-content-start">
                    <div className="gallery-item">
                        <img src={punk1} alt="Sample CyberPunks" className="w-100" />
                    </div>
                    <div className="gallery-item">
                        <img src={punk2} alt="Sample CyberPunks" className="w-100" />
                    </div>
                    <div className="gallery-item">
                        <img src={punk3} alt="Sample CyberPunks" className="w-100" />
                    </div>
                    <div className="gallery-item">
                        <img src={punk4} alt="Sample CyberPunks" className="w-100" />
                    </div>
                    <div className="gallery-item">
                        <img src={punk5} alt="Sample CyberPunks" className="w-100" />
                    </div>
                    <div className="gallery-item">
                        <img src={punk6} alt="Sample CyberPunks" className="w-100" />
                    </div>
                </div>
            </div>
        </section>
    )
}