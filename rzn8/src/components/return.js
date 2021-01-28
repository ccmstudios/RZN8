import React from 'react'
import {BrowserRouter as Route, Link} from 'react-router-dom';
import Home from '../pages/home'


class Return extends React.Component{
    render(){
        return(
            <div id='returnbtn'>
            <Route exact path='/' component={Home} />

                <button type="button" class="btn btn-block"><Link to='/'>Exit to Main</Link></button>

            </div>
        )
    }
}

export default Return;