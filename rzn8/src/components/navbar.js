import React from 'react'
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
import Music from '../pages/music'
import Books from '../pages/books'
import Contact from '../pages/contact'
import Clients from '../pages/clients'


class Navbar extends React.Component{
    render(){
        return(
<Router>
 <Switch>
            <Route exact path='/books' component={Books} />
            <Route path='/music' component={Music} />
            <Route path='/clients' component={Clients} />
            <Route path='/contact' component={Contact} />

            
            <div id='navbar'>
       
            
      

<ul>

    <li><Link to='/books'>Books</Link></li>
    <li><Link to='/music'>Music</Link></li>
    <li><Link to='/clients'>Clients</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
    </ul>
            </div>
    </Switch>
</Router>
        )
    }
}

export default Navbar;