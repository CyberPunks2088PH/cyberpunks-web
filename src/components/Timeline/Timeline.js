import './Timeline.css'

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
                
                <div className="timeline-wrap">
                    
                </div>
            </div>

            {/* border */}
            <div className="punks-border mt-4 mb-0">
                <div className="punks-trapezoid-bottom"></div>
            </div>
        </section>
    )
}