import React from 'react'
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
import Books from '../pages/books'
import Services from '../pages/services'
import Clients from '../pages/clients';


class Navbar extends React.Component{
    render(){
        return(
<Router>
 <Switch>
            <Route exact path='/books' component={Books} />
            <Route path='/clients' component={Clients} />
            <Route path='/services' component={Services} />

            
            <div id='navbar'>
       
            
      

<ul>

    <li><Link to='/books'>Books</Link></li>
    <li><Link to='/clients'>Clients</Link></li>
    <li><Link to='/services'>Services</Link></li>
    </ul>
            </div>
    </Switch>
</Router>
        )
    }
}

export default Navbar;