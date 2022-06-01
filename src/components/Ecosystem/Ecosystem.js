import './Ecosystem.css'

import ecosystem from '../../images/ecosystem-page.gif'

export default function Ecosystem() {
    return (
        <section id="ecosystem">
            <div className="container">
                <h3 className="ecosystem-title vermin text-color-2 text-center font-size-430 pt-5">ECOSYSTEM</h3>
                <div className="ecosystem-border"></div>
                <p className="ecosystem-sub text-color-2 font-size-250 mb-4">CyberPunks2088 envisions creating a long-term continuity of the project. Along the way, it is aimed to start from a small collection (OG Series) then grow the community eventually thru the 2nd Series (Generative Series), and sustain the growth thru utilities (3rd Series). Since the possibilities are endless, rounikun also envisions not only seeing these projects on Twitter and Discord servers as PFPs but being alive and moving on a Metaverse. Thus, the OG Series and 2nd Series will come to voxel generation. We see the future as having a well-developed CyberPunks2088 ecosystem.</p>

                <div className="ecosystem-img">
                    <img src={ecosystem} alt="CyberPunks2088 Ecosystem" className="w-100" />
                </div>
            </div>

            {/* border */}
            <div className="punks-border mt-4">
                <div className="punks-trapezoid-bottom"></div>
            </div>
        </section>
    )
}