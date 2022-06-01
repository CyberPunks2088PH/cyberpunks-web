import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import OGSeries from './components/OGSeries/OGSeries'
import About from './components/About/About'
import Ecosystem from './components/Ecosystem/Ecosystem'
import Team from './components/Team/Team'

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Banner />
            <OGSeries />
            <About />
            <Ecosystem />
            <Team />
        </Router>
    )
}

export default App;
