import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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

function App() {
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
                    {/* <Route exact path="/k9" component={pageK9}></Route> */}
                </Switch>
                <Footer />
            </ScrollToTop>
        </Router>
    )
}

export default App;
