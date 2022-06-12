import './K9.css'

import k9Banner from '../../images/K9/Window-K9-text.gif'
import k9BannerMobile from '../../images/K9/Window-K9-text-mobile.gif'

export default function K9() {
    return (
        <div className="page-k9">
            <section id="k9-banner" className="d-none d-sm-block" style={{"backgroundImage": `url(${k9Banner})`}}></section>
            <section id="k9-banner" className="d-block d-sm-none" style={{"backgroundImage": `url(${k9BannerMobile})`}}></section>

            <section id="k9-mint" className="py-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-5">
                            <h3 className="k9-mint-title vermin text-color-1 text-right font-size-300 font-size-xs-400 font-size-sm-500 mt-5 mb-4">JOIN THE PACK</h3>
                            <p className="k9-mint-sub text-color-2 text-justify font-size-210 font-size-sm-250 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>

                        </div>
                        <div className="col-12 col-md-7">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}