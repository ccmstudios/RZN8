import React from 'react'
import Card from '../components/cards'
import Nygel from '../assets/images/Author.jpg'
import PubBtn from '../components/publishingbtn'
import Publishing from './publishingMain'

class Clients extends React.Component{
    render(){
        return(
            <div id='clients' style={{width: "25rem"}}>
                <header><h1>Clients</h1>  </header>
                <h2>Meet N.M. Porterfield</h2>
 <Card imgsrc={Nygel} className='author' title="N.M. Porterfield" id=''  description='There have always been creatures that go bump in the night. But for his entire life, Xavier Reynolds had been hidden from that truth. Believing he was a normal teenager, Xavier had no idea that he actually hailed from a long line of monster hunters. The evils around him were oblivious to his existence, thanks to a technique used by his father before he died. But when Xavier turned eighteen, that protection faded and the things that lived in his nightmares suddenly became his reality.'
                        link='https://urfavoriteauthor.square.site'
                        
                        />
                        <br></br>
                        <br></br>
                        <PubBtn/>
                        <button type="button" class="btn btn-lg btn-light">
                        <a href="https://www.patreon.com/bePatron?u=13482557" data-patreon-widget-type="become-patron-button" async src="https://c6.patreon.com/becomePatronButton.bundle.js">Become a Patron!</a>
                        </button>
            </div>
        )
    }
}

export default Clients;