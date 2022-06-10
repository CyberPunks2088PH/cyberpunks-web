import './Banner.css'
import bannerBG from '../../images/Website-Banner.gif'

export default function Banner() {
    return (
        <section id="banner" style={{"backgroundImage": `url(${bannerBG})`}}>
            <div className="container h-100">
                <div className="h-100 d-flex justify-content-center align-items-center">
                    <div className="banner-content text-center">
                        <h3 className="banner-content-title text-color-1 font-size-350 font-size-sm-400">Welcome to Night City!</h3>
                        <p className="banner-content-sub text-color-2 font-size-210 font-size-sm-250">Welcome to the biggest and most developed city in the Ethereum Cryptoverse. Situated in Planet C-53 where Etherian CyberPunks reside. Join us to travel the future and back thru portals of time. Be part of the CyberPunk gang to get your getaway to the bright future.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}