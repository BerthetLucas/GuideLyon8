
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/mainpages/homePage.js'
import Bars from './components/mainpages/bars.js'
import Commerces from './components/mainpages/commerces.js'
import Restaurant from './components/mainpages/restaurants.js'
import Culture from './components/mainpages/culture.js'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<HomePage />}/>
        <Route path='/bars' element={<Bars />}/>
        <Route path='/commerces' element={<Commerces />}/>
        <Route path='/restaurants' element={<Restaurant />}/>
        <Route path='/culture' element={<Culture />}/>
      </Routes>
    </Router>
  )
}

export default App