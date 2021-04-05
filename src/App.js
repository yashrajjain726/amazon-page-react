
import './App.css';
import Main from './pages/Main'
import CategoryPage from './pages/Categories'
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
function App() {
  return (
    <Router>
    <Switch>
    <Route exact path="/"component={Main}/>
    <Route exact path='/category'component={CategoryPage}/>
    </Switch>
 
  </Router>
  );
}

export default App;
