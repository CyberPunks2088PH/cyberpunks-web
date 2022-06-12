import './K9.css'

import { useState } from 'react'

import k9Banner from '../../images/K9/Window-K9-text.gif'
import k9BannerMobile from '../../images/K9/Window-K9-text-mobile.gif'

export default function K9() {
    const [state, setState] = useState({
        noOfMinted: 988,
        totalSupply: 2088,
        pricePerK9: 0.03,
        currency: 'ETH',
        maxMint: 4,
        quantityToMint: 1,
        totalPrice: 0.03,
    })

    // state updater
    const _setState = (name, value) => {
        setState(prevState => ({...prevState, [name]: value}))
    }

    return (
        <div className="page-k9">
            <section id="k9-banner" className="d-none d-sm-block" style={{"backgroundImage": `url(${k9Banner})`}}></section>
            <section id="k9-banner" className="d-block d-sm-none" style={{"backgroundImage": `url(${k9BannerMobile})`}}></section>

            <section id="k9-mint" className="py-5">
                <div className="container">
                    <div className="k9-mint-outer row align-items-center">
                        <div className="col-12 col-md-4">
                            <h3 className="k9-mint-title vermin text-color-1 text-right font-size-300 font-size-xs-400 font-size-sm-500 mt-5 mb-2">JOIN THE PACK</h3>
                            <p className="k9-mint-sub text-color-2 text-justify font-size-210 font-size-sm-250 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        </div>
                        <div className="col-12 col-md-7 offset-md-1">
                            <div className="k9-mint-box p-5">
                                <div className="d-flex justify-content-between">
                                    <p className="k9-mint-box-text text-color-1 font-size-300 font-size-sm-450 mb-0">OG MINT</p>
                                    <p className="k9-mint-box-text text-color-4 font-size-300 font-size-sm-450 mb-0">{state.noOfMinted}/{state.totalSupply}</p>
                                </div>
                                <p className="k9-mint-box-text text-color-2 font-size-250 font-size-sm-380 mb-0">Price per K9: {state.pricePerK9} {state.currency} + Gas</p>
                                <p className="k9-mint-box-text text-color-2 font-size-250 font-size-sm-380 mb-3">Max: {state.maxMint} K9 per Transaction</p>

                                {/* Text Field */}
                                <div className="k9-mint-text-fields d-flex justify-content-between mb-4">
                                    <button className="btn k9-mint-amt-btn text-center font-bold btn-custom-3 p-2 font-size-320">-</button>
                                    <div className="k9-mint-amount text-center text-color-3 py-2 font-size-500">{state.quantityToMint}</div>
                                    <button className="btn k9-mint-amt-btn text-center font-bold btn-custom-3 p-2 font-size-320">+</button>
                                </div>
                                <div className="k9-mint-total d-flex justify-content-between mb-4 py-2 px-3">
                                    <p className="k9-mint-box-text text-color-2 font-size-300 font-size-sm-450 mb-0">TOTAL</p>
                                    <p className="k9-mint-box-text text-color-2 font-size-300 font-size-sm-450 mb-0">{state.totalPrice}</p>
                                </div>

                                <div className="k9-mint-btn-wrap">
                                    <button className="btn k9-mint-btn text-center font-bold btn-custom-4 p-2 font-size-400">MINT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}