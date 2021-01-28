import React from 'react'
import Card from '../components/cards'
import RZN8 from '../assets/images/RZN8LOGO.png'
import Navbar from '../components/navbar'
import PubBtn from '../components/publishingbtn'



class Books extends React.Component{
    render(){
        return(
            
            <div id='books'>
<PubBtn/>

               <div className="container-fluid d-flex content-justify-center">

                <div className='row'>
                    <div className='col-md-4'>
                        <Card imgsrc={RZN8} title="Editing Services" description='A boy named Marcus Hunt is taken from the world he has known and thrust into a world full of dangerous assassins. As he grows more skilled, he comes to find out a deadly secret that puts himself and all those he holds dear at risk. Now, if he wants to survive, he must use all of the skills at his disposal, to defeat those who wish him dead'
                        link='https://squareup.com/store/urfavoriteauthor/item/thrill-of-the-hunt'
                        
                        />
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={RZN8} title="Marketing" description='After barely surviving an attack from The Order, a nefarious group of professional killers, Marcus must fulfill a final contract to take out the most dangerous man in the organization. But does he have what it takes to kill him? Or will this be his last mission?'
                        link='https://squareup.com/store/urfavoriteauthor/item/thrill-of-the-hunt-ghost-contract'/>
                    </div>
                    <div className='col-md-4'>
                        <Card imgsrc={RZN8} title="Publishing" description='*This book will be exclusively available to members of my patreon* These are the hidden files from The Order, the lost records of every assignment that Marcus Hunt has ever been on. Stay connected to the action with this book filled full of nothing but bullet flying, hard fighting, edge of your seat action'
                        link='https://www.patreon.com/Urfavoriteauthor'/>
                        
                    </div>
                    {/* First Row */}
                </div>
                </div>
                  </div>
        )
    }
}

export default Books;