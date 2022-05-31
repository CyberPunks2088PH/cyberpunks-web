import './OGSeries.css'
import { useState } from 'react'

// sample images
import punk1 from '../../images/artworks/138.gif'
import punk2 from '../../images/artworks/151.gif'
import punk3 from '../../images/artworks/154.gif'
import punk4 from '../../images/artworks/156.gif'
import punk5 from '../../images/artworks/157.gif'
import punk6 from '../../images/artworks/195.gif'

export default function OGSeries() {
    const [state, setState] = useState({
        supply: 208,
        type: "GIF CyberPunks",
        currentDrop: 208,
    })

    // state updater
    const _setState = (name, value) => {
        setState(prevState => ({...prevState, [name]: value}))
    }

    return (
        <section id="series">
            <div className="container">
                <div className="series-wrap">
                    <h3 className="series-title vermin text-color-1 text-center font-size-430 mb-0">OG SERIES</h3>
                    <p className="series-sub series-supply text-color-2 text-center font-size-250 mb-0">Supply Count: {state.supply} {state.type}</p>
                    <p className="series-sub series-current text-color-2 text-center font-size-250 mb-0">ALL MINTED: {state.currentDrop}/{state.supply}</p>
                    <p className="series-sub series-supply text-color-2 text-center font-size-250 mb-4">SOLD OUT</p>
                </div>
                <div className="series-btns d-flex justify-content-center mb-5">
                    <a href="https://opensea.io/collection/cyberpunks2088" target="_blank" rel="noreferrer" className="btn series-btn btn-custom-1 px-4 font-size-250">BUY CYBERPUNK</a>
                    <a href="https://discord.com/invite/PC3bthGRWg" target="_blank" rel="noreferrer" className="btn series-btn btn-custom-1 px-4 font-size-250">JOIN DISCORD</a>
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