import './K9.css'

import { useState } from 'react'

import k9Banner from '../../images/K9/Window-K9-text.gif'
import k9BannerMobile from '../../images/K9/Window-K9-text-mobile.gif'
import blueMongrel from '../../images/K9/Blue-Mongrel.png'
import brownMongrel from '../../images/K9/Brown-Mongrel.png'
import purpleMongrel from '../../images/K9/Purple-Mongrel.png'
import hound from '../../images/K9/Hound.png'
import martian from '../../images/K9/Martian.png'
import tech from '../../images/K9/Tech.png'

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

            <section id="k9-rarity" className="py-5">
                <div className="container">
                    <h3 className="k9-rarity-title vermin text-color-2 text-center font-size-300 font-size-sm-400 font-size-sm-500 mb-0">RARITY</h3>
                    <div className="k9-rarity-border"></div>

                    <p className="k9-rarity-sub text-color-2 text-justify font-size-210 font-size-sm-250 mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                    <div className="k9-rarity-traits d-flex align-items-center mb-5">
                        <div className="k9-rarity-traits-col margin-right-5">
                            <div className="k9-rarity-traits-item d-flex align-items-center mb-3">
                                <div className="k9-rarity-traits-details-wrap-right">
                                    <p className="k9-rarity-traits-title text-color-1 text-right font-size-250 font-size-sm-350 mb-0">MARTIAN</p>
                                    <p className="k9-rarity-traits-sub text-justify text-color-2 font-size-180 font-size-sm-210 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. La maecenas accumsan lacus vel facilisis.</p>
                                </div>
                                <div className="k9-rarity-traits-img-wrap img-right">
                                    <img src={martian} alt="Martian" className="w-100" />
                                </div>
                            </div>
                            <div className="k9-rarity-traits-item d-flex align-items-center">
                                <div className="k9-rarity-traits-details-wrap-right">
                                    <p className="k9-rarity-traits-title text-color-1 text-right font-size-250 font-size-sm-350 mb-0">TECH</p>
                                    <p className="k9-rarity-traits-sub text-justify text-color-2 font-size-180 font-size-sm-210 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. La maecenas accumsan lacus vel facilisis.</p>
                                </div>
                                <div className="k9-rarity-traits-img-wrap img-right">
                                    <img src={tech} alt="Tech" className="w-100" />
                                </div>
                            </div>
                        </div>
                        <div className="k9-rarity-traits-col margin-left-5">
                            <div className="k9-rarity-traits-item d-flex align-items-center">
                                <div className="k9-rarity-traits-img-wrap img-left">
                                    <img src={hound} alt="Hound" className="w-100" />
                                </div>
                                <div className="k9-rarity-traits-details-wrap-left">
                                    <p className="k9-rarity-traits-title text-color-1 font-size-250 font-size-sm-350 mb-0">HOUND</p>
                                    <p className="k9-rarity-traits-sub text-justify text-color-2 font-size-180 font-size-sm-210 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. La maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="k9-rarity-traits-2 d-flex align-items-center mb-4">
                        <div className="k9-rarity-traits-col margin-right-5">
                            <div className="k9-rarity-traits-item d-flex align-items-center mb-3">
                                <div className="k9-rarity-traits-mongrel">
                                    <img src={purpleMongrel} alt="Purple Mongrel" className="w-100" />
                                </div>
                                <div className="k9-rarity-traits-img-wrap pos-right img-right">
                                    <img src={brownMongrel} alt="Brown Mongrel" className="w-100 mb-2" />
                                    <img src={blueMongrel} alt="Blue Mongrel" className="w-100 mt-2" />
                                </div>
                            </div>
                        </div>
                        <div className="k9-rarity-traits-col margin-left-5">
                            <div className="k9-rarity-traits-item d-flex align-items-center">
                                <div className="k9-rarity-traits-details-wrap-left">
                                    <p className="k9-rarity-traits-title text-color-1 font-size-250 font-size-sm-350 mb-0">MONGREL</p>
                                    <p className="k9-rarity-traits-sub text-justify text-color-2 font-size-180 font-size-sm-210 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. La maecenas accumsan lacus vel facilisis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="k9-breed-stats" className="mb-5">
                <div className="container">
                    <h3 className="k9-breed-stats-title text-color-1 text-center font-size-300 font-size-sm-400 font-size-sm-500 mb-4">BREED STATS</h3>
                    
                    <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                        <p className="k9-breed-stats-name text-color-7 font-size-250 font-size-sm-350 mb-0">BLUE MONGRELS</p>
                        <div className="k9-breed-stats-bar-wrap d-flex align-items-center">
                            <div className="k9-breed-stats-bar blue-mongrel"></div>
                            <p className="k9-breed-stats-count text-color-7 font-size-250 font-size-sm-350 mb-0">???</p>
                        </div>
                    </div>
                    <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                        <p className="k9-breed-stats-name text-color-8 font-size-250 font-size-sm-350 mb-0">BROWN MONGRELS</p>
                        <div className="k9-breed-stats-bar-wrap d-flex align-items-center">
                            <div className="k9-breed-stats-bar brown-mongrel"></div>
                            <p className="k9-breed-stats-count text-color-8 font-size-250 font-size-sm-350 mb-0">???</p>
                        </div>
                    </div>
                    <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                        <p className="k9-breed-stats-name text-color-5 font-size-250 font-size-sm-350 mb-0">PURPLE MONGRELS</p>
                        <div className="k9-breed-stats-bar-wrap d-flex align-items-center">
                            <div className="k9-breed-stats-bar purple-mongrel"></div>
                            <p className="k9-breed-stats-count text-color-5 font-size-250 font-size-sm-350 mb-0">???</p>
                        </div>
                    </div>
                    <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                        <p className="k9-breed-stats-name text-color-6 font-size-250 font-size-sm-350 mb-0">TECHS</p>
                        <div className="k9-breed-stats-bar-wrap d-flex align-items-center">
                            <div className="k9-breed-stats-bar tech"></div>
                            <p className="k9-breed-stats-count text-color-6 font-size-250 font-size-sm-350 mb-0">???</p>
                        </div>
                    </div>
                    <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                        <p className="k9-breed-stats-name text-color-3 font-size-250 font-size-sm-350 mb-0">HOUNDS</p>
                        <div className="k9-breed-stats-bar-wrap d-flex align-items-center">
                            <div className="k9-breed-stats-bar hound"></div>
                            <p className="k9-breed-stats-count text-color-3 font-size-250 font-size-sm-350 mb-0">???</p>
                        </div>
                    </div>
                    <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                        <p className="k9-breed-stats-name text-color-9 font-size-250 font-size-sm-350 mb-0">MARTIANS</p>
                        <div className="k9-breed-stats-bar-wrap d-flex align-items-center">
                            <div className="k9-breed-stats-bar martian"></div>
                            <p className="k9-breed-stats-count text-color-9 font-size-250 font-size-sm-350 mb-0">???</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* border */}
            <div className="punks-border mt-4 mb-0">
                <div className="punks-trapezoid-bottom"></div>
            </div>
        </div>
    )
}