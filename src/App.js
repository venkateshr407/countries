import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Country from './Components/Country';
import Filter from './Components/Filter';
import Header from './Components/Header';
import CountriesRouter from './Components/CountriesRouter';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Route exact path='/'>
        <Filter/>
          <Country/>
        </Route>
        <Route path='/:name' children={<CountriesRouter/>}/>
      </Router>
    </div>
  );
}

export default App;
