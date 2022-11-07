import './K9.css'

import k9Banner from '../../images/K9/Window-K9-text.gif'
import k9BannerMobile from '../../images/K9/Window-K9-text-mobile.gif'
import blueMongrel from '../../images/K9/Blue-Mongrel.png'
import brownMongrel from '../../images/K9/Brown-Mongrel.png'
import purpleMongrel from '../../images/K9/Purple-Mongrel.png'
import allMongrel from '../../images/K9/mongrel-collage.png'
import hound from '../../images/K9/Hound.png'
import martian from '../../images/K9/Martian.png'
import tech from '../../images/K9/Tech.png'
import mintdates from '../../images/mintdates.jpg'

export default function K9() {
    return (
        <div className="page-k9">
            <section id="k9-banner" className="d-none d-lg-block" style={{ "backgroundImage": `url(${k9Banner})` }}></section>
            <section id="k9-banner" className="d-block d-lg-none" style={{ "backgroundImage": `url(${k9BannerMobile})` }}></section>

            <section id="k9-mint" className="py-5">
                <div className="container">
                    <div className="k9-mint-outer row align-items-center">
                        <div className="col-12 col-xl-5">
                            <h3 className="k9-mint-title vermin text-color-1 text-right font-size-300 font-size-xs-400 font-size-sm-500 mt-5 mb-2">JOIN THE PACK</h3>
                            <p className="k9-mint-sub text-color-2 text-justify font-size-210 font-size-sm-250 mb-4">CyberPunk K9 is a special series  featuring 2,088 doggos that match the CyberPunk2088 Projekt aesthetics. Build your pack by taming K9 NFTs on the Ethereum Blockchain. Having your K9s by yourside will give you access to staking system in the future development of the project.</p>
                        </div>
                        <div className="col-12 col-xl-6 offset-xl-1">
                            <div className="k9-mintdates rounded-lg">
                                <img src={mintdates} alt="Mint Dates" className="w-100 rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="k9-rarity" className="py-5">
                <div className="container">
                    <h3 className="k9-rarity-title vermin text-color-2 text-center font-size-300 font-size-xs-400 font-size-sm-500 mb-0">RARITY</h3>
                    <div className="k9-rarity-border"></div>

                    <p className="k9-rarity-sub text-color-2 text-justify font-size-210 font-size-sm-250 mb-5">Each of the 2,088 CyberPunk K9  is unique built with limited number of traits. K9 #209 to #2088 are static doggos with traits randomly generated. K9 #001 to #208 are even more unique since they are GIF doggos that actually match the OG Series NFTs respectively. CyberPunk K9s have 4 breeds where Martian is the RAREST! The rarity will play a big role on the staking system once it has been implemented. So better tame your RAREST K9!</p>

                    {/* For PC */}
                    <div className="d-none d-lg-block">
                        <div className="k9-rarity-traits d-flex align-items-center mb-5">
                            <div className="k9-rarity-traits-col margin-right-5">
                                <div className="k9-rarity-traits-item d-flex align-items-center mb-3">
                                    <div className="k9-rarity-traits-details-wrap-right">
                                        <p className="k9-rarity-traits-title text-color-1 text-right font-size-250 font-size-sm-350 mb-0">MARTIAN</p>
                                        <p className="k9-rarity-traits-sub text-justify text-color-2 font-size-180 font-size-sm-210 mb-0">Martian Breed are K9s came with the Martian Punks from an another universe. Their arrival to the Night City is still unknown. Who knows what their purpose is? This breed is the RAREST.</p>
                                    </div>
                                    <div className="k9-rarity-traits-img-wrap img-right">
                                        <img src={martian} alt="Martian" className="w-100" />
                                    </div>
                                </div>
                                <div className="k9-rarity-traits-item d-flex align-items-center">
                                    <div className="k9-rarity-traits-details-wrap-right">
                                        <p className="k9-rarity-traits-title text-color-1 text-right font-size-250 font-size-sm-350 mb-0">TECH</p>
                                        <p className="k9-rarity-traits-sub text-justify text-color-2 font-size-180 font-size-sm-210 mb-0">Tech Breed is fabricated and constructed by the Bot Punks. This K9s are operated with artificial intelligence. Also one ot the unique breeds you can have.</p>
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
                                        <p className="k9-rarity-traits-sub text-justify text-color-2 font-size-180 font-size-sm-210 mb-0">Hounds are the hunter K9s. With their color, they are stealthy and extremely agile. They may not the rarest but this breed is hard to tame. It sure does!</p>
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
                                        <p className="k9-rarity-traits-sub text-justify text-color-2 font-size-180 font-size-sm-210 mb-0">Mongrels are the common breed you can found in the Night City. You can find them in 3 different colors: brown, purple and blue. They might be common but they are so loyal as they are human faction’s bestfriend.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* For Tablet and Mobile */}
                    <div className="d-block d-lg-none">
                        <div className="k9-rarity-traits-mobile">
                            <div className="k9-rarity-traits-item flex-wrap d-flex align-items-center mb-3">
                                <div className="k9-rarity-traits-details-wrap k9-rarity-traits-details-wrap-right order-2 order-sm-1">
                                    <p className="k9-rarity-traits-title text-color-1 text-right font-size-300 font-size-sm-350 mb-0">MARTIAN</p>
                                    <p className="k9-rarity-traits-sub text-justify text-color-2 font-size-200 font-size-sm-210 mb-0">Martian Breed are K9s came with the Martian Punks from an another universe. Their arrival to the Night City is still unknown. Who knows what their purpose is? This breed is the RAREST.</p>
                                </div>
                                <div className="k9-rarity-traits-img-wrap img-right order-1 order-sm-2">
                                    <img src={martian} alt="Martian" className="w-100" />
                                </div>
                            </div>
                            <div className="k9-rarity-traits-item flex-wrap d-flex align-items-center">
                                <div className="k9-rarity-traits-img-wrap img-left">
                                    <img src={hound} alt="Hound" className="w-100" />
                                </div>
                                <div className="k9-rarity-traits-details-wrap k9-rarity-traits-details-wrap-left">
                                    <p className="k9-rarity-traits-title text-color-1 font-size-300 font-size-sm-350 mb-0">HOUND</p>
                                    <p className="k9-rarity-traits-sub text-justify text-color-2 font-size-200 font-size-sm-210 mb-0">Hounds are the hunter K9s. With their color, they are stealthy and extremely agile. They may not the rarest but this breed is hard to tame. It sure does!</p>
                                </div>
                            </div>
                            <div className="k9-rarity-traits-item flex-wrap d-flex align-items-center">
                                <div className="k9-rarity-traits-details-wrap k9-rarity-traits-details-wrap-right order-2 order-sm-1">
                                    <p className="k9-rarity-traits-title text-color-1 text-right font-size-300 font-size-sm-350 mb-0">TECH</p>
                                    <p className="k9-rarity-traits-sub text-justify text-color-2 font-size-200 font-size-sm-210 mb-0">Tech Breed is fabricated and constructed by the Bot Punks. This K9s are operated with artificial intelligence. Also one ot the unique breeds you can have.</p>
                                </div>
                                <div className="k9-rarity-traits-img-wrap img-right order-1 order-sm-2">
                                    <img src={tech} alt="Tech" className="w-100" />
                                </div>
                            </div>
                            <div className="k9-rarity-traits-item flex-wrap d-flex align-items-center">
                                <div className="k9-rarity-traits-img-wrap img-left">
                                    <img src={allMongrel} alt="Mongrels" className="w-100" />
                                </div>
                                <div className="k9-rarity-traits-details-wrap k9-rarity-traits-details-wrap-left">
                                    <p className="k9-rarity-traits-title text-color-1 font-size-300 font-size-sm-350 mb-0">MONGREL</p>
                                    <p className="k9-rarity-traits-sub text-justify text-color-2 font-size-200 font-size-sm-210 mb-0">Mongrels are the common breed you can found in the Night City. You can find them in 3 different colors: brown, purple and blue. They might be common but they are so loyal as they are human faction’s bestfriend.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="k9-breed-stats">
                <div className="container">
                    <h3 className="k9-breed-stats-title text-color-1 text-center font-size-300 font-size-sm-400 font-size-sm-500 mb-4">BREED STATS</h3>

                    <div className="d-none d-lg-block">
                        <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                            <p className="k9-breed-stats-name text-color-7 font-size-350 mb-0">BLUE MONGRELS</p>
                            <div className="k9-breed-stats-bar-wrap d-flex align-items-center">
                                <div className="k9-breed-stats-bar blue-mongrel"></div>
                                <p className="k9-breed-stats-count text-color-7 font-size-350 mb-0">32%</p>
                            </div>
                        </div>
                        <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                            <p className="k9-breed-stats-name text-color-5 font-size-350 mb-0">PURPLE MONGRELS</p>
                            <div className="k9-breed-stats-bar-wrap d-flex align-items-center">
                                <div className="k9-breed-stats-bar purple-mongrel"></div>
                                <p className="k9-breed-stats-count text-color-5 font-size-350 mb-0">28%</p>
                            </div>
                        </div>
                        <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                            <p className="k9-breed-stats-name text-color-8 font-size-350 mb-0">BROWN MONGRELS</p>
                            <div className="k9-breed-stats-bar-wrap d-flex align-items-center">
                                <div className="k9-breed-stats-bar brown-mongrel"></div>
                                <p className="k9-breed-stats-count text-color-8 font-size-350 mb-0">22%</p>
                            </div>
                        </div>
                        <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                            <p className="k9-breed-stats-name text-color-6 font-size-350 mb-0">TECHS</p>
                            <div className="k9-breed-stats-bar-wrap d-flex align-items-center">
                                <div className="k9-breed-stats-bar tech"></div>
                                <p className="k9-breed-stats-count text-color-6 font-size-350 mb-0">10%</p>
                            </div>
                        </div>
                        <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                            <p className="k9-breed-stats-name text-color-3 font-size-350 mb-0">HOUNDS</p>
                            <div className="k9-breed-stats-bar-wrap d-flex align-items-center">
                                <div className="k9-breed-stats-bar hound"></div>
                                <p className="k9-breed-stats-count text-color-3 font-size-350 mb-0">5%</p>
                            </div>
                        </div>
                        <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                            <p className="k9-breed-stats-name text-color-9 font-size-350 mb-0">MARTIANS</p>
                            <div className="k9-breed-stats-bar-wrap d-flex align-items-center">
                                <div className="k9-breed-stats-bar martian"></div>
                                <p className="k9-breed-stats-count text-color-9 font-size-350 mb-0">1%</p>
                            </div>
                        </div>
                    </div>

                    {/* For Tab and Mobile */}
                    <div className="d-block d-lg-none">
                        <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                            <div className="k9-breed-stats-bar blue-mongrel">
                                <div className="k9-breed-stats-bar-text-wrap d-flex align-items-center justify-content-between">
                                    <p className="k9-breed-stats-name text-color-7 font-size-250 font-size-sm-280 font-size-md-350 mb-0">BLUE MONGRELS</p>
                                    <p className="k9-breed-stats-count text-color-7 font-size-250 font-size-sm-280 font-size-md-350 mb-0">32%</p>
                                </div>
                            </div>
                        </div>
                        <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                            <div className="k9-breed-stats-bar purple-mongrel">
                                <div className="k9-breed-stats-bar-text-wrap d-flex align-items-center justify-content-between">
                                    <p className="k9-breed-stats-name text-color-5 font-size-250 font-size-sm-280 font-size-md-350 mb-0">PURPLE MONGRELS</p>
                                    <p className="k9-breed-stats-count text-color-5 font-size-250 font-size-sm-280 font-size-md-350 mb-0">28%</p>
                                </div>
                            </div>
                        </div>
                        <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                            <div className="k9-breed-stats-bar brown-mongrel">
                                <div className="k9-breed-stats-bar-text-wrap d-flex align-items-center justify-content-between">
                                    <p className="k9-breed-stats-name text-color-8 font-size-250 font-size-sm-280 font-size-md-350 mb-0">BROWN MONGRELS</p>
                                    <p className="k9-breed-stats-count text-color-8 font-size-250 font-size-sm-280 font-size-md-350 mb-0">22%</p>
                                </div>
                            </div>
                        </div>
                        <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                            <div className="k9-breed-stats-bar tech">
                                <div className="k9-breed-stats-bar-text-wrap d-flex align-items-center justify-content-between">
                                    <p className="k9-breed-stats-name text-color-6 font-size-250 font-size-sm-280 font-size-md-350 mb-0">TECHS</p>
                                    <p className="k9-breed-stats-count text-color-6 font-size-250 font-size-sm-280 font-size-md-350 mb-0">10%</p>
                                </div>
                            </div>
                        </div>
                        <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                            <div className="k9-breed-stats-bar hound">
                                <div className="k9-breed-stats-bar-text-wrap d-flex align-items-center justify-content-between">
                                    <p className="k9-breed-stats-name text-color-3 font-size-250 font-size-sm-280 font-size-md-350 mb-0">HOUNDS</p>
                                    <p className="k9-breed-stats-count text-color-3 font-size-250 font-size-sm-280 font-size-md-350 mb-0">5%</p>
                                </div>
                            </div>
                        </div>
                        <div className="k9-breed-stats-wrap d-flex align-items-center mb-3">
                            <div className="k9-breed-stats-bar martian">
                                <div className="k9-breed-stats-bar-text-wrap d-flex align-items-center justify-content-between">
                                    <p className="k9-breed-stats-name text-color-9 font-size-250 font-size-sm-280 font-size-md-350 mb-0">MARTIANS</p>
                                    <p className="k9-breed-stats-count text-color-9 font-size-250 font-size-sm-280 font-size-md-350 mb-0">1%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* border */}
            <div className="punks-border mt-4 mb-0">
                <div className="punks-trapezoid-bottom"></div>
            </div>

            <section id="k9-roadmap" className="pt-5 pb-4 d-none">
                <div className="container">
                    <h3 className="k9-roadmap-title vermin text-color-2 text-center font-size-300 font-size-sm-400 font-size-sm-500 mb-0">MINTING ROADMAP</h3>
                    <div className="k9-roadmap-border"></div>

                    <div className="k9-roadmap-wrap my-5">
                        {/* First Row */}
                        <div className="k9-roadmap-border-vert">
                            <div className="k9-roadmap-hex"></div>
                        </div>
                        <div className="k9-roadmap-content margin-left-only">
                            <p className="k9-roadmap-text text-color-1 font-size-310 font-size-sm-480 mb-3">25% Minted</p>
                            <ul className="k9-roadmap-list-item">
                                <li className="k9-roadmap-text-sub normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li className="k9-roadmap-text-sub normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li className="k9-roadmap-text-sub normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            </ul>
                        </div>

                        {/* Second Row */}
                        <div className="k9-roadmap-border-vert">
                            <div className="k9-roadmap-hex"></div>
                        </div>
                        <div className="k9-roadmap-content margin-left-only">
                            <p className="k9-roadmap-text text-color-1 font-size-310 font-size-sm-480 mb-3">50% Minted</p>
                            <ul className="k9-roadmap-list-item">
                                <li className="k9-roadmap-text-sub normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li className="k9-roadmap-text-sub normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li className="k9-roadmap-text-sub normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            </ul>
                        </div>

                        {/* Third Row */}
                        <div className="k9-roadmap-border-vert">
                            <div className="k9-roadmap-hex"></div>
                        </div>
                        <div className="k9-roadmap-content margin-left-only">
                            <p className="k9-roadmap-text text-color-1 font-size-310 font-size-sm-480 mb-3">75% Minted</p>
                            <ul className="k9-roadmap-list-item">
                                <li className="k9-roadmap-text-sub normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li className="k9-roadmap-text-sub normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li className="k9-roadmap-text-sub normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            </ul>
                        </div>

                        {/* Fourth Row */}
                        <div className="k9-roadmap-border-vert no-border">
                            <div className="k9-roadmap-hex"></div>
                        </div>
                        <div className="k9-roadmap-content margin-left-only no-bottom">
                            <p className="k9-roadmap-text text-color-1 font-size-310 font-size-sm-480 mb-3">100% Minted</p>
                            <ul className="k9-roadmap-list-item">
                                <li className="k9-roadmap-text-sub normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li className="k9-roadmap-text-sub normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                                <li className="k9-roadmap-text-sub normal-line-height text-justify text-color-2 font-size-210 font-size-sm-250">Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section id="k9-faqs" className="pt-5 pb-4">
                <div className="container">
                    <h3 className="k9-faqs-title vermin text-color-2 text-center font-size-300 font-size-sm-400 font-size-sm-500 mb-0">FAQS</h3>
                    <div className="k9-faqs-border"></div>

                    <div className="accordion accordion-flush" id="k9-faqs-accordion">
                        <div className="accordion-item k9-faqs-item">
                            <h2 className="accordion-header k9-faqs-header" id="flush-headingOne">
                                <button className="accordion-button collapsed text-color-1 font-size-170 font-size-sm-220 k9-faqs-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                                    What is the total supply?
                                    <button className="btn k9-faqs-collapse-btn minus text-center font-bold btn-custom-3 font-size-100">-</button>
                                    <button className="btn k9-faqs-collapse-btn plus text-center font-bold btn-custom-3 font-size-100">+</button>
                                </button>
                            </h2>
                            <div id="flush-collapseOne" className="accordion-collapse k9-faqs-collapse collapse" data-bs-parent="#k9-faqs-accordion">
                                <div className="accordion-body k9-faqs-body text-justify font-size-210 font-size-sm-250 text-color-2">A total of 2,088 CyberPunk K9s. Only 1,880 K9s will be minted thru Presale for OGs and Whitelists and Public Sale. The other 208 K9s will be claimed by all OG Holders that match their Punks for free on 100% SOLD OUT.</div>
                            </div>
                        </div>
                        <div className="accordion-item k9-faqs-item">
                            <h2 className="accordion-header k9-faqs-header" id="flush-headingTwo">
                                <button className="accordion-button collapsed text-color-1 font-size-170 font-size-sm-220 k9-faqs-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                                    How many K9s can I mint per transaction?
                                    <button className="btn k9-faqs-collapse-btn minus text-center font-bold btn-custom-3 font-size-100">-</button>
                                    <button className="btn k9-faqs-collapse-btn plus text-center font-bold btn-custom-3 font-size-100">+</button>
                                </button>
                            </h2>
                            <div id="flush-collapseTwo" className="accordion-collapse k9-faqs-collapse collapse" data-bs-parent="#k9-faqs-accordion">
                                <div className="accordion-body k9-faqs-body text-justify font-size-210 font-size-sm-250 text-color-2">Minting limits per transaction are as follows: OG Holders Presale can mint 5 per transaction; Whitelists Presale can mint 3 per transaction; and Public Sale can mint 2 per transaction.</div>
                            </div>
                        </div>
                        <div className="accordion-item k9-faqs-item">
                            <h2 className="accordion-header k9-faqs-header" id="flush-headingThree">
                                <button className="accordion-button collapsed text-color-1 font-size-170 font-size-sm-220 k9-faqs-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree">
                                    When is the launch of CyberPunk K9?
                                    <button className="btn k9-faqs-collapse-btn minus text-center font-bold btn-custom-3 font-size-100">-</button>
                                    <button className="btn k9-faqs-collapse-btn plus text-center font-bold btn-custom-3 font-size-100">+</button>
                                </button>
                            </h2>
                            <div id="flush-collapseThree" className="accordion-collapse k9-faqs-collapse collapse" data-bs-parent="#k9-faqs-accordion">
                                <div className="accordion-body k9-faqs-body text-justify font-size-210 font-size-sm-250 text-color-2">There will be 3 Minting Schedules. Presale will be for OGs and Whitelists. OG Mint will be on November 24th 6AM PT, Whitelist Mint will be on November 25th 6AM PT and the Public Sale will be on November 26th 6AM PT.</div>
                            </div>
                        </div>
                        <div className="accordion-item k9-faqs-item">
                            <h2 className="accordion-header k9-faqs-header" id="flush-headingFour">
                                <button className="accordion-button collapsed text-color-1 font-size-170 font-size-sm-220 k9-faqs-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour">
                                    What is the price of minting a CyberPunk K9?
                                    <button className="btn k9-faqs-collapse-btn minus text-center font-bold btn-custom-3 font-size-100">-</button>
                                    <button className="btn k9-faqs-collapse-btn plus text-center font-bold btn-custom-3 font-size-100">+</button>
                                </button>
                            </h2>
                            <div id="flush-collapseFour" className="accordion-collapse k9-faqs-collapse collapse" data-bs-parent="#k9-faqs-accordion">
                                <div className="accordion-body k9-faqs-body text-justify font-size-210 font-size-sm-250 text-color-2">To give value to our OGs and early supporter, there will be different minting price for each schedule: OG Mint will cost 0.03 ETH, Whitelist mint will cost 0.04 ETH, and Public mint wil cost 0.06 ETH. And all transaction will cost additional for your GAS Fees.</div>
                            </div>
                        </div>
                        <div className="accordion-item k9-faqs-item">
                            <h2 className="accordion-header k9-faqs-header" id="flush-headingFive">
                                <button className="accordion-button collapsed text-color-1 font-size-170 font-size-sm-220 k9-faqs-btn" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive">
                                    What does having my K9s get me?
                                    <button className="btn k9-faqs-collapse-btn minus text-center font-bold btn-custom-3 font-size-100">-</button>
                                    <button className="btn k9-faqs-collapse-btn plus text-center font-bold btn-custom-3 font-size-100">+</button>
                                </button>
                            </h2>
                            <div id="flush-collapseFive" className="accordion-collapse k9-faqs-collapse collapse" data-bs-parent="#k9-faqs-accordion">
                                <div className="accordion-body k9-faqs-body text-justify font-size-210 font-size-sm-250 text-color-2">Aside from getting your dope PFP and having a matching K9 with your Punks, for each quarter of minting progress there will be ETH prizes to be raffled to K9 Holders. K9 NFTs together with the OG CyberPunks will be the only pieces in the entire project to have the staking capability where its rarity will play a big role in earning tokens. Ultimately, as we are aiming to get these NFTs into the Metaverse, how cool is that to have you K9s on your side roaming around the Night City?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}