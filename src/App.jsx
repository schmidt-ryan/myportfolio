
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Furnituretrainingcompany from './pages/Furnituretrainingcompany'
import Agclassroom from './pages/Agclassroom'
import Literacy from './pages/Literacy'
import GrowingNation from './pages/GrowingNation'
import BloodPressure from './pages/BloodPressure'
import OWLee from './pages/OWLee'
import './App.css'

function App() {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home/>}/>
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact /> } />
                <Route path="furnituretrainingcompany" element={<Furnituretrainingcompany />} />
                <Route path="agclassroom" element={<Agclassroom />} />
                <Route path="expeditionliteracy" element={<Literacy />} />
                <Route path="growingnation" element={<GrowingNation />} />
                <Route path="bloodpressure" element={<BloodPressure />} />
                <Route path="owlee" element={<OWLee />} />
            </Routes>
        </BrowserRouter>
    )
}
export default App





