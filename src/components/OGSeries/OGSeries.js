import './OGSeries.css'

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
                <div className="series-k9-wrap mb-5">
                    <div className="series-k9 d-none d-lg-block">
                        <img src={k9} className="w-100" alt="CyberPunk K9" />
                    </div>
                    <div className="series-wrap">
                        <h3 className="series-title vermin text-color-1 text-center font-size-300 font-size-sm-350 font-size-sm-450 mt-3 mb-0">CYBERPUNK K9</h3>
                        <p className="series-sub text-color-2 text-center font-size-210 font-size-sm-250 mb-0">Supply Count: 2,088 K9s</p>
                        <p className="series-sub text-color-2 text-center font-size-210 font-size-sm-250 mb-4">MINTING THIS NOVEMBER</p>
                    </div>
                    <div className="series-btns d-flex justify-content-center flex-wrap">
                        <a href="/k9" className="btn series-btn btn-custom-2 px-4 font-size-210 font-size-sm-250">VIEW DETAILS</a>
                        {/* <button disabled={true} className="btn series-btn btn-custom-2 px-4 font-size-210 font-size-sm-250">MINTING SOON</button> */}
                        <a href="https://discord.com/invite/PC3bthGRWg" target="_blank" rel="noreferrer" className="btn series-btn btn-custom-2 px-4 font-size-210 font-size-sm-250">JOIN DISCORD</a>
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="series-gallery">
                <div className="d-flex justify-content-start flex-wrap">
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