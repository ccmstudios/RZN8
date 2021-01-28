import React from 'react'
import Navbar from '../components/navbar'


class Publishing extends React.Component{
    render(){
        return(

            
            <div id='publishingMain'>
                <Navbar/>

                {/* <Router>
                    <Switch>
                    <Route path='/publishingMain' component={Publishing} />

                <button className='btn btn-light btn-lg btn-block'>
                <Link to='/publishingMain'><h3>Return to Publishing Home</h3></Link>
                </button>
                    </Switch>

                </Router> */}

            </div>
        )
    }
}

export default Publishing;