import React from 'react';
import {BrowserRouter as StaticRouter, Route, Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Products from './Products';
import ContactUs from './ContactUs';

class App extends React.Component{
  render(){
    return(
          <React.Fragment>
            <StaticRouter basename = "LibraryProj">
              <Switch>              
                <Route exact path = '/' component = {Home}/>
                <Route path = '/about' component = {About}/>
                <Route exact path = '/products' component = {Products}/>
                <Route path = '/products/:category' component = {Products}/>
                <Route path = '/contactUs' component = {ContactUs}/>
                <Route path = '/Home' component = {Home}/>
              </Switch>
            </StaticRouter>
          </React.Fragment>
      )
  }
}

export default App;
