
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/mainpages/homePage.js'
import Bars from './components/mainpages/bars.js'
import Commerces from './components/mainpages/commerces.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route path='/bars' element={<Bars />}/>
        <Route path='/commerces' element={<Commerces />}/>
      </Routes>
    </Router>
  )
}

export default App