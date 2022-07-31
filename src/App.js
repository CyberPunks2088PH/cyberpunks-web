import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import { Button, Modal } from 'react-bootstrap'

import ScrollToTop from './utils/ScrollToTop'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import OGSeries from './components/OGSeries/OGSeries'
import About from './components/About/About'
import Timeline from './components/Timeline/Timeline'
import Ecosystem from './components/Ecosystem/Ecosystem'
import Team from './components/Team/Team'
import Footer from './components/Footer/Footer'

import pageK9 from './pages/K9/K9'

import popup from './images/pop-up.gif'

function App() {
    const [showOnError, setShowOnError] = useState(true)
    const handleCloseOnError = () => setShowOnError(false)
    const handleShowOnError = () => setShowOnError(true)

    return (
        <Router basename={process.env.PUBLIC_URL}>
            <ScrollToTop>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Banner />
                        <OGSeries />
                        <About />
                        <Timeline />
                        <Ecosystem />
                        <Team />
                    </Route>
                    <Route exact path="/k9" component={pageK9}></Route>
                </Switch>
                <Footer />

                <Modal show={showOnError} onHide={handleCloseOnError} backdrop="static" keyboard={false} size="md" centered>
                    <Modal.Body>
                        {/* Design */}
                        <button onClick={handleCloseOnError} className="modal-close btn vermin text-color-2 text-center font-size-200 pt-4 mb-0">X</button>
                        <div className="modal-bg">
                            <img src={popup} alt="Popup" className="w-100" />
                        </div>

                        {/* Place Contents here */}
                        <div className="modal-inner-content">
                            
                        </div>
                    </Modal.Body>
                </Modal>
            </ScrollToTop>
        </Router>
    )
}

export default App;
