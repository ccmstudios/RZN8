import React from 'react'
import {BrowserRouter as Router,Switch,Route, Link} from 'react-router-dom';
// import PrintModal from '../components/modal'

class Print extends React.Component{
    render(){
        return(
            <div id='printMain'>
                
              {/* <PrintModal/> */}
                <div id='noticeDiv'>
                    <h5>At this time, we are not offering Printing Services. 
                    Take a second to view our Publishing services for authors and musicians.</h5>
                    </div>
    </div>
        )
    }
}

export default Print;