import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 
import KanjiInput from './components/KanjiInput';
import { BrowserRouter as Router, Route } from 'react-router-dom'; 

class App extends Component {
  render() {
      return (
          <Router>
             <div>
                 <Route exact path="/" component={KanjiInput} />
              </div> 
          </Router>
      );
  }
}

export default App;
