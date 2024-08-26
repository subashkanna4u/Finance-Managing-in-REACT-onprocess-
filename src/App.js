import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Loginone from './Loginone';
import Sampleone from './Sampleone';
import Newapp from './Newapp';
import Search from './Search';
import Monthlyentry from './Monthlyentry';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <ul>
      <li>
        <link to="/Search/Monthlyentry">Monthlyentry</link>
      </li>
      </ul> */}
      <Routes>  
    <Route path='/' element ={ <Loginone/>}/>
    <Route path='/Sampleone' element={<Sampleone/>}/>
    <Route path='/Newapp' element={<Newapp/>}/>
    <Route path='/Search' element={<Search/>}/>
    <Route path='/search/monthlyentry' element={<Monthlyentry/>}/>
    {/* <Route path="/Search/">
    <Route path="Monthlyentry" element={<Monthlyentry/>}/> */}
    {/* </Route> */}
    
    </Routes>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
