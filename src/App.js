import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <Navbar />
        </Router>
    )
}

export default App;
