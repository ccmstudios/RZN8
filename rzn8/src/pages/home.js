import React from 'react'
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
import Print from '../pages/printMain'
import Publishing from '../pages/publishingMain'
import Return from '../components/return'

class Home extends React.Component{
    render(){
        return(
            <div>
    <Router>
 <Switch>
          
            <Route exact path='/printMain' component={Print} />
            <Route exact path='/publishingMain' component={Publishing} />
    <div className="row">

            
      
       
        <div className='col' id='publishing'>
          <Link to='/publishingMain'><h1>Publishing Services</h1></Link>

        </div>
        <div className='col' id='print'>
          <Link to='/printMain'><h1>Printing Services</h1></Link>

        </div>

    </div>
      </Switch>
  <Return/>
  </Router>
</div>
        )
        }
}

export default Home;