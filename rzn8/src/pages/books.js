import React from 'react'
import Card from '../components/cards'
import PubBtn from '../components/publishingbtn'
import Golem from '../assets/images/Golem.png'
import Candy from '../assets/images/Candy.jpg'
import Xavier from '../assets/images/Xavier.jpg'


class Books extends React.Component{
    render(){
        return(
            
            <div id='books'>
                <header><h1>Books</h1>  </header>
                    

               <div className="container-fluid d-flex content-justify-center">

                <div className='row'>
                    <div className='col-md-4' >
                        <Card imgsrc={Xavier} title="Xavier Reynolds: Blood Ties" id='bookCards'  description='There have always been creatures that go bump in the night. But for his entire life, Xavier Reynolds had been hidden from that truth. Believing he was a normal teenager, Xavier had no idea that he actually hailed from a long line of monster hunters. The evils around him were oblivious to his existence, thanks to a technique used by his father before he died. But when Xavier turned eighteen, that protection faded and the things that lived in his nightmares suddenly became his reality.'
                        link='https://urfavoriteauthor.square.site/product/xavier-reynolds/36?cs=true&cst=custom'
                        
                        />
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={Candy} title="Candy" id='bookCards' description='She lost everything. The world turned against her, taking everything that she holds dear, while trying to crush her dreams at the same time. So when Kandace Bell had her back against the wall, she turns to the streets. Following in her father’s footsteps, Kandace brings new meaning to the term baddest in the game. There’s a new Queen in the streets, and the product she is moving is so sweet it could kill you.'
                        link='https://urfavoriteauthor.square.site/product/Candy-book/31?cs=true&cst=custom'/>
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={Golem} title="Golem Genesis" id='bookCards' description='In the world of Terra, Humans and Golems live side by side. Golems are living monoliths, that come from an ancient species of warriors and protectors.  Golems still battle today in the Gladiator arena where Golems and their Guardians battle each other for the title of Gladiator Supreme. Chris Carter finds a Golem buried in a cave on his way home from school. The Golem takes to him and Chris finds, not only a new friend but a new adventure to embark on full of lots of awesome battles and new Golems. '
                        link='https://urfavoriteauthor.square.site/product/golem-genesis-rocky-beginnings-issue-1/14?cs=true&cst=custom'/>
                        
                    </div>
                    {/* First Row */}
                </div>
                </div>
                <br></br>
                <br></br>
                        <PubBtn/>
                  </div>
        )
    }
}

export default Books;