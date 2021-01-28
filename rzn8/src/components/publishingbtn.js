import React from 'react'
import {BrowserRouter as Route, Link} from 'react-router-dom';
import Home from '../pages/home'


class Return extends React.Component{
    render(){
        return(
            <div id='pubbtn'>
            <Route exact path='/' component={Home} />

            <button type="button" class="btn btn-lg btn-light"><Link to='/'>Return to Publishing Home</Link></button>
            </div>
        )
    }
}

export default Return;