import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import OGSeries from './components/OGSeries/OGSeries'

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
            <Banner />
            <OGSeries />
        </Router>
    )
}

export default App;
