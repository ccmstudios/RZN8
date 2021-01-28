import React from 'react'
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';

class Print extends React.Component{
    render(){
        return(
            <div id='printMain'>
                
<button className='btn btn-outline-light btn-lg btn-block'><Link to='/'><h3>Return to Main</h3></Link></button>
              
                <div id='noticeDiv'>
                    <h5>At this time, we are not offering Printing Services. 
                    Take a second to view our Publishing services for authors and musicians.</h5>
                    </div>
    </div>
        )
    }
}

export default Print;