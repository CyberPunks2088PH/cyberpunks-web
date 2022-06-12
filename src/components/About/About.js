import './About.css'

export default function About() {
    return (
        <section id="lore">
            <div className="container">
                <h3 className="lore-title vermin text-color-1 text-center font-size-300 font-size-xs-400 font-size-sm-500 mt-5 mb-4">LORE</h3>
                <p className="lore-sub text-color-2 font-size-210 font-size-sm-250 mb-4">In 2088, Planet C-53 also known as Earth has far gone through technological advancement and so has the exhaustion of the planet's resources. Only major cities had stood the chance to develop their areas of sovereignty where others have fallen to chaos and misgovernance. Night City is one of the cities standing strong over the factions that want to take it down. Etherian CyberPunks authority has been defending their state for a long time since the major technology milestone came to a realization. This is until some people of the government made conspiracies about a piece of technology that was meant to have an objective to set things right from their past -- a TIME MACHINE.</p>
                <p className="lore-sub text-color-2 font-size-210 font-size-sm-250 mb-4">This piece of tech has been reported stolen by an unknown faction. Along with the investigation, the authority decided to make a redo of the time machine to push through the main objective. Etherian CyberPunks are being sent to this present time to see what they can do to mend their grim past. Then they saw what they weren't expecting.</p>
                <p className="lore-sub text-color-2 font-size-210 font-size-sm-250 mb-0">And so, the story begins...</p>
            </div>

            {/* border */}
            <div className="punks-border mb-0">
                <div className="punks-trapezoid-bottom"></div>
            </div>
        </section>
    )
}