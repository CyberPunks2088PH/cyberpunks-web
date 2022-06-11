import './Timeline.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import og from '../../images/OG-Timeline-Banner.jpg'
import k9 from '../../images/K9-Timeline-Banner.jpg'

export default function Timeline() {
    return (
        <section id="timeline">
            <div className="container">
                <h3 className="ecosystem-title vermin text-color-2 text-center font-size-300 font-size-xs-400 font-size-sm-500 pt-5">TIMELINE</h3>
                <div className="timeline-squares d-flex justify-content-center">
                    <div className="squares-red"></div>
                    <div className="squares-red"></div>
                    <div className="squares-red"></div>
                    <div className="squares-red"></div>
                    <div className="squares-red"></div>
                    <div className="squares-red"></div>
                    <div className="squares-red"></div>
                    <div className="squares-red"></div>
                    <div className="squares-red"></div>
                    <div className="squares-red"></div>
                    <div className="squares-red"></div>
                    <div className="squares-red"></div>
                </div>
                
                {/* Desktop */}
                <div className="timeline-wrap d-none d-md-grid my-5">
                    {/* First Row */}
                    <div className="timeline-content margin-right-only text-right">
                        <p className="timeline-text text-color-3 font-size-290 font-size-sm-400 mb-2">
                            APRIL 2021&nbsp;
                            <FontAwesomeIcon className="chevron-450" color="#09fef1" size="sm" icon={faChevronRight} />
                            <FontAwesomeIcon className="chevron-450" color="#09fef1" size="sm" icon={faChevronRight} /> 
                        </p>
                        <p className="timeline-text text-color-3 font-size-290 font-size-sm-400 mb-3">
                            <FontAwesomeIcon className="chevron-450" color="#09fef1" size="sm" icon={faChevronLeft} />
                            <FontAwesomeIcon className="chevron-450" color="#09fef1" size="sm" icon={faChevronLeft} /> 
                            &nbsp;MARCH 2022
                        </p>
                    </div>
                    <div className="timeline-border">
                        <div className="timeline-hex"></div>
                    </div>
                    <div className="timeline-content margin-left-only">
                        <p className="timeline-text text-color-1 font-semibold font-size-290 font-size-sm-400 mb-3">Series 1</p>
                        <div className="timeline-img mb-3">
                            <img src={og} alt="OG Timeline Banner" className="w-100" />
                        </div>
                        <p className="timeline-text normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250 leading-none mb-4">The OG Series is the arrival of 208 OG CyberPunks in the Ethereum Cryptoverse. Minted manually at OpenSea and been SOLD OUT. All were hand-drawn, rendered into GIF and each has unique traits and aesthetic. One of the most unique Punk derivative in the Ethereum Blockchain.</p>
                        <p className="timeline-text normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250 mb-4">OG CyberPunks Holders have priority access and exclusive benefits to all the future related collection.</p>
                        <a href="https://opensea.io/collection/cyberpunks2088" target="_blank" rel="noreferrer" className="btn timeline-btn btn-custom-1 mt-2 px-4 font-size-210 font-size-sm-250">
                            BUY ON OPENSEA <FontAwesomeIcon className="chevron-500" color="#09fef1" size="sm" icon={faChevronRight} />
                        </a>
                    </div>

                    {/* Second Row */}
                    <div className="timeline-content margin-right-only">
                        <p className="timeline-text text-color-1 text-right font-semibold font-size-290 font-size-sm-400 mb-3">K9 Series</p>
                        <div className="timeline-img mb-3">
                            <img src={k9} alt="K9 Timeline Banner" className="w-100" />
                        </div>
                        <p className="timeline-text normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250 mb-4">CyberPunk K9 is a special series of 2088 total supplies of 5 different breeds of doggos that will arrive on the Night City. The only generative collection, together with the OG Series, in the entire project to be used as staking pieces in the future utility once we reached Series 3.</p>
                        <a href="#" target="_blank" rel="noreferrer" className="btn timeline-btn btn-custom-1 mt-2 px-4 font-size-210 font-size-sm-250">
                            MORE INFO <FontAwesomeIcon className="chevron-500" color="#09fef1" size="sm" icon={faChevronRight} />
                        </a>
                    </div>
                    <div className="timeline-border">
                        <div className="timeline-hex"></div>
                    </div>
                    <div className="timeline-content margin-left-only">
                        <p className="timeline-text text-color-3 font-size-290 font-size-sm-400 mb-3">Q2 2022</p>
                        <div className="timeline-month mb-3">
                            <p className="timeline-text normal-line-height text-color-1 font-size-270 font-size-sm-350 mb-0">
                                <FontAwesomeIcon className="chevron-450" color="#fe0054" size="sm" icon={faChevronRight} />
                                <FontAwesomeIcon className="chevron-450" color="#fe0054" size="sm" icon={faChevronRight} /> 
                                &nbsp;APRIL
                            </p>
                            <ul className="timeline-list-item">
                                <li className="timeline-text normal-line-height text-color-2 font-size-210 font-size-sm-250">Breeding of CyberPunk K9s</li>
                                <li className="timeline-text normal-line-height text-color-2 font-size-210 font-size-sm-250">Smart Contracts development</li>
                            </ul>
                        </div>
                        <div className="timeline-month mb-3">
                            <p className="timeline-text normal-line-height text-color-1 font-size-270 font-size-sm-350 mb-0">
                                <FontAwesomeIcon className="chevron-450" color="#fe0054" size="sm" icon={faChevronRight} />
                                <FontAwesomeIcon className="chevron-450" color="#fe0054" size="sm" icon={faChevronRight} /> 
                                &nbsp;MAY
                            </p>
                            <ul className="timeline-list-item">
                                <li className="timeline-text normal-line-height text-color-2 font-size-210 font-size-sm-250">Generation of 2,088 CyberPunk K9s</li>
                                <li className="timeline-text normal-line-height text-color-2 font-size-210 font-size-sm-250">Minting Website Development</li>
                                <li className="timeline-text normal-line-height text-color-2 font-size-210 font-size-sm-250">Marketing Planning</li>
                            </ul>
                        </div>
                        <div className="timeline-month mb-3">
                            <p className="timeline-text normal-line-height text-color-1 font-size-270 font-size-sm-350 mb-0">
                                <FontAwesomeIcon className="chevron-450" color="#fe0054" size="sm" icon={faChevronRight} />
                                <FontAwesomeIcon className="chevron-450" color="#fe0054" size="sm" icon={faChevronRight} /> 
                                &nbsp;JUNE
                            </p>
                            <ul className="timeline-list-item">
                                <li className="timeline-text normal-line-height text-color-2 font-size-210 font-size-sm-250">Minting Website goes live</li>
                                <li className="timeline-text normal-line-height text-color-2 font-size-210 font-size-sm-250">Testing of Smart Contract deployment</li>
                                <li className="timeline-text normal-line-height text-color-2 font-size-210 font-size-sm-250">Start of Marketing</li>
                                <li className="timeline-text normal-line-height text-color-2 font-size-210 font-size-sm-250">TARGET MINT DATES</li>
                            </ul>
                        </div>
                    </div>

                    {/* Third Row */}
                    <div className="timeline-content margin-right-only text-right">
                        <p className="timeline-text text-color-3 font-size-290 font-size-sm-400 mb-2">TBA</p>
                    </div>
                    <div className="timeline-border">
                        <div className="timeline-hex"></div>
                    </div>
                    <div className="timeline-content margin-left-only">
                        <p className="timeline-text text-color-1 font-semibold font-size-290 font-size-sm-400 mb-3">Series 2</p>
                        <p className="timeline-text normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250 leading-none mb-4">CyberPunks2088 2nd Series will be a generative collection dedicated to the growth of the CyberPunks community. Coming with exclusive benefits to the OG Holders and rewards to the new members of the gang.</p>
                    </div>

                    {/* Fourth Row */}
                    <div className="timeline-content margin-right-only no-bottom">
                        <p className="timeline-text text-color-1 text-right font-semibold font-size-290 font-size-sm-400 mb-3">Series 3</p>
                        <p className="timeline-text normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250 mb-4">The 3rd Series will be a generative collection that will bring more life to the CyberPunk OGs' and K9s' faces. Coming with utilities to all prior CyberPunks collections.</p>
                    </div>
                    <div className="timeline-border">
                        <div className="timeline-hex"></div>
                    </div>
                    <div className="timeline-content margin-left-only no-bottom">
                        <p className="timeline-text text-color-3 font-size-290 font-size-sm-400 mb-3">TBA</p>
                    </div>
                </div>
            </div>

            {/* border */}
            <div className="punks-border mt-4 mb-0">
                <div className="punks-trapezoid-bottom"></div>
            </div>
        </section>
    )
}