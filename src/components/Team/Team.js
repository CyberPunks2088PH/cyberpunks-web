import './Team.css'

import rounikun from '../../images/PFP/rounikun.gif'
import c6feels from '../../images/PFP/6feels.gif'
import phantompirate from '../../images/PFP/phantompirate.gif'
import ignitiusmalik from '../../images/PFP/ignitiusmalik.gif'

export default function Ecosystem() {
    return (
        <section id="team">
            <div className="container">
                <h3 className="team-title vermin text-color-2 text-center font-size-400 font-size-xs-500 font-size-sm-620 font-size-lg-780 pt-4 mb-0">TEAM</h3>

                <div className="team-wrap row justify-content-center mb-5">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="team-img">
                            <img src={rounikun} alt="Rounikun PFP" className="w-100" />
                        </div>
                        <p className="team-sub text-center mt-4 mb-1">
                            <a href="https://twitter.com/rounikun" target="_blank" rel="noreferrer" className="text-color-1 font-size-300">@ROUNIKUN</a>
                        </p>
                        <p className="team-desc text-center text-color-2 font-size-250">Head of Development and Artist</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="team-img">
                            <img src={c6feels} alt="6Feels PFP" className="w-100" />
                        </div>
                        <p className="team-sub text-center mt-4 mb-1">
                            <a href="https://twitter.com/C6feels" target="_blank" rel="noreferrer" className="text-color-1 font-size-300">@SEE6FEELS</a>
                        </p>
                        <p className="team-desc text-center text-color-2 font-size-250">Community Manager</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="team-img">
                            <img src={phantompirate} alt="Phantom Pirate PFP" className="w-100" />
                        </div>
                        <p className="team-sub-no-link text-center text-color-1 font-size-300">@PHANTOMPIRATE</p>
                        <p className="team-desc text-center text-color-2 font-size-250">Technical Advisor</p>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="team-img">
                            <img src={ignitiusmalik} alt="Ignitius Malik PFP" className="w-100" />
                        </div>
                        <p className="team-sub-no-link text-center text-color-1 font-size-300">@IGNITIUSMALIK</p>
                        <p className="team-desc text-center text-color-2 font-size-250">Web3 Advisor</p>
                    </div>
                </div>
            </div>
        </section>
    )
}