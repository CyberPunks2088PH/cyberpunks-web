import './OGSeries.css'
import { useState } from 'react'

// sample images
import punk1 from '../../images/artworks/#121.jpg'
import punk2 from '../../images/artworks/#127.jpg'
import punk3 from '../../images/artworks/#150.jpg'
import punk4 from '../../images/artworks/#154.jpg'
import punk5 from '../../images/artworks/#157.jpg'
import punk6 from '../../images/artworks/#162.jpg'
import punk7 from '../../images/artworks/#170.jpg'
import punk8 from '../../images/artworks/#173.jpg'
import punk9 from '../../images/artworks/#176.jpg'

export default function OGSeries() {
    const [state, setState] = useState({
        supply: 208,
        type: "GIF CyberPunks",
        currentDrop: 198,
        nextDrop: "March 21",
        nextDropTime: "11PM",
        nextDropTZ: "GMT+8",
    })

    // state updater
    const _setState = (name, value) => {
        setState(prevState => ({...prevState, [name]: value}))
    }

    return (
        <section id="series">
            <div className="container">
                <div className="series-wrap">
                    <h3 className="series-title vermin text-color-1 text-center font-size-500 mb-0">OG SERIES</h3>
                    <p className="series-sub series-supply text-color-2 text-center font-size-230 mb-0">Supply Count: {state.supply} {state.type}</p>
                    <p className="series-sub series-current text-color-2 text-center font-size-230 mb-0">Current Drop: {state.currentDrop}/{state.supply}</p>
                    <p className="series-sub series-supply text-color-2 text-center font-size-230 mb-4">Next Drop on {state.nextDrop}, {state.nextDropTime} {state.nextDropTZ}</p>
                </div>
                <div className="series-btns d-flex justify-content-center mb-5">
                    <button className="btn series-btn btn-custom-1 py-1 px-4 font-size-230">MINT NOW</button>
                    <button className="btn series-btn btn-custom-1 py-1 px-4 font-size-230">JOIN DISCORD</button>
                </div>

                {/* Gallery */}
                <div className="series-gallery">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="gallery-item">
                                <img src={punk1} alt="Sample CyberPunks" className="w-100" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="gallery-item">
                                <img src={punk2} alt="Sample CyberPunks" className="w-100" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="gallery-item">
                                <img src={punk3} alt="Sample CyberPunks" className="w-100" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="gallery-item">
                                <img src={punk4} alt="Sample CyberPunks" className="w-100" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="gallery-item">
                                <img src={punk5} alt="Sample CyberPunks" className="w-100" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="gallery-item">
                                <img src={punk6} alt="Sample CyberPunks" className="w-100" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="gallery-item">
                                <img src={punk7} alt="Sample CyberPunks" className="w-100" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="gallery-item">
                                <img src={punk8} alt="Sample CyberPunks" className="w-100" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4">
                            <div className="gallery-item">
                                <img src={punk9} alt="Sample CyberPunks" className="w-100" />
                            </div>
                        </div>
                    </div>
                    <div className="gallery-btn-wrap text-center mb-4">
                        <a href="https://opensea.io/collection/cyberpunks2088" target="_blank" rel="noreferrer" className="btn gallery-btn btn-custom-1 py-1 px-4 font-size-230">SEE MORE AT OPENSEA</a>
                    </div>
                </div>
            </div>

            {/* border */}
            <div className="punks-border">
                <div className="punks-trapezoid-bottom"></div>
            </div>
        </section>
    )
}